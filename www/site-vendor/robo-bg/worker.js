/* Robo Painter: background removal by AI, on the device (Youssef, 21 Nov 2026: «موديل ذكاء اصطناعي نضيفه»).
   Two models, picked by what the computer can do:
   - with WebGPU (a graphics card the browser can use): BiRefNet lite (MIT), the better one, run by Transformers.js (Hugging Face,
     Apache-2.0, kept in /vendor). About 115 MB, downloaded once from Hugging Face.
   - without it (the CPU only): BiRefNet lite needs more memory than the browser gives (std::bad_alloc in our test, 21 Nov 2026),
     so U²-Net small (u2netp, Apache-2.0, 4.6 MB, kept here in /vendor/robo-bg) runs on ONNX Runtime Web (MIT), whose engine
     (about 11 MB) downloads once from jsDelivr.
   Both stay in the browser's cache, so after the first time it works with no internet. It runs in a worker so the page keeps moving.
   in:  { id, data: Uint8ClampedArray (RGBA), w, h }
   out: { t: 'load', p: 0..1, mb } … { t: 'work' } … { t: 'done', id, mask: Uint8Array (w*h, 0..255), m } or { t: 'err', msg } */
const LIB = '/vendor/transformers-4.3.2/transformers.min.js', MODEL = 'onnx-community/BiRefNet_lite-ONNX';
const ORT = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.1/dist/', SMALL = '/vendor/robo-bg/u2netp.onnx';
let M = null;

const files = {};
const progress = (file, loaded, total) => { files[file] = [loaded, total]; const v = Object.values(files), l = v.reduce((s, x) => s + x[0], 0), t = v.reduce((s, x) => s + x[1], 0); postMessage({ t: 'load', p: t ? l / t : 0, mb: Math.round(t / 1048576) }); };

async function loadBig() {
  const T = await import(LIB);
  T.env.allowLocalModels = false;
  const progress_callback = (e) => { if (e.status === 'progress' && e.total) progress(e.file, e.loaded, e.total); };
  const processor = await T.AutoProcessor.from_pretrained(MODEL, { progress_callback });
  const model = await T.AutoModel.from_pretrained(MODEL, { dtype: 'fp16', device: 'webgpu', progress_callback });
  return { kind: 'big', T, processor, model };
}

async function fetchBytes(url) {
  const r = await fetch(url); if (!r.ok) throw new Error('model ' + r.status);
  const total = +r.headers.get('content-length') || 0, rd = r.body && r.body.getReader();
  if (!rd) return new Uint8Array(await r.arrayBuffer());
  const parts = []; let got = 0;
  for (;;) { const { done, value } = await rd.read(); if (done) break; parts.push(value); got += value.length; if (total) progress(url, got, total); }
  const out = new Uint8Array(got); let at = 0; for (const p of parts) { out.set(p, at); at += p.length; } return out;
}
async function loadSmall() {
  const ort = await import(/* @vite-ignore */ ORT + 'ort.wasm.min.mjs');
  ort.env.wasm.wasmPaths = ORT; ort.env.wasm.numThreads = 1;
  const session = await ort.InferenceSession.create(await fetchBytes(SMALL), { executionProviders: ['wasm'] });
  return { kind: 'small', ort, session };
}

async function load() {
  if (M) return M;
  let gpu = false;
  try { gpu = !!(navigator.gpu && await navigator.gpu.requestAdapter()); } catch (e) { gpu = false; }
  if (gpu) { try { M = await loadBig(); return M; } catch (e) { M = null; } }
  M = await loadSmall();
  return M;
}

async function runBig(data, w, h) {
  const { T, processor, model } = M;
  const { pixel_values } = await processor(new T.RawImage(data, w, h, 4));
  const { output_image } = await model({ input_image: pixel_values });
  const mask = await T.RawImage.fromTensor(output_image[0].sigmoid().mul(255).to('uint8')).resize(w, h);
  return new Uint8Array(mask.data);
}

// U²-Net small: 320×320, colours divided by the picture's brightest value then the ImageNet mean/std, as rembg does
async function runSmall(data, w, h) {
  const S = 320, c = new OffscreenCanvas(S, S), g = c.getContext('2d');
  const src = new OffscreenCanvas(w, h); src.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(data), w, h), 0, 0);
  g.drawImage(src, 0, 0, S, S); const px = g.getImageData(0, 0, S, S).data;
  let mx = 1; for (let i = 0; i < px.length; i += 4) mx = Math.max(mx, px[i], px[i + 1], px[i + 2]);
  const mean = [0.485, 0.456, 0.406], std = [0.229, 0.224, 0.225], x = new Float32Array(3 * S * S);
  for (let i = 0; i < S * S; i++) for (let k = 0; k < 3; k++) x[k * S * S + i] = (px[i * 4 + k] / mx - mean[k]) / std[k];
  const { ort, session } = M, feeds = {}; feeds[session.inputNames[0]] = new ort.Tensor('float32', x, [1, 3, S, S]);
  const out = await session.run(feeds), d = out[session.outputNames[0]].data;
  let lo = Infinity, hi = -Infinity; for (let i = 0; i < S * S; i++) { lo = Math.min(lo, d[i]); hi = Math.max(hi, d[i]); }
  const m = new OffscreenCanvas(S, S), mg = m.getContext('2d'), mi = mg.createImageData(S, S);
  for (let i = 0; i < S * S; i++) { mi.data[i * 4 + 3] = Math.round(255 * (d[i] - lo) / ((hi - lo) || 1)); }
  mg.putImageData(mi, 0, 0);
  const big = new OffscreenCanvas(w, h), bg = big.getContext('2d'); bg.imageSmoothingQuality = 'high'; bg.drawImage(m, 0, 0, w, h);
  const a = bg.getImageData(0, 0, w, h).data, mask = new Uint8Array(w * h); for (let i = 0; i < w * h; i++) mask[i] = a[i * 4 + 3];
  return mask;
}

onmessage = async (ev) => {
  const { id, data, w, h } = ev.data;
  try {
    await load();
    postMessage({ t: 'work' });
    let mask;
    try { mask = M.kind === 'big' ? await runBig(data, w, h) : await runSmall(data, w, h); }
    catch (e) { if (M.kind !== 'big') throw e; M = await loadSmall(); mask = await runSmall(data, w, h); }   // the graphics card gave up: use the small one
    postMessage({ t: 'done', id, mask, m: M.kind }, [mask.buffer]);
  } catch (e) { postMessage({ t: 'err', id, msg: String((e && e.message) || e) }); }
};

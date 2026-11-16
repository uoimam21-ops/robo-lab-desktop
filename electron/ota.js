// Live updates of the journey and the labs (see scripts/ota.mjs). Works on Electron 22 too (no fetch: https + zlib).
//
// <userData>/ota/
//   objects/<sha256>   downloaded files, named by their hash (checked before they are kept)
//   state.json         { v, files: { "lab/x.html": sha256 }, pending, tries }  — the files used now, on top of the app's own
//   next.json          a newer set, fully downloaded; it becomes state.json the next time the app starts
// Safety: a new set starts «pending». If the app doesn't stay up for 20 s with it twice in a row, the app goes back to its own files.
const { app } = require('electron');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const zlib = require('zlib');
const crypto = require('crypto');

const NATIVE = 1;   // raise when the native side gains something new pages need (ota-native.txt in a bundle says what it needs)
const URL0 = process.env.ROBO_OTA_URL || 'https://github.com/uoimam21-ops/robo-lab-download/releases/latest/download/';   // env: for tests
const DIR = path.join(app.getPath('userData'), 'ota'), OBJ = path.join(DIR, 'objects');
const STATE = path.join(DIR, 'state.json'), NEXT = path.join(DIR, 'next.json');
let state = null, base = { files: {} };

const readJson = (f) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (_) { return null; } };
const save = () => { try { fs.mkdirSync(DIR, { recursive: true }); fs.writeFileSync(STATE, JSON.stringify(state)); } catch (_) {} };
const newer = (a, b) => { const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number); for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0); } return false; };

// called once at start, before any page loads
function init(root) {
  base = readJson(path.join(root, 'ota-base.json')) || { v: app.getVersion(), files: {} };
  state = readJson(STATE);
  const next = readJson(NEXT);
  if (next) { state = Object.assign(next, { pending: true, tries: 0 }); try { fs.unlinkSync(NEXT); } catch (_) {} }
  if (state && !newer(state.v, base.v)) state = null;                       // the app itself is as new: its own files win
  if (state && state.pending && ++state.tries > 2) state = null;            // didn't hold twice: back to the app's own files
  if (state) save(); else try { fs.unlinkSync(STATE); } catch (_) {}
  if (state && state.pending) setTimeout(() => { if (state) { state.pending = false; state.tries = 0; save(); } }, 20000);
}

// URL path ("/lab/x.html") → a downloaded file to use instead of the app's own, or null
function fileFor(p) {
  if (!state) return null;
  const h = state.files[p.replace(/^\/+/, '')];
  if (!h) return null;
  const f = path.join(OBJ, h);
  return fs.existsSync(f) ? f : null;
}

function get(url, hops = 5) {
  return new Promise((res, rej) => {
    (url.startsWith('http:') ? http : https).get(url, { headers: { 'User-Agent': 'robo-journey/' + app.getVersion() } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location && hops > 0) { r.resume(); return res(get(new URL(r.headers.location, url).toString(), hops - 1)); }
      if (r.statusCode !== 200) { r.resume(); return rej(new Error('HTTP ' + r.statusCode)); }
      const parts = []; r.on('data', (c) => parts.push(c)); r.on('end', () => res(Buffer.concat(parts))); r.on('error', rej);
    }).on('error', rej).setTimeout(60000, function () { this.destroy(new Error('timeout')); });
  });
}

// in the background: is there a newer set? download what's missing, ready for the next start
async function check() {
  try {
    const j = JSON.parse((await get(URL0 + 'ota.json')).toString('utf8'));
    const cur = state ? state.v : base.v;
    if (!j || !j.files || !newer(j.v, cur) || (j.native || 1) > NATIVE) return;
    fs.mkdirSync(OBJ, { recursive: true });
    const files = {};
    for (const [p, h] of Object.entries(j.files)) {
      if (base.files[p] === h) continue;                                    // the app already has this exact file
      const f = path.join(OBJ, h);
      if (!fs.existsSync(f)) {
        const data = zlib.gunzipSync(await get(URL0 + h + '.gz'));
        if (crypto.createHash('sha256').update(data).digest('hex') !== h) throw new Error('bad file ' + p);
        fs.writeFileSync(f + '.tmp', data); fs.renameSync(f + '.tmp', f);
      }
      files[p] = h;
    }
    fs.writeFileSync(NEXT + '.tmp', JSON.stringify({ v: j.v, files })); fs.renameSync(NEXT + '.tmp', NEXT);
    // tidy: keep only the files the current and the next sets use
    const keep = new Set([...Object.values(files), ...Object.values((state && state.files) || {})]);
    for (const f of fs.readdirSync(OBJ)) if (!keep.has(f)) try { fs.unlinkSync(path.join(OBJ, f)); } catch (_) {}
    console.log('ota: v' + j.v + ' ready for the next start (' + Object.keys(files).length + ' files)');
  } catch (e) { console.log('ota: ' + e.message); }
}

const version = () => (state ? state.v : base.v);
module.exports = { init, fileFor, check, version, NATIVE };

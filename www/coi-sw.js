/* Robo Egypt Lab: makes the /lab/ pages "cross-origin isolated" on any static host.
   That unlocks SharedArrayBuffer, which the Python editor needs for a real Stop button and for input().
   Only /lab/ pages and same-site files get the headers; the rest of the site (journey, YouTube videos) is untouched. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

const safari = /^((?!chrome|android|crios|fxios).)*safari/i.test(self.navigator.userAgent);
const COEP = safari ? 'require-corp' : 'credentialless';

/* input() without SharedArrayBuffer (Android's WebView is never cross-origin isolated; Youssef, 16 Nov 2026): Python's worker asks
   with a synchronous request to /__robo_input__?id=…, and this worker answers it when the page sends the kid's answer
   ({type:'robo-input', id, text}). Every 4 minutes the request is answered «again» so the browser doesn't drop it. */
const waits = new Map(), early = new Map();
self.addEventListener('message', e => {
  const d = e.data; if (!d || d.type !== 'robo-input') return;
  const w = waits.get(d.id); if (w) { waits.delete(d.id); w(String(d.text)); } else early.set(d.id, String(d.text));
});
const answer = t => new Response(t, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });

self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (u.origin === self.location.origin && u.pathname === '/__robo_input__') {
    const id = u.searchParams.get('id') || '';
    e.respondWith(new Promise(res => {
      if (early.has(id)) { const t = early.get(id); early.delete(id); return res(answer(t)); }
      const done = t => { clearTimeout(tm); res(answer(t)); };
      const tm = setTimeout(() => { if (waits.get(id) === done) { waits.delete(id); res(answer('\u0000AGAIN')); } }, 240000);
      waits.set(id, done);
    }));
    return;
  }
  if (u.origin !== self.location.origin) return;                       // other sites: browser handles it normally
  if (r.mode === 'navigate' && !u.pathname.startsWith('/lab/')) return; // only lab pages become isolated
  if (r.cache === 'only-if-cached' && r.mode !== 'same-origin') return;
  e.respondWith(fetch(r).then(res => {
    if (res.status === 0) return res;
    const h = new Headers(res.headers);
    h.set('Cross-Origin-Embedder-Policy', COEP);
    h.set('Cross-Origin-Opener-Policy', 'same-origin');
    h.set('Cross-Origin-Resource-Policy', 'same-origin');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
  }).catch(() => Response.error()));
});

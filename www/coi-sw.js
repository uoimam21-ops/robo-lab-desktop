/* Robo Egypt Lab: makes the /lab/ pages "cross-origin isolated" on any static host.
   That unlocks SharedArrayBuffer, which the Python editor needs for a real Stop button and for input().
   Only /lab/ pages and same-site files get the headers; the rest of the site (journey, YouTube videos) is untouched. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

const safari = /^((?!chrome|android|crios|fxios).)*safari/i.test(self.navigator.userAgent);
const COEP = safari ? 'require-corp' : 'credentialless';

self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
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

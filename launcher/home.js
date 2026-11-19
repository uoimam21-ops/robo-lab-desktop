// The app's home and its bar (16 Nov 2026 spec, 3 «Windows & Android home»). Youssef: «when the app opens, two cards, Robo Journey and
// Robo Lab, and they always stay on top»; «a disconnection message, with a button to Robo Lab that works offline» (shown 30 s).
// the journey's «🏠 الرئيسية» goes to «/», which is this page: inside the frame that would put a second bar under the first
// (Youssef's phone, 16 Nov 2026, and the journey then failed to open in the inner frame). Hand it to the real home instead.
if (window.top !== window) {
  try { window.top.__roboHome ? window.top.__roboHome() : window.top.location.replace('/'); } catch (_) { window.top.location.replace('/'); }
} else (() => {
const $ = (id) => document.getElementById(id);
const PAGES = { journey: '/journey.html', lab: '/lab/index.html' };
const view = $('view');
let cur = 'home', netT = 0;

function show(where, src) {
  if (where === 'journey' && !navigator.onLine) { netMessage(); return; }   // no half-working journey offline (spec: never open what can't work)
  cur = where;
  $('tabJ').classList.toggle('on', where === 'journey'); $('tabL').classList.toggle('on', where === 'lab');
  if (where === 'home') { view.hidden = true; $('homeView').hidden = false; document.title = 'رحلة روبو | Robo Egypt'; if (location.hash) history.replaceState(null, '', location.pathname); return; }
  $('homeView').hidden = true; view.hidden = false;
  const want = src || PAGES[where];
  try { if (view.contentWindow && view.contentWindow.location.pathname === want) { view.focus(); return; } } catch (_) {}
  view.src = want; if (location.hash !== '#' + where) history.replaceState(null, '', '#' + where);
}
document.querySelectorAll('[data-go]').forEach((el) => el.addEventListener('click', (e) => { e.preventDefault(); show(el.dataset.go); }));
$('goHome').onclick = () => show('home');
window.__roboHome = () => show('home');
// «⛶ ملء الشاشة» in a lab (lab-tours.js, 16 Nov 2026): the lab is in this page's frame, so this page hides its bar and goes full screen
window.__roboFull = (on) => {
  document.body.classList.toggle('full', !!on);
  try { if (on && !document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {}); else if (!on && document.fullscreenElement) document.exitFullscreen?.(); } catch (_) {}
};

// the bar follows what the child opens inside (a lab opened from the journey lights «روبو لاب», and the other way round)
view.addEventListener('load', () => {
  try {
    const w = view.contentWindow, p = w.location.pathname;
    if (p === '/' || p === '/index.html' || p === '/home') { view.src = 'about:blank'; show('home'); return; }   // never the home inside itself
    if (window.roboDesktop && !w.roboDesktop) w.roboDesktop = window.roboDesktop;   // Arduino upload etc. inside the frame (desktop)
    // Python and Robo Code need cross-origin isolation (input(), Stop), which a page inside this frame can't have: open them full
    // screen (the phone's Back button / the lab's logo come back here)
    // (Android's WebView is never isolated, even full screen, and answers input() itself: stay under the bar there)
    if (window.roboDesktop && /^\/lab\/(python|code)\.html$/.test(p) && !w.crossOriginIsolated) { location.href = p + w.location.search; return; }
    const inLab = p.startsWith('/lab/') && !/roboblock/.test(p);   // Robo Painter is a lab too
    $('tabL').classList.toggle('on', inLab); $('tabJ').classList.toggle('on', !inLab);
    document.title = w.document.title || document.title;
  } catch (_) { /* another site: leave it */ }
});

// offline: a message for 30 s with a button to Robo Lab, then only a small pill in the bar
function netMessage() {
  $('netMsg').hidden = false; clearTimeout(netT); netT = setTimeout(() => { $('netMsg').hidden = true; }, 30000);
}
function net() {
  const off = !navigator.onLine;
  $('offPill').hidden = !off; $('jNeed').hidden = !off; document.querySelector('.card.journey').classList.toggle('dim', off);
  if (off) netMessage(); else { $('netMsg').hidden = true; clearTimeout(netT); }
}
$('netLab').onclick = () => { $('netMsg').hidden = true; show('lab'); };
$('netX').onclick = () => { $('netMsg').hidden = true; clearTimeout(netT); };
$('offPill').onclick = netMessage;
addEventListener('online', net); addEventListener('offline', net); net();

// open where the address says (#journey / #lab), else the two cards
const h = location.hash.slice(1); if (PAGES[h]) show(h); else show('home');
if (window.roboDesktop) window.roboDesktop.info().then((i) => { $('ver').textContent = 'v' + i.version; }).catch(() => {});
})();

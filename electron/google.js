// «الدخول بحساب Google» in the desktop app (28 Nov 2026). Google refuses to sign in inside an app's own window, so the app does
// what desktop apps do (RFC 8252, «loopback redirect»): the journey opens Supabase's Google page in the computer's own browser,
// with this address to come back to:  http://127.0.0.1:47613/auth
// When the child picks their Google account, Supabase sends the browser there with a one-time «code». This file is the tiny
// server on that address: it takes the code, tells the browser «go back to the app», brings the app to the front, and hands the
// code to the journey. The journey alone holds the matching secret (PKCE code_verifier), so the code is useless to anything else,
// and it turns it into the session itself (supabase /auth/v1/token?grant_type=pkce).
//
// Supabase → Authentication → URL Configuration → Redirect URLs must list  http://127.0.0.1:47613/auth
const http = require('http');
const { ipcMain, shell } = require('electron');

const PORT = 47613, PATH = '/auth', WAIT = 5 * 60 * 1000;   // the child has 5 minutes in the browser
let server = null, closing = null, done = null, timer = 0, getWin = () => null;

const page = (ok) => '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>رحلة روبو</title>' +
  '<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#F5F7FB;font:18px/1.8 Cairo,Tahoma,sans-serif;color:#1B2350;text-align:center}' +
  '.c{background:#fff;border:2px solid #E3E6F2;border-radius:24px;padding:28px 34px;max-width:440px}b{font-size:24px}</style></head><body><div class="c">' +
  (ok ? '<div style="font-size:54px">✅</div><b>تم تسجيل الدخول</b><p>ارجع الآن إلى تطبيق <b style="font-size:inherit">رحلة روبو</b>. يمكنك إغلاق هذه الصفحة.</p><p dir="ltr" style="color:#8A90A8;font-size:14px">Signed in. Go back to the Robo Journey app.</p>'
      : '<div style="font-size:54px">😕</div><b>لم يكتمل تسجيل الدخول</b><p>ارجع إلى تطبيق رحلة روبو واضغط «الدخول بحساب Google» مرة أخرى.</p>') +
  '</div></body></html>';

function finish(result) {
  clearTimeout(timer);
  const d = done; done = null;
  if (server) {   // let the browser get its page first
    const s = server; server = null; closing = s;
    setTimeout(() => { if (closing === s) { s.close(); closing = null; } }, 1500);
  }
  if (d) d(result);
}

// step 1: listen, and tell the journey which address to give Supabase
function start() {
  if (done) finish({ error: 'restarted' });   // a second press: the first wait ends
  if (server) { closing = server; server = null; }
  const prev = closing; closing = null;
  return (prev ? new Promise((r) => prev.close(() => r())) : Promise.resolve()).then(() => new Promise((resolve) => {
    const s = http.createServer((req, res) => {
      const u = new URL(req.url, 'http://127.0.0.1:' + PORT);
      if (u.pathname !== PATH) { res.writeHead(404, { Connection: 'close' }); res.end(); return; }
      const code = u.searchParams.get('code'), err = u.searchParams.get('error_description') || u.searchParams.get('error');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', Connection: 'close' });
      res.end(page(!!code));
      const w = getWin();
      if (w) { if (w.isMinimized()) w.restore(); w.show(); w.focus(); }
      finish(code ? { code } : { error: err || 'no code' });
    });
    s.on('error', (e) => resolve({ error: e.code === 'EADDRINUSE' ? 'busy' : String(e.message || e) }));
    s.listen(PORT, '127.0.0.1', () => { server = s; resolve({ redirect: 'http://127.0.0.1:' + PORT + PATH }); });
  }));
}

// step 2: open Supabase's Google page in the browser and wait for the code (or an error / 5 minutes)
function open(url) {
  let u; try { u = new URL(String(url)); } catch (_) { return Promise.resolve({ error: 'bad url' }); }
  // only Supabase's own sign-in page (the journey builds it from its project address)
  if (u.protocol !== 'https:' || !/\.supabase\.co$/.test(u.hostname) || u.pathname !== '/auth/v1/authorize' || !server)
    return Promise.resolve({ error: 'bad url' });
  return new Promise((resolve) => {
    done = resolve;
    timer = setTimeout(() => finish({ error: 'timeout' }), WAIT);
    shell.openExternal(u.href).catch(() => finish({ error: 'no browser' }));
  });
}

function setup(win) {
  getWin = win;
  ipcMain.handle('robo:google-start', () => start());
  ipcMain.handle('robo:google-open', (_e, url) => open(url));
  ipcMain.handle('robo:google-cancel', () => { finish({ error: 'cancelled' }); return true; });
}
module.exports = { setup };

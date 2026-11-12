// Robo Lab desktop: the Robo Egypt labs in a window, working without internet.
// Runs on Electron 44 (Windows 10/11) and Electron 22 (the last one for Windows 7), so it only uses APIs both have.
const { app, BrowserWindow, protocol, shell, Menu, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const arduino = require('./arduino');

const ROOT = path.join(__dirname, '..', 'www');
const LAUNCHER = path.join(__dirname, '..', 'launcher');
const SCHEME = 'robo', HOST = 'lab', ORIGIN = SCHEME + '://' + HOST;
const SITE = 'https://roboegypt.com';

/* Graphics (GPU): old PCs / old drivers can crash Chromium's GPU process, and then the app closes itself.
   - Electron 22 (the Windows 7 build): GPU off by default; «تسريع الرسوميات» in the menu turns it on for PCs that can.
   - Newer builds: GPU on; if it crashes twice, the app restarts once without it and remembers that.
   Saved in <userData>/settings.json. */
const SETTINGS = path.join(app.getPath('userData'), 'settings.json');
const legacy = process.versions.electron.startsWith('22.');
let settings = {};
try { settings = JSON.parse(fs.readFileSync(SETTINGS, 'utf8')); } catch (_) {}
const saveSettings = () => { try { fs.mkdirSync(path.dirname(SETTINGS), { recursive: true }); fs.writeFileSync(SETTINGS, JSON.stringify(settings)); } catch (_) {} };
const gpuOn = settings.gpu != null ? !!settings.gpu : !legacy;
if (!gpuOn) app.disableHardwareAcceleration();
// Electron 22 (the Windows 7 build) is older than Windows 10/11: its GPU process's sandbox can crash there
// ("GPU process isn't usable. Goodbye.") even without hardware acceleration, so run that part without the sandbox
if (legacy && process.platform === 'win32' && /^(10|11)\./.test(require('os').release())) {
  app.commandLine.appendSwitch('disable-gpu-sandbox');
}
let gpuCrashes = 0;
app.on('child-process-gone', (_e, d) => {
  if (d.type !== 'GPU' || !gpuOn || d.reason === 'clean-exit') return;
  if (++gpuCrashes < 2) return;
  settings.gpu = false; saveSettings();
  app.relaunch(); app.exit(0);
});

protocol.registerSchemesAsPrivileged([{
  scheme: SCHEME,
  privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true },
}]);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.wasm': 'application/wasm', '.zip': 'application/zip',
  '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.wav': 'audio/wav',
  '.txt': 'text/plain; charset=utf-8', '.map': 'application/json',
};

// URL path → file on disk (or null). Pretty paths from the site keep working: /lab/roboblock, /journey, /lab/ …
function fileFor(pathname) {
  let p = decodeURIComponent(pathname);
  if (p === '/' || p === '/lab' || p === '/lab/' || p === '/index.html' || p === '/lab/index.html') return path.join(LAUNCHER, 'index.html');
  if (p.startsWith('/launcher/')) return safe(LAUNCHER, p.slice('/launcher'.length));
  if (p === '/journey' || p === '/journey.html' || p === '/lab/roboblock') p = '/lab/roboblock.html';
  if (p.startsWith('/vendor/fonts/css2')) p = '/vendor/fonts/fonts.css';
  let f = safe(ROOT, p);
  if (f && !path.extname(f) && fs.existsSync(f + '.html')) f += '.html';
  return f && fs.existsSync(f) && fs.statSync(f).isFile() ? f : null;
}
function safe(base, rel) {
  const f = path.normalize(path.join(base, rel));
  return f.startsWith(base + path.sep) || f === base ? f : null;
}
// the lab pages are cross-origin isolated (Python's Stop button and input() need SharedArrayBuffer);
// Robo Block is not, so its YouTube videos keep working
function headersFor(pathname, mime) {
  const h = { 'Content-Type': mime, 'Cross-Origin-Resource-Policy': 'same-origin', 'Cache-Control': 'no-cache' };
  // pages and their workers both need the headers (a worker without them is blocked inside an isolated page)
  if (!/^\/(lab\/roboblock|journey)/.test(pathname)) {
    h['Cross-Origin-Opener-Policy'] = 'same-origin';
    h['Cross-Origin-Embedder-Policy'] = 'credentialless';   // same as the website's coi-sw.js
  }
  return h;
}
function serve(url) {
  const u = new URL(url), f = fileFor(u.pathname);
  if (!f) return { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' }, data: Buffer.from('مش موجود في التطبيق') };
  const mime = MIME[path.extname(f).toLowerCase()] || 'application/octet-stream';
  return { status: 200, headers: headersFor(u.pathname, mime), data: fs.readFileSync(f) };
}

function registerProtocol() {
  if (protocol.handle) {                    // Electron 25+
    protocol.handle(SCHEME, (req) => {
      const r = serve(req.url);
      return new Response(r.data, { status: r.status, headers: r.headers });
    });
  } else {                                   // Electron 22 (Windows 7)
    protocol.registerBufferProtocol(SCHEME, (req, cb) => {
      const r = serve(req.url);
      cb({ statusCode: r.status, headers: r.headers, mimeType: r.headers['Content-Type'].split(';')[0], charset: 'utf-8', data: r.data });
    });
  }
}

// links: inside the app when we have the page, the website for everything else (plans, articles, WhatsApp …)
function route(contents) {
  const outside = (url) => {
    if (!/^(https?:|mailto:|tel:)/.test(url) && !url.startsWith(ORIGIN)) return false;
    if (url.startsWith(ORIGIN)) {
      const u = new URL(url);
      if (fileFor(u.pathname)) return false;
      url = SITE + u.pathname + u.search + u.hash;     // a website page the app doesn't have
    }
    shell.openExternal(url);
    return true;
  };
  contents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith(ORIGIN) && fileFor(new URL(url).pathname)) return { action: 'allow' };
    outside(url);
    return { action: 'deny' };
  });
  contents.on('will-navigate', (e, url) => { if (outside(url)) e.preventDefault(); });
}

let win = null;
function createWindow() {
  win = new BrowserWindow({
    width: 1280, height: 820, minWidth: 900, minHeight: 600,
    title: 'Robo Lab | روبو لاب',
    icon: path.join(__dirname, '..', 'build', 'icon.png'),
    backgroundColor: '#F6F8FE',
    autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true, spellcheck: false },
  });
  route(win.webContents);
  win.webContents.on('did-create-window', (w) => route(w.webContents));
  win.loadURL(ORIGIN + '/');
}

// F11 full screen, Ctrl+R reload, Ctrl +/- zoom: handy on the academy's lab PCs
function menu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { label: 'روبو لاب', submenu: [
      { label: 'الصفحة الرئيسية', accelerator: 'Alt+Home', click: () => win && win.loadURL(ORIGIN + '/') },
      { role: 'reload', label: 'إعادة تحميل' }, { role: 'togglefullscreen', label: 'ملء الشاشة' },
      { label: 'تسريع الرسوميات (كارت الشاشة)', type: 'checkbox', checked: gpuOn, click: (it) => { settings.gpu = it.checked; saveSettings(); app.relaunch(); app.exit(0); } },
      { role: 'zoomIn', label: 'تكبير' }, { role: 'zoomOut', label: 'تصغير' }, { role: 'resetZoom', label: 'الحجم العادي' },
      { type: 'separator' }, { role: 'toggleDevTools', label: 'أدوات المطوّر' }, { role: 'quit', label: 'خروج' },
    ] },
    // macOS: copy / paste / undo in text fields only work when the app has an Edit menu
    ...(process.platform === 'darwin' ? [{ role: 'editMenu', label: 'تعديل' }] : []),
  ]));
}

ipcMain.handle('robo:info', () => ({ version: app.getVersion(), electron: process.versions.electron, platform: process.platform }));

if (!app.requestSingleInstanceLock()) app.quit();
else {
  app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
  app.whenReady().then(() => { registerProtocol(); arduino.setup(); menu(); createWindow(); });
  app.on('window-all-closed', () => app.quit());
}

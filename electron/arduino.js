// Upload to a real Arduino: arduino-cli (bundled in resources/arduino) compiles the sketch and uploads it over USB.
const { app, ipcMain } = require('electron');
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

// boards we offer: Uno, Nano (new and old bootloader; most cheap clones need the old one), Mega
const BOARDS = {
  uno: 'arduino:avr:uno',
  nano: 'arduino:avr:nano:cpu=atmega328',
  nanoOld: 'arduino:avr:nano:cpu=atmega328old',
  mega: 'arduino:avr:mega:cpu=atmega2560',
};

function base() {
  const packed = path.join(process.resourcesPath || '', 'arduino');
  return fs.existsSync(packed) ? packed : path.join(__dirname, '..', 'arduino');   // dev: npm start
}
function cliPath() {
  const plat = process.platform === 'win32' ? 'win-' + (process.arch === 'ia32' ? 'ia32' : 'x64') : process.platform === 'darwin' ? 'mac-' + process.arch : 'linux-x64';
  const f = path.join(base(), 'bin', plat, process.platform === 'win32' ? 'arduino-cli.exe' : 'arduino-cli');
  return fs.existsSync(f) ? f : null;
}
// arduino-cli config with absolute paths, written to the user's app data (the install folder may be read-only)
function configPath() {
  const dir = app.getPath('userData'), f = path.join(dir, 'arduino-cli.yaml');
  const b = base();
  const y = ['directories:', '  data: ' + JSON.stringify(path.join(b, 'data')), '  user: ' + JSON.stringify(path.join(b, 'user')),
    '  downloads: ' + JSON.stringify(path.join(dir, 'arduino-staging')), 'build_cache:', '  path: ' + JSON.stringify(path.join(dir, 'arduino-cache')),
    'metrics:', '  enabled: false', 'updater:', '  enable_notification: false', ''].join('\n');
  fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(f) || fs.readFileSync(f, 'utf8') !== y) fs.writeFileSync(f, y);
  return f;
}
function cli(args, onLine) {
  return new Promise((resolve) => {
    const exe = cliPath();
    if (!exe) return resolve({ code: -1, out: 'arduino-cli missing' });
    const p = spawn(exe, [...args, '--config-file', configPath()], { windowsHide: true });
    let out = '';
    const feed = (d) => { const s = d.toString(); out += s; if (onLine) s.split(/\r?\n/).filter(Boolean).forEach(onLine); };
    p.stdout.on('data', feed); p.stderr.on('data', feed);
    p.on('error', (e) => resolve({ code: -1, out: String(e) }));
    p.on('close', (code) => resolve({ code, out }));
  });
}

async function ports() {
  const r = await cli(['board', 'list', '--format', 'json']);
  let list = [];
  try { const j = JSON.parse(r.out); list = Array.isArray(j) ? j : j.detected_ports || []; } catch (_) { return { ok: false, ports: [] }; }
  return {
    ok: true,
    ports: list.filter((x) => x.port && x.port.protocol === 'serial').map((x) => ({
      address: x.port.address,
      label: x.port.label || x.port.address,
      board: (x.matching_boards && x.matching_boards[0] && x.matching_boards[0].name) || '',
      usb: (x.port.properties && (x.port.properties.vid || '') + ':' + (x.port.properties.pid || '')) || '',
    })),
  };
}

// the most common problems, in words a kid (or a parent) understands
function explain(out, stage) {
  if (stage === 'compile') {
    const m = out.match(/sketch\.ino:(\d+):\d+: error: ([^\n]+)/);
    return { why: 'compile', line: m ? +m[1] : null, msg: m ? m[2] : (out.match(/error: ([^\n]+)/) || [, ''])[1] };
  }
  if (/not in sync|stk500_recv|programmer is not responding|resp=0x/i.test(out)) return { why: 'sync' };
  // the board was unplugged / wrong port (Linux: No such file; Windows: cannot find the file)
  if (/no such file or directory|cannot find the file|port not found|no such device/i.test(out)) return { why: 'noport' };
  if (/access is denied|permission denied|resource busy|could not open port/i.test(out)) return { why: 'busy' };
  return { why: 'other' };
}

let busy = false;
async function upload(e, { code, board, port }) {
  const send = (line) => { try { e.sender.send('robo:ard-log', line); } catch (_) {} };
  if (busy) return { ok: false, why: 'running' };
  if (!BOARDS[board]) return { ok: false, why: 'board' };
  if (!port || !/^[\w./\\-]+$/.test(port)) return { ok: false, why: 'noport' };
  if (typeof code !== 'string' || code.length > 200000) return { ok: false, why: 'code' };
  busy = true;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'robo-')), sk = path.join(dir, 'sketch');
  try {
    fs.mkdirSync(sk); fs.writeFileSync(path.join(sk, 'sketch.ino'), code);
    send('⚙️ compile');
    const c = await cli(['compile', '--fqbn', BOARDS[board], sk], send);
    if (c.code !== 0) return Object.assign({ ok: false, stage: 'compile', out: c.out.slice(-4000) }, explain(c.out, 'compile'));
    const size = (c.out.match(/Sketch uses (\d+) bytes \((\d+)%\)/) || []).slice(1).map(Number);
    send('⬆️ upload');
    const u = await cli(['upload', '--fqbn', BOARDS[board], '-p', port, sk], send);
    if (u.code !== 0) return Object.assign({ ok: false, stage: 'upload', out: u.out.slice(-4000) }, explain(u.out, 'upload'));
    return { ok: true, bytes: size[0] || null, percent: size[1] || null };
  } finally {
    busy = false;
    fs.rm(dir, { recursive: true, force: true }, () => {});
  }
}

function setup() {
  ipcMain.handle('robo:ard-ready', () => !!cliPath());
  ipcMain.handle('robo:ard-ports', () => ports());
  ipcMain.handle('robo:ard-upload', upload);
}
module.exports = { setup, BOARDS };

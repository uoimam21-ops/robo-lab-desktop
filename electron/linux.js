// «🖥 شغّل على الجهاز»: the lessons' operating-system examples (fork/exec, pthreads, threading, mmap) need a real Linux.
// Youssef, 28 Nov 2026: run them in the desktop app through WSL2. The app keeps its own small distro «RoboLinux»
// (Ubuntu 24.04 + gcc + python3), separate from any Ubuntu the user already has; ROS 2 (phase 5) can reuse it.
// On macOS/Linux the same examples run natively (bash + gcc + python3 already there).
const { ipcMain, app } = require('electron');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const DISTRO = 'RoboLinux';
const ROOTFS = 'https://cloud-images.ubuntu.com/wsl/releases/24.04/current/ubuntu-noble-wsl-amd64-wsl.rootfs.tar.gz';
const SUMS = 'https://cloud-images.ubuntu.com/wsl/releases/24.04/current/SHA256SUMS';
const WIN = process.platform === 'win32';

// run a command, collect output (wsl.exe prints UTF-16LE for its own messages, like `wsl -l`)
function sh(cmd, args, { input, timeout = 60000, utf16 = false } = {}) {
  return new Promise((resolve) => {
    let out = Buffer.alloc(0), err = Buffer.alloc(0), done = false;
    let p; try { p = spawn(cmd, args, { windowsHide: true }); } catch (e) { return resolve({ code: -1, out: '', err: String(e) }); }
    const t = setTimeout(() => { if (!done) { try { p.kill(); } catch (_) {} } }, timeout);
    p.stdout.on('data', (d) => { out = Buffer.concat([out, d]); });
    p.stderr.on('data', (d) => { err = Buffer.concat([err, d]); });
    p.on('error', (e) => { done = true; clearTimeout(t); resolve({ code: -1, out: '', err: String(e) }); });
    p.on('close', (code) => { done = true; clearTimeout(t); const dec = (b) => (utf16 ? b.toString('utf16le') : b.toString('utf8')).replace(/\0/g, ''); resolve({ code, out: dec(out), err: dec(err) }); });
    if (input != null) p.stdin.end(input); else p.stdin.end();
  });
}

// { platform, wsl, distro, tools }: what's missing before «▶ شغّل على الجهاز» works
async function status() {
  if (!WIN) {
    const r = await sh('sh', ['-c', 'command -v gcc && command -v python3']);
    return { platform: process.platform, wsl: true, distro: true, tools: r.code === 0 };
  }
  const st = await sh('wsl.exe', ['--status'], { utf16: true, timeout: 20000 });
  if (st.code !== 0) return { platform: 'win32', wsl: false, distro: false, tools: false };
  const ls = await sh('wsl.exe', ['-l', '-q'], { utf16: true, timeout: 20000 });
  const distro = ls.out.split(/\r?\n/).map((s) => s.trim()).includes(DISTRO);
  if (!distro) return { platform: 'win32', wsl: true, distro: false, tools: false };
  const t = await sh('wsl.exe', ['-d', DISTRO, '--', 'sh', '-c', 'command -v gcc && command -v python3'], { timeout: 60000 });
  return { platform: 'win32', wsl: true, distro: true, tools: t.code === 0 };
}

function download(url, file, onLog) {
  return new Promise((resolve, reject) => {
    const get = (u, hops) => https.get(u, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && hops < 5) { res.resume(); return get(new URL(res.headers.location, u).href, hops + 1); }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
      const total = +res.headers['content-length'] || 0; let got = 0, last = 0;
      const f = fs.createWriteStream(file); const h = crypto.createHash('sha256');
      res.on('data', (d) => { got += d.length; h.update(d); const pct = total ? Math.floor((got * 100) / total) : 0; if (pct >= last + 5) { last = pct; onLog('⬇ ' + pct + '%'); } });
      res.pipe(f); f.on('finish', () => f.close(() => resolve(h.digest('hex')))); f.on('error', reject);
    }).on('error', reject);
    get(url, 0);
  });
}
function text(url) { return new Promise((resolve, reject) => https.get(url, (r) => { let s = ''; r.on('data', (d) => { s += d; }); r.on('end', () => resolve(s)); }).on('error', reject)); }

// one-time setup on Windows. Steps report through onLog. Returns { ok } or { ok: false, why, msg }.
async function setup(onLog) {
  if (!WIN) { const s = await status(); return s.tools ? { ok: true } : { ok: false, why: 'tools', msg: 'ثبّت gcc و python3 من مدير الحزم بتاع جهازك' }; }
  let s = await status();
  if (!s.wsl) {
    // WSL itself: needs administrator + a restart (Windows shows the permission box)
    onLog('1/3 تثبيت WSL (Windows هيطلب إذن المسؤول)…');
    const r = await sh('powershell.exe', ['-NoProfile', '-Command', "Start-Process wsl.exe -ArgumentList '--install','--no-distribution' -Verb RunAs -Wait"], { timeout: 30 * 60000 });
    if (r.code !== 0) return { ok: false, why: 'wsl', msg: 'WSL ماتثبتش. جرّب تاني، أو شغّل «wsl --install» من PowerShell كمسؤول.' };
    return { ok: false, why: 'reboot', msg: 'WSL اتثبت. اعمل Restart للجهاز، وبعدين دوس «جهّز بيئة Linux» تاني.' };
  }
  if (!s.distro) {
    const dir = path.join(app.getPath('userData'), 'wsl'); fs.mkdirSync(dir, { recursive: true });
    const tar = path.join(dir, 'ubuntu-24.04.tar.gz');
    onLog('2/3 تحميل Ubuntu 24.04 (حوالي 340 ميجا، مرة واحدة بس)…');
    const sums = await text(SUMS); const want = (sums.split('\n').find((l) => l.includes(path.basename(ROOTFS))) || '').split(/\s+/)[0];
    const got = await download(ROOTFS, tar, onLog);
    if (!want || got !== want) { try { fs.unlinkSync(tar); } catch (_) {} return { ok: false, why: 'sha', msg: 'الملف اللي اتحمّل مش سليم. جرّب تاني.' }; }
    onLog('تجهيز RoboLinux…');
    const imp = await sh('wsl.exe', ['--import', DISTRO, path.join(dir, DISTRO), tar, '--version', '2'], { utf16: true, timeout: 20 * 60000 });
    try { fs.unlinkSync(tar); } catch (_) {}
    if (imp.code !== 0) return { ok: false, why: 'import', msg: (imp.out + imp.err).trim() || 'wsl --import failed' };
  }
  onLog('3/3 تثبيت gcc و python3…');
  const apt = await sh('wsl.exe', ['-d', DISTRO, '-u', 'root', '--', 'sh', '-c', 'export DEBIAN_FRONTEND=noninteractive; apt-get update -q && apt-get install -y -q gcc libc6-dev python3 python3-scapy'], { timeout: 30 * 60000 });
  if (apt.code !== 0) return { ok: false, why: 'apt', msg: (apt.err || apt.out).trim().split('\n').slice(-3).join('\n') };
  s = await status();
  return s.tools ? { ok: true } : { ok: false, why: 'tools', msg: 'gcc أو python3 مش موجودين بعد التثبيت' };
}

// run the lesson's C or Python in a fresh temp folder; output streams line by line through onOut(text, isErr)
let RUNNING = null;
function run({ lang, code }, onOut) {
  return new Promise((resolve) => {
    const b64 = Buffer.from(String(code || ''), 'utf8').toString('base64');
    const build = lang === 'c'
      ? 'gcc -O1 -pthread -o main main.c 2>&1 >/dev/null | sed "s/^/[gcc] /" >&2; [ -x main ] && ./main'
      : 'python3 -u main.py';
    const script = `d=$(mktemp -d); cd "$d"; echo '${b64}' | base64 -d > main.${lang === 'c' ? 'c' : 'py'}; ${build}; rc=$?; cd /; rm -rf "$d"; exit $rc\n`;
    const [cmd, args] = WIN ? ['wsl.exe', ['-d', DISTRO, '--', 'bash', '-s']] : ['bash', ['-s']];
    let p; try { p = spawn(cmd, args, { windowsHide: true }); } catch (e) { return resolve({ ok: false, msg: String(e) }); }
    RUNNING = p;
    const t = setTimeout(() => { try { p.kill(); } catch (_) {} onOut('\n⏹ وقّفناه بعد 30 ثانية\n', true); }, 30000);
    p.stdout.on('data', (d) => onOut(d.toString('utf8'), false));
    p.stderr.on('data', (d) => onOut(d.toString('utf8'), true));
    p.on('close', (code) => { clearTimeout(t); RUNNING = null; resolve({ ok: true, code }); });
    p.on('error', (e) => { clearTimeout(t); RUNNING = null; resolve({ ok: false, msg: String(e) }); });
    p.stdin.end(script);
  });
}

function setupIpc() {
  ipcMain.handle('robo:linux-status', () => status());
  ipcMain.handle('robo:linux-setup', (e) => setup((s) => { try { e.sender.send('robo:linux-log', s); } catch (_) {} }));
  ipcMain.handle('robo:linux-run', (e, opts) => run({ lang: opts && opts.lang === 'c' ? 'c' : 'python', code: opts && opts.code }, (s, err) => { try { e.sender.send('robo:linux-out', { s, err }); } catch (_) {} }));
  ipcMain.handle('robo:linux-stop', () => { if (RUNNING) { try { RUNNING.kill(); } catch (_) {} } return true; });
}

module.exports = { setup: setupIpc, status, run };

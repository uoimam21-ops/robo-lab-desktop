// What the lab pages can ask the desktop app for. Pages check `window.roboDesktop` to know they run in the app.
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('roboDesktop', {
  info: () => ipcRenderer.invoke('robo:info'),
  // Robo Maker: upload the sketch to a real Arduino over USB
  arduino: {
    ready: () => ipcRenderer.invoke('robo:ard-ready'),
    // USB driver for CH340 boards: { needed, installed, available }; install() opens the driver installer
    driver: () => ipcRenderer.invoke('robo:drv-info'),
    installDriver: () => ipcRenderer.invoke('robo:drv-install'),
    ports: () => ipcRenderer.invoke('robo:ard-ports'),
    // board: 'uno' | 'nano' | 'nanoOld' | 'mega'; onLog gets each line arduino-cli prints
    upload: (opts, onLog) => {
      const h = (_e, line) => { try { onLog && onLog(String(line)); } catch (_) {} };
      ipcRenderer.on('robo:ard-log', h);
      return ipcRenderer.invoke('robo:ard-upload', { code: String(opts.code || ''), board: String(opts.board || ''), port: String(opts.port || '') })
        .finally(() => ipcRenderer.removeListener('robo:ard-log', h));
    },
    // Robo Maker «🔬 real chip»: compile only → { ok, hex, bytes, percent } (or { ok: false, why, line, msg })
    compile: (opts) => ipcRenderer.invoke('robo:ard-compile', { code: String((opts && opts.code) || ''), board: String((opts && opts.board) || 'uno') }),
  },
  // the journey's «الدخول بحساب Google» (electron/google.js): start() → { redirect } (or { error }), open(url) → { code } (or { error })
  google: {
    start: () => ipcRenderer.invoke('robo:google-start'),
    open: (url) => ipcRenderer.invoke('robo:google-open', String(url || '')),
    cancel: () => ipcRenderer.invoke('robo:google-cancel'),
  },
  // Lessons «🖥 شغّل على الجهاز»: OS examples (fork, threads, mmap) in a real Linux (WSL2 «RoboLinux» on Windows)
  linux: {
    status: () => ipcRenderer.invoke('robo:linux-status'),            // { platform, wsl, distro, tools }
    setup: (onLog) => {                                                // one-time: WSL → Ubuntu → gcc + python3
      const h = (_e, s) => { try { onLog && onLog(String(s)); } catch (_) {} };
      ipcRenderer.on('robo:linux-log', h);
      return ipcRenderer.invoke('robo:linux-setup').finally(() => ipcRenderer.removeListener('robo:linux-log', h));
    },
    run: (opts, onOut) => {                                            // { lang: 'c' | 'python', code } → { ok, code }
      const h = (_e, m) => { try { onOut && onOut(String(m.s), !!m.err); } catch (_) {} };
      ipcRenderer.on('robo:linux-out', h);
      return ipcRenderer.invoke('robo:linux-run', { lang: String((opts && opts.lang) || 'python'), code: String((opts && opts.code) || '') })
        .finally(() => ipcRenderer.removeListener('robo:linux-out', h));
    },
    stop: () => ipcRenderer.invoke('robo:linux-stop'),
  },
});

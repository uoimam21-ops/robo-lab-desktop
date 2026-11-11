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
  },
});

// Updates (Youssef, 12 Nov 2026, option «ب»): every night the CI builds a new version when the website changed and publishes
// it on github.com/uoimam21-ops/robo-lab-download. Here the app picks it up:
// - Windows 10/11: electron-updater downloads it in the background and installs it when the app closes (or right away if
//   the child presses «حدّث دلوقتي»). Works without code signing.
// - Mac (auto-update needs an Apple Developer ID) and Windows 7 (its own installer): a message with the download link.
// Checked a few seconds after the app opens, at most once every 6 hours, and only with internet.
const { app, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const OWNER = 'uoimam21-ops', REPO = 'robo-lab-download';
const PAGE = 'https://github.com/' + OWNER + '/' + REPO + '/releases/latest';
const STATE = () => path.join(app.getPath('userData'), 'updates.json');
const readState = () => { try { return JSON.parse(fs.readFileSync(STATE(), 'utf8')); } catch (_) { return {}; } };
const writeState = (s) => { try { fs.writeFileSync(STATE(), JSON.stringify(s)); } catch (_) {} };

// "1.10.2" > "1.9.9"
function newer(a, b) {
  const x = String(a).replace(/^v/, '').split('.').map(Number), y = String(b).replace(/^v/, '').split('.').map(Number);
  for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0); }
  return false;
}

// Windows 10/11 builds run Electron 44; the Windows 7 build runs Electron 22 (see build/win7.yml)
const isWin7Build = () => process.platform === 'win32' && /^22\./.test(process.versions.electron);

function autoWindows(win) {
  let autoUpdater;
  try { ({ autoUpdater } = require('electron-updater')); } catch (_) { return false; }
  autoUpdater.setFeedURL({ provider: 'github', owner: OWNER, repo: REPO });
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.on('error', () => {});   // no internet, GitHub down…: try again next time
  autoUpdater.on('update-downloaded', async (info) => {
    const r = await dialog.showMessageBox(win, {
      type: 'info', buttons: ['حدّث دلوقتي', 'بعدين'], defaultId: 0, cancelId: 1,
      title: 'رحلة روبو', message: 'نسخة جديدة من رحلة روبو جاهزة (' + info.version + ')',
      detail: 'فيها آخر الدروس والمختبرات. مشاريعك وتقدّمك مش هيتأثروا. لو دوست «بعدين»، هتتثبّت لوحدها لما تقفل التطبيق.',
    });
    if (r.response === 0) autoUpdater.quitAndInstall(false, true);
  });
  autoUpdater.checkForUpdates().catch(() => {});
  return true;
}

// Electron 22 (Windows 7) has no fetch() in the main process: plain https, GitHub wants a User-Agent
function latestRelease() {
  return new Promise((resolve) => {
    const req = require('https').get({ host: 'api.github.com', path: '/repos/' + OWNER + '/' + REPO + '/releases/latest',
      headers: { 'User-Agent': 'robo-journey-app', Accept: 'application/vnd.github+json' }, timeout: 15000 }, (res) => {
      let d = ''; res.setEncoding('utf8'); res.on('data', (c) => { d += c; });
      res.on('end', () => { try { resolve(res.statusCode === 200 ? JSON.parse(d) : null); } catch (_) { resolve(null); } });
    });
    req.on('timeout', () => req.destroy()); req.on('error', () => resolve(null));
  });
}

async function notifyOnly(win) {
  const rel = await latestRelease();
  const v = rel && rel.tag_name;
  if (!v || !newer(v, app.getVersion())) return;
  const st = readState();
  if (st.skip === v) return;
  const r = await dialog.showMessageBox(win, {
    type: 'info', buttons: ['حمّل النسخة الجديدة', 'بعدين', 'تخطّى النسخة دي'], defaultId: 0, cancelId: 1,
    title: 'رحلة روبو', message: 'فيه نسخة جديدة من رحلة روبو (' + v.replace(/^v/, '') + ')',
    detail: 'فيها آخر الدروس والمختبرات. نزّلها وثبّتها فوق النسخة دي، ومشاريعك وتقدّمك هيفضلوا زي ما هما.',
  });
  if (r.response === 0) shell.openExternal(PAGE);
  if (r.response === 2) writeState(Object.assign(st, { skip: v }));
}

function checkForUpdates(win) {
  if (!app.isPackaged || process.env.ROBO_NO_UPDATES) return;   // not while developing, and not in the CI tests
  const st = readState(), now = Date.now();
  if (st.last && now - st.last < 6 * 3600e3) return;
  writeState(Object.assign(st, { last: now }));
  setTimeout(() => {
    if (process.platform === 'win32' && !isWin7Build() && autoWindows(win)) return;
    notifyOnly(win).catch(() => {});
  }, 8000);
}

module.exports = { checkForUpdates, newer };

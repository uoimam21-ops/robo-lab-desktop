// Smoke test of the Android app on an emulator (CI). The debug build lets Playwright reach the app's WebView.
// Usage: node tests/android.mjs   (with the app installed and adb on PATH)
import { _android } from 'playwright';
import { mkdirSync } from 'node:fs';

const shots = 'test-results/android'; mkdirSync(shots, { recursive: true });
const fails = [], ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails.push(m); };
const PKG = 'com.roboegypt.lab', HOME = 'https://localhost';

const [dev] = await _android.devices();
if (!dev) { console.error('no Android device'); process.exit(1); }
console.log('[android] ' + dev.model() + ' · ' + dev.serial());
await dev.shell('am force-stop ' + PKG);
await dev.shell('am start -W -n ' + PKG + '/.MainActivity');
let p; const errs = [];
// the WebView's page can be replaced (a lab page may crash it on a small emulator): reconnect when that happens
const attach = async () => {
  const wv = await dev.webView({ pkg: PKG }, { timeout: 90000 });
  p = await wv.page(); p.on('pageerror', (e) => errs.push(e.message));
};
await attach();
const go = async (path, wait = 2500) => {
  for (let t = 0; t < 2; t++) {
    try { await p.goto(HOME + path).catch(() => {}); await p.waitForTimeout(wait); return; }
    catch (e) {
      console.log('  ! page closed while opening ' + path + ' — ' + e.message.split('\n')[0]);
      const pid = (await dev.shell('pidof ' + PKG)).toString().trim();
      console.log('  ! app ' + (pid ? 'still running (pid ' + pid + ')' : 'is NOT running (crashed)'));
      if (!pid) await dev.shell('am start -W -n ' + PKG + '/.MainActivity');
      await attach();
    }
  }
};
const shot = (n) => dev.screenshot({ path: shots + '/' + n + '.png' }).catch(() => {});

await p.waitForLoadState('load'); await p.waitForTimeout(2000);
ok((await p.$$('.card')).length === 10, 'home screen shows 9 labs + the Journey');
await shot('home');

const info = await p.evaluate(() => ({ ua: navigator.userAgent.replace(/.*(Chrome\/[\d.]+).*/, '$1'), w: innerWidth, h: innerHeight }));
console.log('  webview ' + info.ua + ', ' + info.w + '×' + info.h);

for (const [path, name] of [['/lab/junior.html', 'Robo Junior'], ['/lab/ai.html', 'AI'], ['/lab/circuits.html', 'Robo Circuits'], ['/lab/arduino.html', 'Robo Maker'],
  ['/lab/3d.html', 'Robo CAD'], ['/lab/web.html', 'Robo Web'], ['/lab/code.html', 'Robo Code'], ['/lab/python.html', 'Robo Python']]) {
  await go(path);
  const pg = await p.evaluate(() => ({ iso: self.crossOriginIsolated, title: document.title, main: !!document.querySelector('main, .jr, .ide, .ard, .circ, .d3') }));
  ok(pg.main && /Robo Egypt/.test(pg.title), name + ' opens — ' + pg.title + (pg.iso ? ' (isolated)' : ''));
}
await shot('python');

// Python runs offline; input() needs cross-origin isolation, which only some Android WebViews give
await go('/lab/python.html');
const iso = await p.evaluate(() => self.crossOriginIsolated);
console.log('  cross-origin isolated: ' + iso);
await p.click('#runBtn').catch(() => {});
let ran = false;
try {
  for (let i = 0; i < 90 && !ran; i++) {
    await p.waitForTimeout(1000);
    ran = await p.evaluate(() => { const f = document.getElementById('inForm'); const out = document.querySelector('#out, .out, .console'); return (!!f && !f.hidden) || (!!out && out.textContent.trim().length > 0); });
  }
} catch (e) {
  console.log('  ! the app closed while Python was loading — ' + e.message.split('\n')[0]);
  await dev.shell('am start -W -n ' + PKG + '/.MainActivity'); await attach();
}
ok(ran, 'Python runs offline' + (iso ? ' (waits for input())' : ' (input() limited without isolation)'));
await shot('python-run');

await go('/lab/roboblock.html?go=free', 5000);
ok(await p.evaluate(() => typeof Blockly !== 'undefined' && !!document.querySelector('.blocklySvg')), 'Robo Block loads Blockly offline');
await shot('roboblock');

await go('/journey.html?go=login', 3000);
ok(await p.evaluate(() => !!document.getElementById('aForm') && !document.getElementById('gBtn')), 'Journey sign-in: e-mail form, no Google button');
await shot('journey');

await go('/lab/arduino.html');
ok(await p.evaluate(() => { const b = document.getElementById('upBtn'); return !b || b.hidden || !b.offsetParent; }), 'Robo Maker: no «upload to Arduino» on Android');

ok(errs.filter((e) => !/WebGL/.test(e)).length === 0, 'no page errors' + (errs.length ? ': ' + errs.slice(0, 3).join(' | ') : ''));
await dev.close();
console.log('[android] ' + (fails.length ? fails.length + ' FAILED' : 'all passed'));
process.exit(fails.length ? 1 : 0);

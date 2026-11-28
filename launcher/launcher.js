// «روبو لاب»: the labs page (16 Nov 2026: the same new 3D icons and Robo Lab logo as roboegypt.com/lab/) of the «رحلة روبو» app (the app opens on the journey; this page is in its menu). Same labs as
// roboegypt.com/lab/ (lib/site.ts → LABS). Robo Block opens its own page.
// The list (Arabic and English) is in labs.js.
const LABS = window.ROBO_LABS;   // labs.js
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function paintLabs() {
  const en = !!(window.roboPrefs && roboPrefs.en());
  document.title = (en ? 'Robo Lab | Robo Journey' : 'روبو لاب | رحلة روبو');
  document.getElementById('labs').innerHTML = LABS.map(([href, img, name, desc, c, eName, eDesc]) =>
    '<li><a class="card" href="' + href + '" style="--c:' + c + '"><img src="/assets/labs/' + img + '.webp" alt="" width="485" height="410">' +
    '<b>' + esc(en ? eName : name) + '</b><small>' + esc(en ? eDesc : desc) + '</small><span class="go">' + (en ? 'Open →' : 'افتح ←') + '</span></a></li>').join('');
}
paintLabs(); document.addEventListener('robo-lang', paintLabs); addEventListener('storage', (e) => { if (e.key === 'robo-lang') paintLabs(); });
// inside the app's home (its bar has «رحلة روبو» and «روبو لاب»): no second header with the logo and «ارجع للرحلة» (28 Nov 2026 review)
if (window.top !== window) document.body.classList.add('inApp');
const net = () => { document.getElementById('net').hidden = navigator.onLine; };
addEventListener('online', net); addEventListener('offline', net); net();
if (window.roboDesktop) window.roboDesktop.info().then((i) => { document.getElementById('ver').textContent = 'v' + i.version + (i.electron.startsWith('22.') ? ' · Windows 7' : ''); });

// first visit to the labs on Windows: offer the CH340 USB driver (needed to upload to most Uno/Nano boards) until it's installed
(function driverPrompt() {
  const A = window.roboDesktop && window.roboDesktop.arduino;
  if (!A || !A.driver) return;
  const K = 'robo-drv-ask';
  let pref = ''; try { pref = localStorage.getItem(K) || ''; } catch (_) {}
  if (pref === 'never' || (pref && +pref > Date.now())) return;
  A.driver().then((d) => {
    if (!d || !d.needed || d.installed || !d.available) return;
    const $ = (id) => document.getElementById(id), note = (t, c) => { $('drvNote').textContent = t; $('drvNote').className = 'note ' + (c || ''); };
    const close = () => { $('drv').hidden = true; };
    $('drv').hidden = false; $('drvGo').focus();
    $('drvLater').onclick = () => { try { localStorage.setItem(K, String(Date.now() + 3 * 864e5)); } catch (_) {} close(); };   // ask again in 3 days
    $('drvNever').onclick = () => { try { localStorage.setItem(K, 'never'); } catch (_) {} close(); };
    $('drvGo').onclick = async () => {
      const r = await A.installDriver();
      if (!r.ok) { note('لم يفتح برنامج التثبيت. جرّب مرة أخرى، أو اطلب المساعدة من المدرّب.', 'bad'); return; }
      note('فُتح برنامج التثبيت… أكمل فيه، وعندما ينتهي اضغط «انتهيت».');
      $('drvGo').textContent = '✓ انتهيت';
      $('drvGo').onclick = async () => {
        const d2 = await A.driver();
        if (d2.installed) { note('🎉 تم تثبيت التعريف! يمكنك الآن الرفع على الأردوينو من روبو ميكر.', 'good'); setTimeout(close, 1800); }
        else note('لم أجد التعريف بعد. إذا ظهرت رسالة نجاح في برنامج التثبيت، وصّل اللوحة وجرّب، أو اضغط «ثبّت» مرة أخرى.', 'bad');
      };
    };
  }).catch(() => {});
})();

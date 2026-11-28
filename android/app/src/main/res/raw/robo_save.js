// Saving files on Android (Youssef, 20 Nov 2026): the WebView ignores <a download> with a blob: or data: link, so «نزّل الفيديو»
// in Robo Montage, «احفظ على جهازي» and every other lab download did nothing. Every page gets this script before its own code
// runs: it catches those links and hands the file to the app (RoboSave.java) in pieces, which puts it in the gallery
// (videos, pictures), Music (sounds) or Downloads (everything else), in a «Robo Egypt» folder.
(function () {
  if (window.__roboSave) return;
  var isFile = function (a) { return !!(a && a.hasAttribute && a.hasAttribute('download') && /^(blob:|data:)/i.test(a.href || '')); };
  var en = function () { return /^en/i.test((document.documentElement && document.documentElement.lang) || ''); };
  function toast(msg, bad) {
    try {
      var d = document.createElement('div'); d.textContent = msg; d.setAttribute('role', 'status'); d.className = 'robo-save-toast';
      d.style.cssText = 'position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:2147483647;'
        + 'background:' + (bad ? '#B3261E' : '#1B2350') + ';color:#fff;font:600 15px/1.5 system-ui,sans-serif;padding:12px 18px;border-radius:14px;'
        + 'box-shadow:0 6px 24px rgba(0,0,0,.3);max-width:90vw;text-align:center;direction:' + (en() ? 'ltr' : 'rtl');
      (document.body || document.documentElement).appendChild(d); setTimeout(function () { d.remove(); }, 4000);
    } catch (e) {}
  }
  var MSG = {
    gallery: ['✓ اتحفظ في المعرض (فولدر Robo Egypt)', '✓ Saved to the gallery (Robo Egypt folder)'],
    music: ['✓ اتحفظ في الموسيقى (فولدر Robo Egypt)', '✓ Saved to Music (Robo Egypt folder)'],
    downloads: ['✓ اتحفظ في التنزيلات (فولدر Robo Egypt)', '✓ Saved to Downloads (Robo Egypt folder)'],
    fail: ['مقدرناش نحفظ الملف، جرّب تاني', 'We could not save the file, try again'],
    busy: ['⏳ بنحفظ الملف…', '⏳ Saving the file…']
  };
  var say = function (k) { return MSG[k][en() ? 1 : 0]; };
  async function save(href, name) {
    var S = window.RoboSave; if (!S) return false;
    try {
      var b = await (await fetch(href)).blob();
      if (b.size > 4e6) toast(say('busy'));
      var id = S.begin(name || '', b.type || ''); if (!id) throw 0;
      var N = 768 * 1024;
      for (var o = 0; o < b.size; o += N) {
        var u8 = new Uint8Array(await b.slice(o, o + N).arrayBuffer()), bin = '';
        for (var i = 0; i < u8.length; i += 0x8000) bin += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
        if (!S.chunk(id, btoa(bin))) throw 0;
      }
      var where = S.end(id);
      if (MSG[where]) toast(say(where)); else if (where !== 'share') throw 0;
      return true;
    } catch (e) { toast(say('fail'), true); return false; }
  }
  window.__roboSave = save;
  // the labs revoke the link a moment after clicking it; the copy above may still be reading it
  var rv = URL.revokeObjectURL.bind(URL);
  URL.revokeObjectURL = function (u) { setTimeout(function () { rv(u); }, 120000); };
  // a.click() from code (most labs), and a real tap on a download link
  var oc = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () { if (isFile(this) && window.RoboSave) { save(this.href, this.download); return; } return oc.call(this); };
  window.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null;
    if (isFile(a) && window.RoboSave) { e.preventDefault(); save(a.href, a.download); }
  }, true);
})();

// Language and night mode for the whole app (Youssef, 21 Nov 2026: «تطبيق التليفون والويندوز عاوز أضيف فيهم النسخة الإنجليزي و dark mode»).
// The choices are the website's own, kept in this app's storage: «robo-lang» (ar / en; the journey also reads «bibo-lang») and
// «robo-theme» (dark / light; nothing chosen = follow the phone or computer). The journey and the labs already read them when they
// open (site-bar.js), so this file only shows the buttons, translates the app's own two pages and passes a change on at once.
(() => {
  const get = (k) => { try { return localStorage.getItem(k) || ''; } catch (_) { return ''; } };
  const put = (k, v) => { try { v ? localStorage.setItem(k, v) : localStorage.removeItem(k); } catch (_) {} };
  const sysDark = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  const P = window.roboPrefs = {
    en: () => get('robo-lang') === 'en',
    // the theme a page should show: the child's choice, else the device's
    dark: () => { const t = get('robo-theme'); return t ? t === 'dark' : !!(sysDark && sysDark.matches); },
    // put a page in the right theme and language (this page, or the journey / a lab inside the home's frame)
    paint(doc) {
      if (!doc || !doc.documentElement) return;
      doc.documentElement.setAttribute('data-theme', P.dark() ? 'dark' : 'light');
    },
    // the app's own pages: every [data-en] gets its English text, the Arabic is kept in data-ar to switch back
    words(doc) {
      doc = doc || document; const en = P.en();
      doc.documentElement.lang = en ? 'en' : 'ar'; doc.documentElement.dir = en ? 'ltr' : 'rtl';
      doc.querySelectorAll('[data-en]').forEach((el) => {
        if (el.dataset.ar == null) el.dataset.ar = el.innerHTML;
        el.innerHTML = en ? el.dataset.en : el.dataset.ar;
      });
      doc.querySelectorAll('[data-en-label]').forEach((el) => {
        if (el.dataset.arLabel == null) el.dataset.arLabel = el.getAttribute('aria-label') || '';
        el.setAttribute('aria-label', en ? el.dataset.enLabel : el.dataset.arLabel);
        if (el.title) el.title = en ? el.dataset.enLabel : el.dataset.arLabel;
      });
    },
    setLang(l) { put('robo-lang', l); put('bibo-lang', l); P.words(); P.buttons(); document.dispatchEvent(new Event('robo-lang')); },
    setTheme(t) { put('robo-theme', t); P.paint(document); P.buttons(); document.dispatchEvent(new Event('robo-theme')); },
    // 🌐 and 🌙 buttons in an element with [data-prefs]
    buttons() {
      document.querySelectorAll('[data-prefs]').forEach((box) => {
        if (!box.firstChild) {
          box.innerHTML = '<button type="button" class="pf lang"></button><button type="button" class="pf theme"></button>';
          box.querySelector('.lang').onclick = () => P.setLang(P.en() ? 'ar' : 'en');
          box.querySelector('.theme').onclick = () => P.setTheme(P.dark() ? 'light' : 'dark');
        }
        const l = box.querySelector('.lang'), t = box.querySelector('.theme');
        l.textContent = P.en() ? 'العربية' : 'English'; l.lang = P.en() ? 'ar' : 'en';
        l.setAttribute('aria-label', P.en() ? 'اعرض التطبيق بالعربي' : 'Show the app in English');
        t.textContent = P.dark() ? '☀️' : '🌙';
        const tl = P.en() ? (P.dark() ? 'Day mode' : 'Night mode') : (P.dark() ? 'الوضع النهاري' : 'الوضع الليلي');
        t.setAttribute('aria-label', tl); t.title = tl;
      });
    },
  };
  P.paint(document);
  const start = () => { P.words(); P.buttons(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  // the device switched between day and night, and the child has not chosen: follow it
  if (sysDark) sysDark.addEventListener?.('change', () => { if (!get('robo-theme')) { P.paint(document); P.buttons(); document.dispatchEvent(new Event('robo-theme')); } });
  // another page of the app (the journey's own «English» button) changed the language
  addEventListener('storage', (e) => { if (e.key === 'robo-lang') { P.words(); P.buttons(); } if (e.key === 'robo-theme') { P.paint(document); P.buttons(); } });
})();

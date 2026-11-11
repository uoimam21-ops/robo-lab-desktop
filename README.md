# Robo Lab — مختبر روبو للويندوز

تطبيق ويندوز بيشغّل مختبرات Robo Egypt **من غير إنترنت**، زي PictoBlox، وبيرفع الكود على **أردوينو حقيقي** بالـ USB.

| النسخة | الأنظمة | Electron | ملف التثبيت |
|---|---|---|---|
| الحديثة | Windows 10 / 11 (64-bit) | 44.9.3 | `Robo-Lab-Setup-<ver>-win10-11.exe` |
| الكلاسيك | Windows 7 / 8 / 8.1 (64 و 32-bit) | 22.3.27 (آخر نسخة بتشتغل على ويندوز 7) | `Robo-Lab-Setup-<ver>-win7-x64.exe` / `-ia32.exe` |

## إزاي شغّال
- **المختبرات نفسها** هي نفس صفحات الموقع (`robo-egypt-site`)، متنسوخة في `www/` بسكربت `npm run sync`. مفيش كود مختبرات مكتوب هنا.
- **من غير نت:** كل اللي الصفحات كانت بتجيبه من النت (Pyodide/Python، Blockly، Supabase، Google Fonts) اتنسخ في `www/vendor/` (`npm run vendor`)، والروابط اتغيّرت للنسخ المحلية وقت الـ sync.
- **بروتوكول `robo://lab/`** (`electron/main.js`): بيخدم الملفات من `www/` و`launcher/`، وبيحط هيدرز cross-origin isolation (Python محتاجها لزرار الإيقاف و`input()`)، ماعدا صفحة روبو بلوك (عشان فيديوهات يوتيوب).
- **الروابط:** أي صفحة موجودة في التطبيق تفتح جواه؛ أي صفحة من الموقع مش موجودة (الباقات، المقالات، واتساب…) تفتح في المتصفح.
- **الحفظ:** المشاريع بتتحفظ على الجهاز (localStorage ثابت على origin `robo://lab`). الدخول والمزامنة والمشاركة شغّالين لما النت يكون موجود.
- **الرفع على الأردوينو** (`electron/arduino.js`): arduino-cli 0.35.2 (آخر نسخة بتشتغل على ويندوز 7) + `arduino:avr@1.8.6` + مكتبات Servo و LiquidCrystal I2C و LedControl و DHT. كله جوه التطبيق في `resources/arduino` (`npm run arduino` بيجهّزه). زرار «⬆ ارفع على الأردوينو» في Robo Maker بيظهر في التطبيق بس (`window.roboDesktop.arduino`).

## الأوامر
```bash
npm ci                                   # أول مرة
npm run sync -- ../robo-egypt-site       # بعد "npm run build" في مستودع الموقع: ينسخ المختبرات لـ www/
npm run vendor                           # المكتبات المحلية (Python, Blockly, الخطوط…)
npm run arduino                          # أدوات الأردوينو (لازم على نفس نظام الإصدار: ويندوز للمثبّت)
npm start                                # تشغيل للتجربة
npm run dist                             # المثبّتين (على ويندوز)
```

## البناء الأوتوماتيك (GitHub Actions)
`.github/workflows/build.yml` على `windows-latest`: أي push على `main` بيطلّع المثبّتين كـ artifact. لو عملت tag زي `v1.0.0` بيتنشروا كـ Release.

## تحديث المختبرات
لما الموقع يتغيّر: `npm run build` في مستودع الموقع ← `npm run sync -- ../robo-egypt-site` هنا ← commit لـ `www/` ← push.

## ملاحظات
- **بوردات الأردوينو الصيني (CH340):** ويندوز 10/11 غالبًا بينزّل الدرايفر لوحده؛ على ويندوز 7 لازم درايفر CH340 من الشركة المصنّعة.
- **Python من غير نت:** المكتبة الأساسية بس. مكتبات زي numpy محتاجة نت أول مرة.
- **التوقيع:** المثبّت مش موقّع (code signing)، فويندوز SmartScreen هيقول «Windows protected your PC» ← More info ← Run anyway. شهادة توقيع بتحلّ ده.

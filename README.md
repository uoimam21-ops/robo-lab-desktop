# رحلة روبو (Robo Journey): تطبيق Robo Egypt

تطبيق واحد لويندوز وماك وأندرويد: **رحلة روبو** (المدن والقصة والمستويات) و**روبو لاب** (كل المختبرات) جوّاه.
- التطبيق بيفتح على **الرحلة**. «🧪 روبو لاب» في قائمتها بيفتح صفحة المختبرات (`/lab/`)، وفيها زرار «ارجع للرحلة».
- المختبرات شغالة **من غير إنترنت**، زي PictoBlox، وبترفع الكود على **أردوينو حقيقي** بالـ USB. الرحلة محتاجة نت للحساب بس.
- كان اسمه «Robo Lab» لحد v1.0.1. فولدر البيانات لسه `Robo Lab` (`app.setPath('userData', …)` في `electron/main.js`)، عشان المشاريع والتقدّم يفضلوا بعد التحديث.

| النسخة | الأنظمة | Electron | ملف التثبيت |
|---|---|---|---|
| الحديثة | Windows 10 / 11 (64-bit) | 44.9.3 | `Robo-Journey-Setup-<ver>-win10-11.exe` |
| الكلاسيك | Windows 7 / 8 / 8.1 (64 و 32-bit) | 22.3.27 (آخر نسخة بتشتغل على ويندوز 7) | `Robo-Journey-Setup-<ver>-win7-x64.exe` / `-ia32.exe` |
| ماك | macOS 12 Monterey أو أحدث، Apple Silicon و Intel (نسختين) | 44.9.3 | `Robo-Journey-<ver>-mac-arm64.dmg` / `-mac-x64.dmg` |

## إزاي شغّال
- **المختبرات نفسها** هي نفس صفحات الموقع (`robo-egypt-site`)، متنسوخة في `www/` بسكربت `npm run sync`. مفيش كود مختبرات مكتوب هنا.
- **من غير نت:** كل اللي الصفحات كانت بتجيبه من النت (Pyodide/Python، Blockly، Supabase، Google Fonts) اتنسخ في `www/vendor/` (`npm run vendor`)، والروابط اتغيّرت للنسخ المحلية وقت الـ sync.
- **بروتوكول `robo://lab/`** (`electron/main.js`): بيخدم الملفات من `www/` و`launcher/`، وبيحط هيدرز cross-origin isolation (Python محتاجها لزرار الإيقاف و`input()`)، ماعدا صفحة روبو بلوك (عشان فيديوهات يوتيوب).
- **الروابط:** أي صفحة موجودة في التطبيق تفتح جواه؛ أي صفحة من الموقع مش موجودة (الباقات، المقالات، واتساب…) تفتح في المتصفح.
- **صفحة المختبرات (`launcher/`):** «روبو لاب». أول مرة الطفل يفتحها على ويندوز من غير درايفر الأردوينو، بتظهر نافذة الدرايفر.
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

## التحديثات (كل ليلة)
- **`.github/workflows/nightly.yml`** كل يوم الساعة ٣ الفجر بتوقيت القاهرة (أو «Run workflow» من GitHub):
  1. يبني الموقع (`main`).
  2. ينسخ الرحلة والمختبرات لـ `www/`.
  3. لو فيه أي تغيير: يزوّد رقم النسخة (1.1.0 ← 1.1.1)، ويعمل commit على `main`، ويبني ويختبر وينشر النسخة دي (`build.yml`).
  4. لو الموقع ما اتغيّرش: مفيش نسخة جديدة.
- **ويندوز ١٠ و ١١:** التطبيق بيحمّل التحديث لوحده في الخلفية (`electron/updates.js` + electron-updater + `latest.yml` في مستودع التحميل)، وبيتثبّت لما يقفل التطبيق أو لما الطفل يدوس «حدّث دلوقتي».
- **ماك وويندوز ٧:** رسالة «فيه نسخة جديدة» فيها لينك التحميل. التحديث الأوتوماتيك على الماك محتاج توقيع Apple.
- **التطبيق بيدوّر على تحديث** بعد ما يفتح بـ ٨ ثواني، ومرة كل ٦ ساعات بالكتير. ومش بيدوّر في الاختبارات (`ROBO_NO_UPDATES`).
- **الـ Secrets المطلوبة:**
  - `SITE_READ_TOKEN`: fine-grained token، صلاحيته Contents: Read-only على `robo-egypt-site` بس.
  - `RELEASES_TOKEN`: صلاحيته Contents: Read and write على `robo-lab-download`.

## البناء الأوتوماتيك (GitHub Actions)
`.github/workflows/build.yml` على `windows-latest`: أي push على `main` بيطلّع المثبّتين كـ artifact. لو عملت tag زي `v1.0.0` بيتنشروا كـ Release.

## تحديث المختبرات
لما الموقع يتغيّر: `npm run build` في مستودع الموقع ← `npm run sync -- ../robo-egypt-site` هنا ← commit لـ `www/` ← push.

## ماك
- كل نسخة بتتبني على ماك من نفس النوع في GitHub Actions (`macos-15` لـ Apple Silicon و `macos-15-intel` لـ Intel)، عشان أدوات الأردوينو بتختلف.
- **مش موقّعة بـ Apple Developer ID** (توقيع ad-hoc بس): أول مرة كليك يمين ← Open، أو في macOS 15: System Settings ← Privacy & Security ← Open Anyway. التوقيع والـ notarization محتاجين حساب Apple Developer (٩٩$ في السنة).
- **Apple Silicon:** مترجم الأردوينو الرسمي (avr-gcc) نسخة Intel بس، فبيشتغل عن طريق Rosetta (زي Arduino IDE). لو Rosetta مش متثبّت، الرفع بيقول كده.
- **درايفر CH340:** موجود في macOS من Big Sur، مفيش حاجة تتثبّت.

## ملاحظات
- **درايفر بوردات الأردوينو الصيني (CH340):** المثبّت الرسمي من WCH (`CH341SER.EXE`) جوه التطبيق (`resources/arduino/drivers`، `npm run arduino` بينزّله). أول ما التطبيق يفتح على ويندوز من غير الدرايفر، بتظهر نافذة «ثبّت درايفر الأردوينو» (ثبّت / بعدين = بعد ٣ أيام / متسألنيش تاني). وكمان في نافذة الرفع لو مفيش بوردة ظاهرة. التعرّف على الدرايفر: `CH341S64.SYS` أو `CH341SER.SYS` في `System32\drivers`.
- **Python من غير نت:** المكتبة الأساسية بس. مكتبات زي numpy محتاجة نت أول مرة.
- **التوقيع:** المثبّت مش موقّع (code signing)، فويندوز SmartScreen هيقول «Windows protected your PC» ← More info ← Run anyway. شهادة توقيع بتحلّ ده.

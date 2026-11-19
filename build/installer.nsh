; After installing on Windows: offer the USB driver for Arduino boards (CH340/CH341, most Uno/Nano clones) right away,
; so the board shows up in Robo Maker without Arduino IDE (Youssef, 19 Nov 2026). Skipped when it is already installed and
; in silent installs (the app's own updates). The driver installer asks Windows for permission (UAC), then installs quietly.
!macro customInstall
  ${IfNot} ${Silent}
    StrCpy $R9 "$INSTDIR\resources\arduino\drivers\CH341SER.EXE"
    ${If} ${FileExists} "$R9"
    ${AndIfNot} ${FileExists} "$WINDIR\System32\drivers\CH341S64.SYS"
    ${AndIfNot} ${FileExists} "$WINDIR\System32\drivers\CH341SER.SYS"
    ${AndIfNot} ${FileExists} "$WINDIR\Sysnative\drivers\CH341S64.SYS"
      ${If} ${Cmd} `MessageBox MB_YESNO|MB_ICONQUESTION "هل تريد تثبيت تعريف USB للأردوينو الآن؟$\r$\n$\r$\nيحتاجه البرنامج ليتعرّف على لوحة الأردوينو (Uno / Nano) عند توصيلها بالكمبيوتر، ولا يحتاج إلى إنترنت.$\r$\n$\r$\nسيطلب Windows الإذن، فاضغط «نعم»." IDYES`
        ExecShellWait "open" "$R9" "/S"
      ${EndIf}
    ${EndIf}
  ${EndIf}
!macroend

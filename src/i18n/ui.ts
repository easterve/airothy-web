// Marketing copy for airothy.com, one dictionary per locale.
//
// English is the source of truth and the fallback for any missing key.
// Locales match the apps' Localizable.xcstrings set (ar, de, en, es, fr, ja,
// ko, zh-Hans); zh-Hans is keyed as `zh` to match the /zh/ URL segment.
//
// Non-English strings were rewritten for native fluency on 2026-07-05
// (marketing tone per locale, not literal translation). A few values contain
// inline HTML (heroTitle, privacyB1–B4) and are rendered with set:html.
// heroSubtitle uses \n line breaks (rendered via white-space: pre-line).
// {year} in footerCopy is interpolated at render time.

export const defaultLang = 'en';

export const ui = {
  en: {
    metaTitle: 'Airothy — your iPhone as a wireless trackpad for your Mac',
    metaDescription:
      'Airothy turns your iPhone into a wireless trackpad and keyboard for your Mac. No cables, no accounts. Your input never leaves your own network.',
    navDownload: 'Download',
    heroBadge: '',
    heroTitle: `Your iPhone<br />as a <span class="accent">wireless trackpad</span>`,
    heroSubtitle:
      'Control your Mac from across the room.\nYour iPhone becomes a fast, private trackpad and keyboard.\nGestures, typing, and shortcuts, right in your hand.',
    heroCtaPrimary: 'Download for macOS',
    heroCtaSecondary: 'Get the iOS app',
    heroMeta: 'Requires macOS 15+ and iOS 26+ on the same local network.',
    featTrackpadTitle: 'Multi-touch trackpad',
    featTrackpadBody:
      'One finger for the pointer, two to scroll and pinch-to-zoom, three for Mission Control and switching Spaces. The real macOS gestures, exactly as you know them.',
    featKeyboardTitle: 'Full Magic Keyboard',
    featKeyboardBody:
      'Hold-to-use modifiers, smooth key repeat, and a function row that matches your Mac: brightness, media, mute, and volume. Or use the iOS keyboard with a Cmd / Opt / Ctrl / Shift bar.',
    featSecureTitle: 'Authenticated by design',
    featSecureBody:
      "Every connection is encrypted, and your Mac only takes commands from iPhones you've personally approved. Your input goes straight from iPhone to Mac, never through the cloud.",
    howTitle: 'How it works',
    howSubtitle: 'Three steps, about a minute the first time.',
    step1Label: 'STEP 01',
    step1Title: 'Install on Mac',
    step1Body:
      'Download the notarized .dmg, drag it to Applications, and grant Accessibility permission in System Settings.',
    step2Label: 'STEP 02',
    step2Title: 'Pair your iPhone',
    step2Body:
      'Open Airothy on iPhone, then scan the QR code or enter the 6-digit code shown on the Mac. Pair once and you stay paired.',
    step3Label: 'STEP 03',
    step3Title: 'Control your Mac',
    step3Body:
      "Gestures on the trackpad surface, typing on the full-screen Magic Keyboard. Lock your iPhone when you're done and the session ends on its own.",
    privacyTitle: 'Privacy and security',
    privacyB1:
      '<strong>Local network only.</strong> The iPhone and Mac talk peer-to-peer over Bonjour and TCP. Nothing transits the public internet.',
    privacyB2:
      '<strong>No accounts.</strong> No sign-up, no login. What you type and tap never leaves your own network, and the iOS app shares only anonymous usage statistics.',
    privacyB3:
      '<strong>Signed and notarized.</strong> The macOS app is Developer ID–signed, notarized by Apple, and only updates itself with verified release signatures.',
    privacyB4:
      '<strong>One controller at a time.</strong> Your Mac never takes commands from more than one paired iPhone at once, and a takeover needs your approval on the Mac.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) or later',
    reqIosLabel: 'iOS',
    reqIosValue: '26 or later',
    reqNetworkLabel: 'Network',
    reqNetworkValue: 'Same Wi-Fi or LAN',
    reqPermsLabel: 'Permissions',
    reqPermsValue: 'Accessibility (macOS)',
    footerCopy: '© {year} Airothy. Made by easterve.',
    switcherLabel: 'Language',
  },

  de: {
    metaTitle: 'Airothy — dein iPhone als drahtloses Trackpad für den Mac',
    metaDescription:
      'Airothy macht dein iPhone zum drahtlosen Trackpad und zur Tastatur für deinen Mac. Ohne Kabel, ohne Konto. Deine Eingaben bleiben in deinem eigenen Netzwerk.',
    navDownload: 'Laden',
    heroBadge: '',
    heroTitle: `Dein iPhone<br />als <span class="accent">drahtloses Trackpad</span>`,
    heroSubtitle:
      'Steuere deinen Mac von überall im Raum.\nDein iPhone wird zum schnellen, privaten Trackpad mit Tastatur.\nGesten, Tippen und Shortcuts, direkt in deiner Hand.',
    heroCtaPrimary: 'Für macOS laden',
    heroCtaSecondary: 'iOS-App holen',
    heroMeta: 'Benötigt macOS 15 oder neuer und iOS 26 oder neuer im selben Netzwerk.',
    featTrackpadTitle: 'Multi-Touch-Trackpad',
    featTrackpadBody:
      'Mit einem Finger zeigen, mit zwei Fingern scrollen und zoomen, mit drei Fingern Mission Control öffnen und zwischen Spaces wechseln. Die echten macOS-Gesten, genau wie du sie kennst.',
    featKeyboardTitle: 'Das volle Magic Keyboard',
    featKeyboardBody:
      'Modifikatortasten zum Gedrückthalten, flüssige Tastenwiederholung und eine Funktionsleiste, die zu deinem Mac passt: Helligkeit, Medien, Stummschalten und Lautstärke. Oder nutze die iOS-Tastatur mit ihrer Cmd / Opt / Ctrl / Shift-Leiste.',
    featSecureTitle: 'Sicher von Grund auf',
    featSecureBody:
      'Jede Verbindung ist verschlüsselt, und dein Mac nimmt nur Befehle von iPhones an, die du selbst freigegeben hast. Deine Eingaben gehen direkt vom iPhone zum Mac, nie über die Cloud.',
    howTitle: 'So funktioniert es',
    howSubtitle: 'Drei Schritte, beim ersten Mal etwa eine Minute.',
    step1Label: 'SCHRITT 01',
    step1Title: 'Auf dem Mac installieren',
    step1Body:
      'Lade die notarisierte .dmg, ziehe sie in „Programme“ und erlaube in den Systemeinstellungen die Bedienungshilfen.',
    step2Label: 'SCHRITT 02',
    step2Title: 'iPhone koppeln',
    step2Body:
      'Öffne Airothy auf dem iPhone und scanne den QR-Code oder tippe den 6-stelligen Code vom Mac ein. Einmal koppeln genügt.',
    step3Label: 'SCHRITT 03',
    step3Title: 'Mac steuern',
    step3Body:
      'Gesten auf der Trackpad-Fläche, Tippen auf dem bildschirmfüllenden Magic Keyboard. Sperrst du dein iPhone, endet die Sitzung von selbst.',
    privacyTitle: 'Datenschutz und Sicherheit',
    privacyB1:
      '<strong>Nur im lokalen Netzwerk.</strong> iPhone und Mac kommunizieren direkt über Bonjour und TCP. Nichts geht über das öffentliche Internet.',
    privacyB2:
      '<strong>Kein Konto nötig.</strong> Keine Registrierung, kein Login. Deine Eingaben verlassen nie dein eigenes Netzwerk, und die iOS-App teilt nur anonyme Nutzungsstatistiken.',
    privacyB3:
      '<strong>Signiert und notarisiert.</strong> Die macOS-App ist mit einer Developer-ID signiert, von Apple notarisiert und aktualisiert sich nur mit verifizierten Release-Signaturen.',
    privacyB4:
      '<strong>Nur ein Controller zugleich.</strong> Dein Mac nimmt nie Befehle von mehreren iPhones gleichzeitig an, und eine Übergabe musst du am Mac bestätigen.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) oder neuer',
    reqIosLabel: 'iOS',
    reqIosValue: '26 oder neuer',
    reqNetworkLabel: 'Netzwerk',
    reqNetworkValue: 'Gleiches WLAN oder LAN',
    reqPermsLabel: 'Berechtigungen',
    reqPermsValue: 'Bedienungshilfen (macOS)',
    footerCopy: '© {year} Airothy. Made by easterve.',
    switcherLabel: 'Sprache',
  },

  es: {
    metaTitle: 'Airothy — tu iPhone como trackpad inalámbrico para tu Mac',
    metaDescription:
      'Airothy convierte tu iPhone en un trackpad y teclado inalámbricos para tu Mac. Sin cables ni cuentas. Lo que escribes no sale de tu propia red.',
    navDownload: 'Descargar',
    heroBadge: '',
    heroTitle: `Tu iPhone<br />como <span class="accent">trackpad inalámbrico</span>`,
    heroSubtitle:
      'Controla tu Mac desde cualquier punto de la habitación.\nTu iPhone se convierte en un trackpad y teclado rápidos y privados.\nGestos, escritura y atajos, en la palma de tu mano.',
    heroCtaPrimary: 'Descargar para macOS',
    heroCtaSecondary: 'Obtener la app de iOS',
    heroMeta: 'Requiere macOS 15 o posterior e iOS 26 o posterior en la misma red local.',
    featTrackpadTitle: 'Trackpad multitáctil',
    featTrackpadBody:
      'Un dedo para el puntero, dos para desplazarte y hacer zoom, tres para Mission Control y cambiar de espacio. Los gestos de macOS de siempre, tal cual los conoces.',
    featKeyboardTitle: 'Magic Keyboard al completo',
    featKeyboardBody:
      'Modificadores que mantienes pulsados, repetición de teclas fluida y una fila de funciones adaptada a tu Mac: brillo, multimedia, silencio y volumen. O usa el teclado de iOS con su barra de Cmd / Opt / Ctrl / Shift.',
    featSecureTitle: 'Seguro por diseño',
    featSecureBody:
      'Cada conexión va cifrada y tu Mac solo acepta órdenes de los iPhone que tú has aprobado. Lo que escribes va directo del iPhone al Mac, sin pasar por la nube.',
    howTitle: 'Cómo funciona',
    howSubtitle: 'Tres pasos. La primera vez, apenas un minuto.',
    step1Label: 'PASO 01',
    step1Title: 'Instalar en el Mac',
    step1Body:
      'Descarga el .dmg notarizado, arrástralo a Aplicaciones y concede el permiso de Accesibilidad en Ajustes del Sistema.',
    step2Label: 'PASO 02',
    step2Title: 'Emparejar tu iPhone',
    step2Body:
      'Abre Airothy en el iPhone y escanea el QR o escribe el código de 6 dígitos que muestra el Mac. Se empareja una vez y listo.',
    step3Label: 'PASO 03',
    step3Title: 'Controlar tu Mac',
    step3Body:
      'Gestos en la superficie del trackpad, escritura en el Magic Keyboard a pantalla completa. Bloquea el iPhone al terminar y la sesión se cierra sola.',
    privacyTitle: 'Privacidad y seguridad',
    privacyB1:
      '<strong>Solo red local.</strong> El iPhone y el Mac se comunican de igual a igual mediante Bonjour y TCP. Nada pasa por internet.',
    privacyB2:
      '<strong>Sin cuentas.</strong> Ni registro ni inicio de sesión. Lo que escribes no sale de tu propia red, y la app de iOS solo comparte estadísticas de uso anónimas.',
    privacyB3:
      '<strong>Firmado y notarizado.</strong> La app de macOS está firmada con Developer ID, notarizada por Apple y solo se actualiza con firmas de versión verificadas.',
    privacyB4:
      '<strong>Un solo controlador a la vez.</strong> Tu Mac nunca acepta órdenes de más de un iPhone a la vez, y el relevo hay que aprobarlo en el propio Mac.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) o posterior',
    reqIosLabel: 'iOS',
    reqIosValue: '26 o posterior',
    reqNetworkLabel: 'Red',
    reqNetworkValue: 'Mismo Wi-Fi o LAN',
    reqPermsLabel: 'Permisos',
    reqPermsValue: 'Accesibilidad (macOS)',
    footerCopy: '© {year} Airothy. Made by easterve.',
    switcherLabel: 'Idioma',
  },

  fr: {
    metaTitle: 'Airothy — votre iPhone en trackpad sans fil pour votre Mac',
    metaDescription:
      'Airothy transforme votre iPhone en trackpad et clavier sans fil pour votre Mac. Sans câble ni compte. Vos saisies ne quittent jamais votre propre réseau.',
    navDownload: 'Télécharger',
    heroBadge: '',
    heroTitle: `Votre iPhone<br />en <span class="accent">trackpad sans fil</span>`,
    heroSubtitle:
      'Pilotez votre Mac depuis l’autre bout de la pièce.\nVotre iPhone devient un trackpad et un clavier rapides et privés.\nGestes, saisie et raccourcis, au creux de la main.',
    heroCtaPrimary: 'Télécharger pour macOS',
    heroCtaSecondary: 'Obtenir l’app iOS',
    heroMeta: 'Nécessite macOS 15 ou ultérieur et iOS 26 ou ultérieur sur le même réseau local.',
    featTrackpadTitle: 'Trackpad multitouch',
    featTrackpadBody:
      'Un doigt pour le pointeur, deux pour faire défiler et zoomer, trois pour Mission Control et changer d’espace. Les vrais gestes de macOS, exactement comme vous les connaissez.',
    featKeyboardTitle: 'Le Magic Keyboard au complet',
    featKeyboardBody:
      'Des touches de modification à maintenir, une répétition des touches fluide et une rangée de fonctions adaptée à votre Mac : luminosité, médias, sourdine et volume. Ou le clavier iOS avec sa barre Cmd / Opt / Ctrl / Shift.',
    featSecureTitle: 'Authentifié par conception',
    featSecureBody:
      'Chaque connexion est chiffrée, et votre Mac n’accepte les commandes que des iPhone que vous avez approuvés. Vos saisies vont directement de l’iPhone au Mac, jamais par le cloud.',
    howTitle: 'Comment ça marche',
    howSubtitle: 'Trois étapes. À peine une minute la première fois.',
    step1Label: 'ÉTAPE 01',
    step1Title: 'Installer sur le Mac',
    step1Body:
      'Téléchargez le .dmg notarié, glissez-le dans Applications et accordez l’autorisation Accessibilité dans Réglages Système.',
    step2Label: 'ÉTAPE 02',
    step2Title: 'Appairer votre iPhone',
    step2Body:
      'Ouvrez Airothy sur l’iPhone, puis scannez le QR ou saisissez le code à 6 chiffres affiché sur le Mac. On appaire une fois, c’est tout.',
    step3Label: 'ÉTAPE 03',
    step3Title: 'Contrôler votre Mac',
    step3Body:
      'Les gestes sur la surface du trackpad, la saisie sur le Magic Keyboard plein écran. Verrouillez l’iPhone une fois terminé : la session se ferme toute seule.',
    privacyTitle: 'Confidentialité et sécurité',
    privacyB1:
      '<strong>Réseau local uniquement.</strong> L’iPhone et le Mac communiquent en pair à pair via Bonjour et TCP. Rien ne transite par l’internet public.',
    privacyB2:
      '<strong>Aucun compte.</strong> Ni inscription ni connexion. Vos saisies ne quittent jamais votre propre réseau, et l’app iOS ne partage que des statistiques d’utilisation anonymes.',
    privacyB3:
      '<strong>Signé et notarié.</strong> L’app macOS est signée Developer ID, notariée par Apple et ne se met à jour qu’avec des signatures de version vérifiées.',
    privacyB4:
      '<strong>Un seul contrôleur à la fois.</strong> Votre Mac n’accepte jamais les commandes de plusieurs iPhone en même temps, et la reprise doit être approuvée sur le Mac.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) ou ultérieur',
    reqIosLabel: 'iOS',
    reqIosValue: '26 ou ultérieur',
    reqNetworkLabel: 'Réseau',
    reqNetworkValue: 'Même Wi-Fi ou LAN',
    reqPermsLabel: 'Autorisations',
    reqPermsValue: 'Accessibilité (macOS)',
    footerCopy: '© {year} Airothy. Made by easterve.',
    switcherLabel: 'Langue',
  },

  ja: {
    metaTitle: 'Airothy — iPhone が Mac のワイヤレストラックパッドに',
    metaDescription:
      'Airothy は iPhone を Mac のワイヤレストラックパッド＆キーボードにします。ケーブルもアカウントも不要。入力した内容が自分のネットワークの外に出ることはありません。',
    navDownload: 'ダウンロード',
    heroBadge: '',
    heroTitle: `iPhone が<br /><span class="accent">ワイヤレストラックパッド</span>に`,
    heroSubtitle:
      '部屋のどこからでも Mac を操作。\niPhone が速くてプライベートなトラックパッド＆キーボードになります。\nジェスチャも、文字入力も、ショートカットも、手のひらの中に。',
    heroCtaPrimary: 'macOS 版をダウンロード',
    heroCtaSecondary: 'iOS アプリを入手',
    heroMeta: '同じローカルネットワーク上の macOS 15 以降と iOS 26 以降が必要です。',
    featTrackpadTitle: 'マルチタッチトラックパッド',
    featTrackpadBody:
      '1 本指でポインタ、2 本指でスクロールとピンチズーム、3 本指で Mission Control とスペースの切り替え。macOS 本来のジェスチャが、いつもの感覚で使えます。',
    featKeyboardTitle: 'Magic Keyboard をそのまま',
    featKeyboardBody:
      '長押しで組み合わせる修飾キー、自然なキーリピート、Mac の世代に合わせたファンクションキー（輝度・メディア・消音・音量）。Cmd / Opt / Ctrl / Shift バー付きの iOS キーボードも使えます。',
    featSecureTitle: '仕組みから安全に',
    featSecureBody:
      'すべての通信は暗号化され、Mac は自分で承認した iPhone の操作しか受け付けません。入力は iPhone から Mac へ直接届き、クラウドを経由しません。',
    howTitle: '使い方',
    howSubtitle: '3 ステップ。初回でも 1 分ほどで完了します。',
    step1Label: 'ステップ 01',
    step1Title: 'Mac にインストール',
    step1Body:
      '公証済みの .dmg をダウンロードして「アプリケーション」へドラッグし、「システム設定」で「アクセシビリティ」を許可します。',
    step2Label: 'ステップ 02',
    step2Title: 'iPhone をペアリング',
    step2Body:
      'iPhone で Airothy を開き、Mac に表示された QR コードをスキャンするか 6 桁のコードを入力します。ペアリングは最初の 1 回だけ。',
    step3Label: 'ステップ 03',
    step3Title: 'Mac を操作',
    step3Body:
      'ジェスチャはトラックパッド画面で、入力は全画面の Magic Keyboard で。使い終わって iPhone をロックすれば、セッションは自動で終了します。',
    privacyTitle: 'プライバシーとセキュリティ',
    privacyB1:
      '<strong>ローカルネットワークだけ。</strong> iPhone と Mac は Bonjour と TCP で直接通信します。データが外部のインターネットを通ることはありません。',
    privacyB2:
      '<strong>アカウント不要。</strong> 登録もログインもありません。入力した内容が自分のネットワークの外に出ることはなく、iOS アプリが共有するのは匿名の利用統計だけです。',
    privacyB3:
      '<strong>署名・公証済み。</strong> macOS アプリは Developer ID で署名され、Apple の公証を受け、検証済みの署名でのみ更新されます。',
    privacyB4:
      '<strong>操作できるのは 1 台だけ。</strong> Mac が複数の iPhone から同時に操作されることはありません。切り替えには Mac 側での承認が必要です。',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15（Sequoia）以降',
    reqIosLabel: 'iOS',
    reqIosValue: '26 以降',
    reqNetworkLabel: 'ネットワーク',
    reqNetworkValue: '同一の Wi-Fi または LAN',
    reqPermsLabel: '権限',
    reqPermsValue: 'アクセシビリティ（macOS）',
    footerCopy: '© {year} Airothy. Made by easterve.',
    switcherLabel: '言語',
  },

  ko: {
    metaTitle: 'Airothy — iPhone을 Mac의 무선 트랙패드로',
    metaDescription:
      'Airothy는 iPhone을 Mac의 무선 트랙패드와 키보드로 만들어 줍니다. 케이블도, 계정도 필요 없습니다. 입력한 내용은 내 네트워크 밖으로 나가지 않습니다.',
    navDownload: '다운로드',
    heroBadge: '',
    heroTitle: `iPhone을<br /><span class="accent">무선 트랙패드</span>로`,
    heroSubtitle:
      '방 반대편에서도 Mac을 조작하세요.\niPhone이 빠르고 안전한 트랙패드와 키보드가 됩니다.\n제스처도, 타이핑도, 단축키도, 전부 손안에서.',
    heroCtaPrimary: 'macOS용 다운로드',
    heroCtaSecondary: 'iOS 앱 받기',
    heroMeta: '같은 로컬 네트워크에 있는 macOS 15 이상, iOS 26 이상이 필요합니다.',
    featTrackpadTitle: '멀티터치 트랙패드',
    featTrackpadBody:
      '한 손가락으로 포인터를 움직이고, 두 손가락으로 스크롤과 확대/축소, 세 손가락으로 Mission Control과 Space 전환까지. macOS 고유의 제스처가 익숙한 감각 그대로 동작합니다.',
    featKeyboardTitle: 'Magic Keyboard 그대로',
    featKeyboardBody:
      '길게 눌러 조합하는 보조 키, 자연스러운 키 반복, Mac 세대에 맞춘 기능 키 열(밝기·미디어·음소거·음량)까지. Cmd / Opt / Ctrl / Shift 바가 달린 iOS 키보드도 쓸 수 있습니다.',
    featSecureTitle: '처음부터 안전하게',
    featSecureBody:
      '모든 연결은 암호화되며, Mac은 직접 승인한 iPhone의 명령만 받아들입니다. 입력은 iPhone에서 Mac으로 바로 전달되고, 클라우드를 거치지 않습니다.',
    howTitle: '사용 방법',
    howSubtitle: '세 단계면 충분합니다. 처음에도 1분이면 끝나요.',
    step1Label: 'STEP 01',
    step1Title: 'Mac에 설치',
    step1Body:
      '공증된 .dmg를 내려받아 응용 프로그램 폴더로 옮기고, 시스템 설정에서 손쉬운 사용 권한을 허용하세요.',
    step2Label: 'STEP 02',
    step2Title: 'iPhone 페어링',
    step2Body:
      'iPhone에서 Airothy를 열고, Mac 화면의 QR 코드를 스캔하거나 6자리 코드를 입력하세요. 한 번만 페어링하면 계속 연결됩니다.',
    step3Label: 'STEP 03',
    step3Title: 'Mac 조작',
    step3Body:
      '제스처는 트랙패드 화면에서, 타이핑은 전체 화면 Magic Keyboard에서. 다 쓰고 iPhone을 잠그면 세션이 알아서 종료됩니다.',
    privacyTitle: '개인정보 보호와 보안',
    privacyB1:
      '<strong>로컬 네트워크에서만.</strong> iPhone과 Mac은 Bonjour와 TCP로 직접 통신합니다. 어떤 데이터도 외부 인터넷을 거치지 않습니다.',
    privacyB2:
      '<strong>계정이 필요 없습니다.</strong> 가입도 로그인도 없습니다. 입력한 내용은 내 네트워크 밖으로 나가지 않고, iOS 앱은 익명 사용 통계만 공유합니다.',
    privacyB3:
      '<strong>서명과 공증을 마친 앱.</strong> macOS 앱은 Developer ID로 서명되고 Apple 공증을 받았으며, 검증된 서명으로만 업데이트됩니다.',
    privacyB4:
      '<strong>컨트롤러는 한 번에 하나.</strong> Mac은 여러 iPhone의 명령을 동시에 받지 않으며, 제어권을 넘기려면 Mac에서 직접 승인해야 합니다.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15(Sequoia) 이상',
    reqIosLabel: 'iOS',
    reqIosValue: '26 이상',
    reqNetworkLabel: '네트워크',
    reqNetworkValue: '같은 Wi-Fi 또는 LAN',
    reqPermsLabel: '권한',
    reqPermsValue: '손쉬운 사용(macOS)',
    footerCopy: '© {year} Airothy. Made by easterve.',
    switcherLabel: '언어',
  },

  zh: {
    metaTitle: 'Airothy — 让 iPhone 成为 Mac 的无线触控板',
    metaDescription:
      'Airothy 让 iPhone 变成 Mac 的无线触控板和键盘。不用线缆，不用账户，你的输入不会离开你自己的网络。',
    navDownload: '下载',
    heroBadge: '',
    heroTitle: `让 iPhone 成为<br /><span class="accent">无线触控板</span>`,
    heroSubtitle:
      '在房间任何角落操控 Mac。\niPhone 变身快速、私密的触控板和键盘。\n手势、打字、快捷键，尽在掌心。',
    heroCtaPrimary: '下载 macOS 版',
    heroCtaSecondary: '获取 iOS 应用',
    heroMeta: '需要处于同一本地网络的 macOS 15 及以上和 iOS 26 及以上。',
    featTrackpadTitle: '多点触控触控板',
    featTrackpadBody:
      '单指移动指针，双指滚动、捏合缩放，三指呼出 Mission Control、切换空间。macOS 原生手势，用起来就是熟悉的感觉。',
    featKeyboardTitle: '完整的 Magic Keyboard',
    featKeyboardBody:
      '长按组合的修饰键、顺滑的按键重复，功能键一行还会根据 Mac 机型显示亮度、媒体、静音和音量。也可以用带 Cmd / Opt / Ctrl / Shift 栏的 iOS 键盘。',
    featSecureTitle: '天生安全',
    featSecureBody:
      '每一次连接都经过加密，Mac 只听你亲自批准的 iPhone 的指令。输入从 iPhone 直达 Mac，绝不经过云端。',
    howTitle: '如何使用',
    howSubtitle: '三步搞定，第一次也只要一分钟。',
    step1Label: '步骤 01',
    step1Title: '在 Mac 上安装',
    step1Body:
      '下载经过公证的 .dmg，拖入「应用程序」，然后在「系统设置」中授予「辅助功能」权限。',
    step2Label: '步骤 02',
    step2Title: '配对你的 iPhone',
    step2Body:
      '在 iPhone 上打开 Airothy，扫描 Mac 上的二维码，或输入 6 位配对码。配对一次，长久可用。',
    step3Label: '步骤 03',
    step3Title: '控制你的 Mac',
    step3Body:
      '手势用触控板区域，打字用全屏 Magic Keyboard。用完锁上 iPhone，会话自动结束。',
    privacyTitle: '隐私与安全',
    privacyB1:
      '<strong>只走本地网络。</strong> iPhone 和 Mac 通过 Bonjour 和 TCP 点对点通信，任何数据都不经过公共互联网。',
    privacyB2:
      '<strong>不需要账户。</strong> 不用注册，不用登录。你的输入不会离开你自己的网络，iOS 应用只分享匿名使用统计。',
    privacyB3:
      '<strong>已签名、已公证。</strong> macOS 应用经 Developer ID 签名、Apple 公证，更新也只接受经过验证的签名。',
    privacyB4:
      '<strong>同一时间只有一个控制端。</strong> Mac 不会同时接受多台 iPhone 的指令，接管必须在 Mac 上确认。',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15（Sequoia）或更高',
    reqIosLabel: 'iOS',
    reqIosValue: '26 或更高',
    reqNetworkLabel: '网络',
    reqNetworkValue: '相同的 Wi-Fi 或局域网',
    reqPermsLabel: '权限',
    reqPermsValue: '辅助功能（macOS）',
    footerCopy: '© {year} Airothy. Made by easterve.',
    switcherLabel: '语言',
  },

  ar: {
    metaTitle: 'Airothy — اجعل iPhone لوحة تتبع لاسلكية لجهاز Mac',
    metaDescription:
      'يحوّل Airothy هاتف iPhone إلى لوحة تتبع ولوحة مفاتيح لاسلكية لجهاز Mac. بلا كابلات ولا حسابات، وما تكتبه لا يغادر شبكتك أبدًا.',
    navDownload: 'تنزيل',
    heroBadge: '',
    heroTitle: `اجعل iPhone<br /><span class="accent">لوحة تتبع لاسلكية</span>`,
    heroSubtitle:
      'تحكّم في جهاز Mac من أي مكان في الغرفة.\nيتحوّل iPhone إلى لوحة تتبع ولوحة مفاتيح سريعة وخاصة.\nالإيماءات والكتابة والاختصارات، كلها بين يديك.',
    heroCtaPrimary: 'التنزيل لنظام macOS',
    heroCtaSecondary: 'الحصول على تطبيق iOS',
    heroMeta: 'يتطلب macOS 15 أو أحدث و iOS 26 أو أحدث على الشبكة المحلية نفسها.',
    featTrackpadTitle: 'لوحة تتبع متعددة اللمس',
    featTrackpadBody:
      'إصبع واحد للمؤشر، وإصبعان للتمرير والتكبير، وثلاثة أصابع لفتح Mission Control والتنقل بين المساحات. إيماءات macOS الحقيقية كما تعرفها تمامًا.',
    featKeyboardTitle: 'لوحة Magic Keyboard كاملة',
    featKeyboardBody:
      'مفاتيح تعديل تعمل بالضغط المستمر، وتكرار سلس للمفاتيح، وصف مفاتيح وظائف يناسب جهاز Mac لديك: السطوع والوسائط والكتم ومستوى الصوت. أو استخدم لوحة مفاتيح iOS مع شريط Cmd / Opt / Ctrl / Shift.',
    featSecureTitle: 'آمن بطبيعته',
    featSecureBody:
      'كل اتصال مشفّر، ولا يقبل Mac الأوامر إلا من أجهزة iPhone التي وافقت عليها بنفسك. تنتقل مدخلاتك من iPhone إلى Mac مباشرةً دون المرور بالسحابة.',
    howTitle: 'كيف يعمل',
    howSubtitle: 'ثلاث خطوات فقط، ودقيقة واحدة في المرة الأولى.',
    step1Label: 'الخطوة 01',
    step1Title: 'التثبيت على Mac',
    step1Body:
      'نزّل ملف .dmg الموثَّق واسحبه إلى «التطبيقات»، ثم امنح إذن «إمكانية الوصول» من «إعدادات النظام».',
    step2Label: 'الخطوة 02',
    step2Title: 'اقتران iPhone',
    step2Body:
      'افتح Airothy على iPhone وامسح رمز QR أو أدخل الرمز المكوّن من 6 أرقام الظاهر على Mac. اقتران واحد يكفي.',
    step3Label: 'الخطوة 03',
    step3Title: 'التحكم في Mac',
    step3Body:
      'استخدم سطح لوحة التتبع للإيماءات، ولوحة Magic Keyboard بملء الشاشة للكتابة. اقفل iPhone عند الانتهاء وستنتهي الجلسة تلقائيًا.',
    privacyTitle: 'الخصوصية والأمان',
    privacyB1:
      '<strong>الشبكة المحلية فقط.</strong> يتواصل iPhone و Mac مباشرةً عبر Bonjour و TCP. لا شيء يمر عبر الإنترنت العام.',
    privacyB2:
      '<strong>بلا حسابات.</strong> لا تسجيل ولا تسجيل دخول. ما تكتبه لا يغادر شبكتك أبدًا، ولا يشارك تطبيق iOS سوى إحصاءات استخدام مجهولة الهوية.',
    privacyB3:
      '<strong>موقّع وموثَّق.</strong> تطبيق macOS موقّع بـ Developer ID وموثَّق من Apple، ولا يُحدَّث إلا بتواقيع إصدار مُتحقَّق منها.',
    privacyB4:
      '<strong>جهاز تحكم واحد في كل مرة.</strong> لا يقبل Mac أوامر من أكثر من iPhone في الوقت نفسه، ويتطلب نقل التحكم موافقة على جهاز Mac.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) أو أحدث',
    reqIosLabel: 'iOS',
    reqIosValue: '26 أو أحدث',
    reqNetworkLabel: 'الشبكة',
    reqNetworkValue: 'نفس شبكة Wi-Fi أو LAN',
    reqPermsLabel: 'الأذونات',
    reqPermsValue: 'إمكانية الوصول (macOS)',
    footerCopy: '© {year} Airothy. Made by easterve.',
    switcherLabel: 'اللغة',
  },
} as const;

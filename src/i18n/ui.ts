// Marketing copy for airothy.com, one dictionary per locale.
//
// English is the source of truth and the fallback for any missing key.
// Locales match the apps' Localizable.xcstrings set (ar, de, en, es, fr, ja,
// ko, zh-Hans); zh-Hans is keyed as `zh` to match the /zh/ URL segment.
//
// Non-English strings were machine-translated (Claude) reusing terminology
// from the apps; native review is welcome. A few values contain inline HTML
// (heroTitle, privacyB1–B4) and are rendered with set:html. {year} in
// footerCopy is interpolated at render time.

export const defaultLang = 'en';

export const ui = {
  en: {
    metaTitle: "Airothy — your iPhone is your Mac's wireless trackpad and keyboard",
    metaDescription:
      'Airothy turns your iPhone into a secure, low-latency wireless trackpad and keyboard for your Mac. No cables. No third-party servers. Built on Apple frameworks only.',
    navGithub: 'GitHub',
    navDownload: 'Download',
    heroBadge: 'Now in beta',
    heroTitle: `Your iPhone is your Mac's <span class="accent">wireless trackpad</span> and keyboard.`,
    heroSubtitle:
      'Airothy turns any iPhone on your local network into a secure, low-latency input device for your Mac. Multi-touch gestures, full keyboard, Mission Control, media keys — all without leaving your couch.',
    heroCtaPrimary: 'Download for macOS',
    heroCtaSecondary: 'Get the iOS app',
    heroMeta: 'Requires macOS 15+ and iOS 17+ on the same local network.',
    featTrackpadTitle: 'Multi-touch trackpad',
    featTrackpadBody:
      'One-finger pointer, two-finger scroll and pinch-to-zoom, three-finger Mission Control and Space navigation. Tuned for the real macOS gesture vocabulary.',
    featKeyboardTitle: 'Full Magic Keyboard',
    featKeyboardBody:
      'Hold-to-use modifiers, client-side key repeat, Mac-generation-aware function row with brightness, media, mute, and volume. Or use the iOS keyboard with a Cmd / Opt / Ctrl / Shift accessory bar.',
    featSecureTitle: 'Authenticated by design',
    featSecureBody:
      'Curve25519 key exchange, HMAC-signed command envelopes, monotonic sequence numbers, and explicit Mac-owner pairing. No cloud, no third-party servers, no telemetry.',
    howTitle: 'How it works',
    howSubtitle: 'Three steps, ~60 seconds the first time.',
    step1Label: 'STEP 01',
    step1Title: 'Install on Mac',
    step1Body:
      'Download the notarized .dmg, drag to Applications, grant Accessibility permission in System Settings.',
    step2Label: 'STEP 02',
    step2Title: 'Pair your iPhone',
    step2Body:
      'Open Airothy on iPhone. Scan the QR or enter the 6-digit code shown on the Mac. Trusted once, paired forever.',
    step3Label: 'STEP 03',
    step3Title: 'Control your Mac',
    step3Body:
      'Use the trackpad surface for gestures, or the full-screen Magic Keyboard for typing. Auto-locks when you put the iPhone down.',
    privacyTitle: 'Privacy and security',
    privacyB1:
      '<strong>Local network only.</strong> The iPhone and Mac talk peer-to-peer over Bonjour and TCP. Nothing transits the public internet.',
    privacyB2:
      '<strong>No accounts.</strong> No sign-up. No login. No third-party servers. No analytics. No telemetry.',
    privacyB3:
      '<strong>Open protocol, signed code.</strong> The macOS app is Developer ID signed, notarized by Apple, and auto-updates via Sparkle with EdDSA-verified release signatures.',
    privacyB4:
      '<strong>One controller at a time.</strong> The Mac will not accept commands from more than one paired iPhone simultaneously; takeover requires explicit Mac-side approval.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) or later',
    reqIosLabel: 'iOS',
    reqIosValue: '17 or later',
    reqNetworkLabel: 'Network',
    reqNetworkValue: 'Same Wi-Fi or LAN',
    reqPermsLabel: 'Permissions',
    reqPermsValue: 'Accessibility (macOS)',
    footerCopy: '© {year} Airothy. Made by easterve.',
    footerReleases: 'Releases',
    footerGithub: 'GitHub',
    footerAppcast: 'Appcast',
    switcherLabel: 'Language',
  },

  de: {
    metaTitle: 'Airothy — dein iPhone als drahtloses Trackpad und Tastatur für den Mac',
    metaDescription:
      'Airothy macht dein iPhone zum sicheren, latenzarmen drahtlosen Trackpad und zur Tastatur für deinen Mac. Keine Kabel. Keine Drittanbieter-Server. Nur Apple-Frameworks.',
    navGithub: 'GitHub',
    navDownload: 'Download',
    heroBadge: 'Jetzt in der Beta',
    heroTitle: `Dein iPhone ist das <span class="accent">drahtlose Trackpad</span> und die Tastatur deines Mac.`,
    heroSubtitle:
      'Airothy verwandelt jedes iPhone im lokalen Netzwerk in ein sicheres, latenzarmes Eingabegerät für deinen Mac. Multi-Touch-Gesten, volle Tastatur, Mission Control, Medientasten — alles bequem vom Sofa aus.',
    heroCtaPrimary: 'Für macOS laden',
    heroCtaSecondary: 'iOS-App holen',
    heroMeta: 'Erfordert macOS 15+ und iOS 17+ im selben lokalen Netzwerk.',
    featTrackpadTitle: 'Multi-Touch-Trackpad',
    featTrackpadBody:
      'Zeiger mit einem Finger, Scrollen und Zoomen mit zwei Fingern, Mission Control und Space-Navigation mit drei Fingern. Abgestimmt auf das echte Gestenvokabular von macOS.',
    featKeyboardTitle: 'Volle Magic Keyboard',
    featKeyboardBody:
      'Gedrückt-halten-Modifikatoren, clientseitige Tastenwiederholung, eine an die Mac-Generation angepasste Funktionsleiste mit Helligkeit, Medien, Stummschaltung und Lautstärke. Oder nutze die iOS-Tastatur mit einer Cmd / Opt / Ctrl / Shift-Leiste.',
    featSecureTitle: 'Sicher von Grund auf',
    featSecureBody:
      'Curve25519-Schlüsselaustausch, HMAC-signierte Befehls-Umschläge, monoton steigende Sequenznummern und ausdrückliches Pairing durch den Mac-Besitzer. Keine Cloud, keine Drittanbieter-Server, keine Telemetrie.',
    howTitle: 'So funktioniert es',
    howSubtitle: 'Drei Schritte, beim ersten Mal ~60 Sekunden.',
    step1Label: 'SCHRITT 01',
    step1Title: 'Auf dem Mac installieren',
    step1Body:
      'Lade die notarisierte .dmg, ziehe sie in „Programme“ und erteile in den Systemeinstellungen die Berechtigung „Bedienungshilfen“.',
    step2Label: 'SCHRITT 02',
    step2Title: 'iPhone koppeln',
    step2Body:
      'Öffne Airothy auf dem iPhone. Scanne den QR-Code oder gib den auf dem Mac angezeigten 6-stelligen Code ein. Einmal vertraut, für immer gekoppelt.',
    step3Label: 'SCHRITT 03',
    step3Title: 'Mac steuern',
    step3Body:
      'Nutze die Trackpad-Fläche für Gesten oder die bildschirmfüllende Magic Keyboard zum Tippen. Sperrt automatisch, wenn du das iPhone weglegst.',
    privacyTitle: 'Datenschutz und Sicherheit',
    privacyB1:
      '<strong>Nur lokales Netzwerk.</strong> iPhone und Mac kommunizieren direkt über Bonjour und TCP. Nichts geht über das öffentliche Internet.',
    privacyB2:
      '<strong>Keine Konten.</strong> Keine Registrierung. Kein Login. Keine Drittanbieter-Server. Keine Analyse. Keine Telemetrie.',
    privacyB3:
      '<strong>Offenes Protokoll, signierter Code.</strong> Die macOS-App ist mit einer Developer-ID signiert, von Apple notarisiert und aktualisiert sich automatisch über Sparkle mit EdDSA-verifizierten Release-Signaturen.',
    privacyB4:
      '<strong>Nur ein Controller gleichzeitig.</strong> Der Mac nimmt keine Befehle von mehr als einem gekoppelten iPhone gleichzeitig an; eine Übernahme erfordert die ausdrückliche Bestätigung am Mac.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) oder neuer',
    reqIosLabel: 'iOS',
    reqIosValue: '17 oder neuer',
    reqNetworkLabel: 'Netzwerk',
    reqNetworkValue: 'Gleiches WLAN oder LAN',
    reqPermsLabel: 'Berechtigungen',
    reqPermsValue: 'Bedienungshilfen (macOS)',
    footerCopy: '© {year} Airothy. Erstellt von easterve.',
    footerReleases: 'Releases',
    footerGithub: 'GitHub',
    footerAppcast: 'Appcast',
    switcherLabel: 'Sprache',
  },

  es: {
    metaTitle: 'Airothy — tu iPhone como trackpad y teclado inalámbricos para tu Mac',
    metaDescription:
      'Airothy convierte tu iPhone en un trackpad y teclado inalámbricos seguros y de baja latencia para tu Mac. Sin cables. Sin servidores de terceros. Solo frameworks de Apple.',
    navGithub: 'GitHub',
    navDownload: 'Descargar',
    heroBadge: 'Ahora en beta',
    heroTitle: `Tu iPhone es el <span class="accent">trackpad inalámbrico</span> y el teclado de tu Mac.`,
    heroSubtitle:
      'Airothy convierte cualquier iPhone de tu red local en un dispositivo de entrada seguro y de baja latencia para tu Mac. Gestos multitáctiles, teclado completo, Mission Control, teclas multimedia — todo sin levantarte del sofá.',
    heroCtaPrimary: 'Descargar para macOS',
    heroCtaSecondary: 'Obtener la app de iOS',
    heroMeta: 'Requiere macOS 15+ e iOS 17+ en la misma red local.',
    featTrackpadTitle: 'Trackpad multitáctil',
    featTrackpadBody:
      'Puntero con un dedo, desplazamiento y zoom con dos dedos, Mission Control y navegación entre Spaces con tres dedos. Ajustado al vocabulario de gestos real de macOS.',
    featKeyboardTitle: 'Magic Keyboard completo',
    featKeyboardBody:
      'Modificadores que se mantienen pulsados, repetición de teclas en el cliente y una fila de funciones adaptada a la generación del Mac con brillo, multimedia, silencio y volumen. O usa el teclado de iOS con una barra de Cmd / Opt / Ctrl / Shift.',
    featSecureTitle: 'Autenticado por diseño',
    featSecureBody:
      'Intercambio de claves Curve25519, sobres de comandos firmados con HMAC, números de secuencia monótonos y emparejamiento con aprobación explícita del propietario del Mac. Sin nube, sin servidores de terceros, sin telemetría.',
    howTitle: 'Cómo funciona',
    howSubtitle: 'Tres pasos, ~60 segundos la primera vez.',
    step1Label: 'PASO 01',
    step1Title: 'Instalar en el Mac',
    step1Body:
      'Descarga el .dmg notarizado, arrástralo a Aplicaciones y concede el permiso de Accesibilidad en Ajustes del Sistema.',
    step2Label: 'PASO 02',
    step2Title: 'Emparejar tu iPhone',
    step2Body:
      'Abre Airothy en el iPhone. Escanea el QR o introduce el código de 6 dígitos que aparece en el Mac. Una vez de confianza, emparejado para siempre.',
    step3Label: 'PASO 03',
    step3Title: 'Controlar tu Mac',
    step3Body:
      'Usa la superficie del trackpad para los gestos o el Magic Keyboard a pantalla completa para escribir. Se bloquea automáticamente cuando dejas el iPhone.',
    privacyTitle: 'Privacidad y seguridad',
    privacyB1:
      '<strong>Solo red local.</strong> El iPhone y el Mac se comunican de igual a igual mediante Bonjour y TCP. Nada pasa por internet.',
    privacyB2:
      '<strong>Sin cuentas.</strong> Sin registro. Sin inicio de sesión. Sin servidores de terceros. Sin analíticas. Sin telemetría.',
    privacyB3:
      '<strong>Protocolo abierto, código firmado.</strong> La app de macOS está firmada con Developer ID, notarizada por Apple y se actualiza automáticamente con Sparkle mediante firmas de versión verificadas con EdDSA.',
    privacyB4:
      '<strong>Un solo controlador a la vez.</strong> El Mac no aceptará comandos de más de un iPhone emparejado a la vez; el relevo requiere aprobación explícita en el Mac.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) o posterior',
    reqIosLabel: 'iOS',
    reqIosValue: '17 o posterior',
    reqNetworkLabel: 'Red',
    reqNetworkValue: 'Mismo Wi-Fi o LAN',
    reqPermsLabel: 'Permisos',
    reqPermsValue: 'Accesibilidad (macOS)',
    footerCopy: '© {year} Airothy. Creado por easterve.',
    footerReleases: 'Versiones',
    footerGithub: 'GitHub',
    footerAppcast: 'Appcast',
    switcherLabel: 'Idioma',
  },

  fr: {
    metaTitle: 'Airothy — votre iPhone comme trackpad et clavier sans fil pour votre Mac',
    metaDescription:
      'Airothy transforme votre iPhone en trackpad et clavier sans fil sécurisés et à faible latence pour votre Mac. Sans câble. Sans serveur tiers. Uniquement des frameworks Apple.',
    navGithub: 'GitHub',
    navDownload: 'Télécharger',
    heroBadge: 'Désormais en bêta',
    heroTitle: `Votre iPhone devient le <span class="accent">trackpad sans fil</span> et le clavier de votre Mac.`,
    heroSubtitle:
      'Airothy transforme n’importe quel iPhone de votre réseau local en périphérique de saisie sécurisé et à faible latence pour votre Mac. Gestes multitouch, clavier complet, Mission Control, touches multimédias — le tout sans quitter votre canapé.',
    heroCtaPrimary: 'Télécharger pour macOS',
    heroCtaSecondary: 'Obtenir l’app iOS',
    heroMeta: 'Nécessite macOS 15+ et iOS 17+ sur le même réseau local.',
    featTrackpadTitle: 'Trackpad multitouch',
    featTrackpadBody:
      'Pointeur à un doigt, défilement et zoom à deux doigts, Mission Control et navigation entre les Spaces à trois doigts. Calibré sur le véritable vocabulaire gestuel de macOS.',
    featKeyboardTitle: 'Magic Keyboard complet',
    featKeyboardBody:
      'Modificateurs à maintien, répétition des touches côté client, rangée de fonctions adaptée à la génération du Mac avec luminosité, médias, silence et volume. Ou utilisez le clavier iOS avec une barre Cmd / Opt / Ctrl / Shift.',
    featSecureTitle: 'Authentifié par conception',
    featSecureBody:
      'Échange de clés Curve25519, enveloppes de commandes signées par HMAC, numéros de séquence monotones et appairage avec approbation explicite du propriétaire du Mac. Pas de cloud, pas de serveur tiers, pas de télémétrie.',
    howTitle: 'Comment ça marche',
    howSubtitle: 'Trois étapes, ~60 secondes la première fois.',
    step1Label: 'ÉTAPE 01',
    step1Title: 'Installer sur le Mac',
    step1Body:
      'Téléchargez le .dmg notarié, glissez-le dans Applications et accordez l’autorisation Accessibilité dans Réglages Système.',
    step2Label: 'ÉTAPE 02',
    step2Title: 'Appairer votre iPhone',
    step2Body:
      'Ouvrez Airothy sur l’iPhone. Scannez le QR ou saisissez le code à 6 chiffres affiché sur le Mac. Approuvé une fois, appairé pour toujours.',
    step3Label: 'ÉTAPE 03',
    step3Title: 'Contrôler votre Mac',
    step3Body:
      'Utilisez la surface du trackpad pour les gestes, ou le Magic Keyboard plein écran pour taper. Verrouillage automatique dès que vous posez l’iPhone.',
    privacyTitle: 'Confidentialité et sécurité',
    privacyB1:
      '<strong>Réseau local uniquement.</strong> L’iPhone et le Mac communiquent en pair à pair via Bonjour et TCP. Rien ne transite par l’internet public.',
    privacyB2:
      '<strong>Aucun compte.</strong> Pas d’inscription. Pas de connexion. Pas de serveur tiers. Pas d’analyse. Pas de télémétrie.',
    privacyB3:
      '<strong>Protocole ouvert, code signé.</strong> L’app macOS est signée Developer ID, notariée par Apple et se met à jour automatiquement via Sparkle avec des signatures de version vérifiées par EdDSA.',
    privacyB4:
      '<strong>Un seul contrôleur à la fois.</strong> Le Mac n’accepte pas les commandes de plus d’un iPhone appairé à la fois ; la reprise exige une approbation explicite côté Mac.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) ou ultérieur',
    reqIosLabel: 'iOS',
    reqIosValue: '17 ou ultérieur',
    reqNetworkLabel: 'Réseau',
    reqNetworkValue: 'Même Wi-Fi ou LAN',
    reqPermsLabel: 'Autorisations',
    reqPermsValue: 'Accessibilité (macOS)',
    footerCopy: '© {year} Airothy. Conçu par easterve.',
    footerReleases: 'Versions',
    footerGithub: 'GitHub',
    footerAppcast: 'Appcast',
    switcherLabel: 'Langue',
  },

  ja: {
    metaTitle: 'Airothy — iPhone を Mac のワイヤレストラックパッド＆キーボードに',
    metaDescription:
      'Airothy は iPhone を、Mac 用の安全で低遅延なワイヤレストラックパッド兼キーボードに変えます。ケーブル不要。サードパーティのサーバーなし。Apple のフレームワークのみで構築。',
    navGithub: 'GitHub',
    navDownload: 'ダウンロード',
    heroBadge: 'ベータ版公開中',
    heroTitle: `iPhone が Mac の<span class="accent">ワイヤレストラックパッド</span>とキーボードに。`,
    heroSubtitle:
      'Airothy は、ローカルネットワーク上の iPhone を Mac 用の安全で低遅延な入力デバイスに変えます。マルチタッチジェスチャ、フルキーボード、Mission Control、メディアキー — すべてソファに座ったままで。',
    heroCtaPrimary: 'macOS 版をダウンロード',
    heroCtaSecondary: 'iOS アプリを入手',
    heroMeta: '同一ローカルネットワーク上の macOS 15 以降と iOS 17 以降が必要です。',
    featTrackpadTitle: 'マルチタッチトラックパッド',
    featTrackpadBody:
      '1 本指でポインタ、2 本指でスクロールとピンチズーム、3 本指で Mission Control とスペース移動。macOS 本来のジェスチャ体系に合わせて調整。',
    featKeyboardTitle: 'フル Magic Keyboard',
    featKeyboardBody:
      '長押し対応の修飾キー、クライアント側でのキーリピート、Mac の世代に合わせたファンクション列（輝度・メディア・消音・音量）。iOS のキーボードを Cmd / Opt / Ctrl / Shift バー付きで使うこともできます。',
    featSecureTitle: '設計から認証済み',
    featSecureBody:
      'Curve25519 鍵交換、HMAC 署名付きコマンド、単調増加するシーケンス番号、そして Mac 所有者による明示的なペアリング。クラウドなし、サードパーティのサーバーなし、テレメトリなし。',
    howTitle: '使い方',
    howSubtitle: '3 ステップ、初回は約 60 秒。',
    step1Label: 'ステップ 01',
    step1Title: 'Mac にインストール',
    step1Body:
      '公証済みの .dmg をダウンロードして「アプリケーション」にドラッグし、「システム設定」で「アクセシビリティ」の許可を与えます。',
    step2Label: 'ステップ 02',
    step2Title: 'iPhone をペアリング',
    step2Body:
      'iPhone で Airothy を開きます。QR コードをスキャンするか、Mac に表示された 6 桁のコードを入力します。一度信頼すれば、ずっとペアリング済み。',
    step3Label: 'ステップ 03',
    step3Title: 'Mac を操作',
    step3Body:
      'トラックパッド面でジェスチャを、全画面の Magic Keyboard で入力を。iPhone を置くと自動でロックします。',
    privacyTitle: 'プライバシーとセキュリティ',
    privacyB1:
      '<strong>ローカルネットワークのみ。</strong> iPhone と Mac は Bonjour と TCP でピアツーピアに通信します。公共のインターネットを経由しません。',
    privacyB2:
      '<strong>アカウント不要。</strong> 登録なし。ログインなし。サードパーティのサーバーなし。解析なし。テレメトリなし。',
    privacyB3:
      '<strong>オープンなプロトコル、署名済みコード。</strong> macOS アプリは Developer ID で署名され、Apple により公証され、EdDSA 検証付きのリリース署名により Sparkle 経由で自動更新されます。',
    privacyB4:
      '<strong>同時に 1 台のコントローラーのみ。</strong> Mac は同時に複数のペアリング済み iPhone からのコマンドを受け付けません。切り替えには Mac 側での明示的な承認が必要です。',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15（Sequoia）以降',
    reqIosLabel: 'iOS',
    reqIosValue: '17 以降',
    reqNetworkLabel: 'ネットワーク',
    reqNetworkValue: '同一の Wi-Fi または LAN',
    reqPermsLabel: '権限',
    reqPermsValue: 'アクセシビリティ（macOS）',
    footerCopy: '© {year} Airothy. easterve が制作。',
    footerReleases: 'リリース',
    footerGithub: 'GitHub',
    footerAppcast: 'Appcast',
    switcherLabel: '言語',
  },

  ko: {
    metaTitle: 'Airothy — iPhone을 Mac의 무선 트랙패드이자 키보드로',
    metaDescription:
      'Airothy는 iPhone을 Mac을 위한 안전하고 지연이 적은 무선 트랙패드 및 키보드로 바꿔 줍니다. 케이블 없음. 서드파티 서버 없음. Apple 프레임워크만으로 제작.',
    navGithub: 'GitHub',
    navDownload: '다운로드',
    heroBadge: '현재 베타',
    heroTitle: `iPhone이 Mac의 <span class="accent">무선 트랙패드</span>이자 키보드가 됩니다.`,
    heroSubtitle:
      'Airothy는 로컬 네트워크의 어떤 iPhone이든 Mac을 위한 안전하고 지연이 적은 입력 장치로 바꿔 줍니다. 멀티터치 제스처, 전체 키보드, Mission Control, 미디어 키 — 소파에서 일어나지 않고도 모두 가능합니다.',
    heroCtaPrimary: 'macOS용 다운로드',
    heroCtaSecondary: 'iOS 앱 받기',
    heroMeta: '동일한 로컬 네트워크의 macOS 15 이상과 iOS 17 이상이 필요합니다.',
    featTrackpadTitle: '멀티터치 트랙패드',
    featTrackpadBody:
      '한 손가락 포인터, 두 손가락 스크롤과 핀치 줌, 세 손가락 Mission Control 및 Space 이동. macOS 본연의 제스처 체계에 맞춰 조정했습니다.',
    featKeyboardTitle: '완전한 Magic Keyboard',
    featKeyboardBody:
      '길게 눌러 쓰는 보조 키, 클라이언트 측 키 반복, Mac 세대를 인식하는 기능 키 열(밝기, 미디어, 음소거, 볼륨). 또는 Cmd / Opt / Ctrl / Shift 보조 막대가 있는 iOS 키보드를 사용할 수 있습니다.',
    featSecureTitle: '설계부터 인증',
    featSecureBody:
      'Curve25519 키 교환, HMAC 서명 명령 봉투, 단조 증가 시퀀스 번호, 그리고 Mac 소유자의 명시적 페어링. 클라우드 없음, 서드파티 서버 없음, 텔레메트리 없음.',
    howTitle: '작동 방식',
    howSubtitle: '세 단계, 처음에는 약 60초.',
    step1Label: '단계 01',
    step1Title: 'Mac에 설치',
    step1Body:
      '공증된 .dmg를 다운로드해 응용 프로그램으로 드래그하고, 시스템 설정에서 손쉬운 사용 권한을 허용합니다.',
    step2Label: '단계 02',
    step2Title: 'iPhone 페어링',
    step2Body:
      'iPhone에서 Airothy를 엽니다. QR을 스캔하거나 Mac에 표시된 6자리 코드를 입력합니다. 한 번 신뢰하면 계속 페어링됩니다.',
    step3Label: '단계 03',
    step3Title: 'Mac 제어',
    step3Body:
      '제스처에는 트랙패드 면을, 입력에는 전체 화면 Magic Keyboard를 사용하세요. iPhone을 내려놓으면 자동으로 잠깁니다.',
    privacyTitle: '개인정보 보호와 보안',
    privacyB1:
      '<strong>로컬 네트워크 전용.</strong> iPhone과 Mac은 Bonjour와 TCP를 통해 P2P로 통신합니다. 어떤 데이터도 공용 인터넷을 거치지 않습니다.',
    privacyB2:
      '<strong>계정 없음.</strong> 가입 없음. 로그인 없음. 서드파티 서버 없음. 분석 없음. 텔레메트리 없음.',
    privacyB3:
      '<strong>개방형 프로토콜, 서명된 코드.</strong> macOS 앱은 Developer ID로 서명되고 Apple의 공증을 받았으며, EdDSA로 검증된 릴리스 서명과 함께 Sparkle을 통해 자동 업데이트됩니다.',
    privacyB4:
      '<strong>한 번에 하나의 컨트롤러.</strong> Mac은 동시에 둘 이상의 페어링된 iPhone에서 오는 명령을 받지 않으며, 전환에는 Mac 쪽의 명시적 승인이 필요합니다.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) 이상',
    reqIosLabel: 'iOS',
    reqIosValue: '17 이상',
    reqNetworkLabel: '네트워크',
    reqNetworkValue: '동일한 Wi-Fi 또는 LAN',
    reqPermsLabel: '권한',
    reqPermsValue: '손쉬운 사용 (macOS)',
    footerCopy: '© {year} Airothy. easterve 제작.',
    footerReleases: '릴리스',
    footerGithub: 'GitHub',
    footerAppcast: 'Appcast',
    switcherLabel: '언어',
  },

  zh: {
    metaTitle: 'Airothy — 让 iPhone 成为 Mac 的无线触控板和键盘',
    metaDescription:
      'Airothy 把你的 iPhone 变成 Mac 的安全、低延迟无线触控板和键盘。无需线缆。没有第三方服务器。仅基于 Apple 框架构建。',
    navGithub: 'GitHub',
    navDownload: '下载',
    heroBadge: '现已进入 Beta',
    heroTitle: `让你的 iPhone 成为 Mac 的<span class="accent">无线触控板</span>和键盘。`,
    heroSubtitle:
      'Airothy 把本地网络中的任意 iPhone 变成 Mac 的安全、低延迟输入设备。多点触控手势、完整键盘、Mission Control、媒体键 — 全部都能在沙发上完成。',
    heroCtaPrimary: '下载 macOS 版',
    heroCtaSecondary: '获取 iOS 应用',
    heroMeta: '需要同一本地网络中的 macOS 15+ 和 iOS 17+。',
    featTrackpadTitle: '多点触控触控板',
    featTrackpadBody:
      '单指移动指针，双指滚动与捏合缩放，三指打开 Mission Control 与切换空间。针对 macOS 真实的手势体系进行了调校。',
    featKeyboardTitle: '完整的 Magic Keyboard',
    featKeyboardBody:
      '可长按的修饰键、客户端按键重复，以及根据 Mac 机型适配的功能键行（亮度、媒体、静音和音量）。也可以使用带 Cmd / Opt / Ctrl / Shift 辅助栏的 iOS 键盘。',
    featSecureTitle: '从设计上就经过认证',
    featSecureBody:
      'Curve25519 密钥交换、HMAC 签名的命令封包、单调递增的序列号，以及由 Mac 所有者明确确认的配对。没有云端，没有第三方服务器，没有遥测。',
    howTitle: '工作原理',
    howSubtitle: '三步搞定，首次约 60 秒。',
    step1Label: '步骤 01',
    step1Title: '在 Mac 上安装',
    step1Body:
      '下载经过公证的 .dmg，拖入「应用程序」，然后在「系统设置」中授予「辅助功能」权限。',
    step2Label: '步骤 02',
    step2Title: '配对你的 iPhone',
    step2Body:
      '在 iPhone 上打开 Airothy。扫描二维码或输入 Mac 上显示的 6 位代码。一次信任，长久配对。',
    step3Label: '步骤 03',
    step3Title: '控制你的 Mac',
    step3Body:
      '用触控板区域做手势，或用全屏 Magic Keyboard 打字。放下 iPhone 时会自动锁定。',
    privacyTitle: '隐私与安全',
    privacyB1:
      '<strong>仅限本地网络。</strong> iPhone 与 Mac 通过 Bonjour 和 TCP 点对点通信。任何数据都不会经过公共互联网。',
    privacyB2:
      '<strong>无需账户。</strong> 无需注册。无需登录。没有第三方服务器。没有分析。没有遥测。',
    privacyB3:
      '<strong>开放协议，签名代码。</strong> macOS 应用经过 Developer ID 签名、Apple 公证，并通过 Sparkle 以 EdDSA 验证的发布签名自动更新。',
    privacyB4:
      '<strong>同一时间仅一个控制端。</strong> Mac 不会同时接受来自多台已配对 iPhone 的命令；接管需要在 Mac 端明确批准。',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15（Sequoia）或更高',
    reqIosLabel: 'iOS',
    reqIosValue: '17 或更高',
    reqNetworkLabel: '网络',
    reqNetworkValue: '相同的 Wi-Fi 或局域网',
    reqPermsLabel: '权限',
    reqPermsValue: '辅助功能（macOS）',
    footerCopy: '© {year} Airothy. 由 easterve 制作。',
    footerReleases: '版本发布',
    footerGithub: 'GitHub',
    footerAppcast: 'Appcast',
    switcherLabel: '语言',
  },

  ar: {
    metaTitle: 'Airothy — هاتف iPhone كلوحة تتبع ولوحة مفاتيح لاسلكية لجهاز Mac',
    metaDescription:
      'يحوّل Airothy هاتف iPhone إلى لوحة تتبع ولوحة مفاتيح لاسلكية آمنة ومنخفضة الكمون لجهاز Mac. بلا كابلات. بلا خوادم خارجية. مبني على أطر عمل Apple فقط.',
    navGithub: 'GitHub',
    navDownload: 'تنزيل',
    heroBadge: 'متاح الآن كنسخة بيتا',
    heroTitle: `هاتف iPhone هو <span class="accent">لوحة التتبع اللاسلكية</span> ولوحة المفاتيح لجهاز Mac.`,
    heroSubtitle:
      'يحوّل Airothy أي هاتف iPhone على شبكتك المحلية إلى جهاز إدخال آمن ومنخفض الكمون لجهاز Mac. إيماءات متعددة اللمس، لوحة مفاتيح كاملة، Mission Control، ومفاتيح الوسائط — كل ذلك دون مغادرة أريكتك.',
    heroCtaPrimary: 'التنزيل لنظام macOS',
    heroCtaSecondary: 'الحصول على تطبيق iOS',
    heroMeta: 'يتطلب macOS 15 أو أحدث و iOS 17 أو أحدث على الشبكة المحلية نفسها.',
    featTrackpadTitle: 'لوحة تتبع متعددة اللمس',
    featTrackpadBody:
      'مؤشر بإصبع واحد، تمرير وتكبير بإصبعين، و Mission Control والتنقل بين المساحات بثلاثة أصابع. مضبوطة وفق مفردات إيماءات macOS الحقيقية.',
    featKeyboardTitle: 'لوحة Magic Keyboard كاملة',
    featKeyboardBody:
      'مفاتيح تعديل بالضغط المطوّل، تكرار للمفاتيح من جهة العميل، وصف مفاتيح وظائف يتكيّف مع جيل Mac مع السطوع والوسائط والكتم ومستوى الصوت. أو استخدم لوحة مفاتيح iOS مع شريط Cmd / Opt / Ctrl / Shift.',
    featSecureTitle: 'مُوثَّق بحكم التصميم',
    featSecureBody:
      'تبادل مفاتيح Curve25519، أظرف أوامر موقّعة بـ HMAC، أرقام تسلسل متزايدة باطراد، واقتران صريح بموافقة مالك Mac. بلا سحابة، بلا خوادم خارجية، بلا قياس عن بُعد.',
    howTitle: 'كيف يعمل',
    howSubtitle: 'ثلاث خطوات، نحو 60 ثانية في المرة الأولى.',
    step1Label: 'الخطوة 01',
    step1Title: 'التثبيت على Mac',
    step1Body:
      'نزّل ملف .dmg الموثَّق، اسحبه إلى «التطبيقات»، ثم امنح إذن «إمكانية الوصول» من «إعدادات النظام».',
    step2Label: 'الخطوة 02',
    step2Title: 'اقتران iPhone',
    step2Body:
      'افتح Airothy على iPhone. امسح رمز QR أو أدخل الرمز المكوّن من 6 أرقام الظاهر على Mac. ثقة لمرة واحدة، واقتران دائم.',
    step3Label: 'الخطوة 03',
    step3Title: 'التحكم في Mac',
    step3Body:
      'استخدم سطح لوحة التتبع للإيماءات، أو لوحة Magic Keyboard بملء الشاشة للكتابة. يُقفل تلقائيًا عند وضع iPhone جانبًا.',
    privacyTitle: 'الخصوصية والأمان',
    privacyB1:
      '<strong>الشبكة المحلية فقط.</strong> يتواصل iPhone و Mac مباشرةً عبر Bonjour و TCP. لا شيء يمر عبر الإنترنت العام.',
    privacyB2:
      '<strong>بلا حسابات.</strong> بلا تسجيل. بلا تسجيل دخول. بلا خوادم خارجية. بلا تحليلات. بلا قياس عن بُعد.',
    privacyB3:
      '<strong>بروتوكول مفتوح، وشيفرة موقّعة.</strong> تطبيق macOS موقّع بـ Developer ID وموثَّق من Apple، ويُحدَّث تلقائيًا عبر Sparkle بتواقيع إصدار مُتحقَّق منها بـ EdDSA.',
    privacyB4:
      '<strong>وحدة تحكم واحدة في كل مرة.</strong> لن يقبل Mac أوامر من أكثر من iPhone مقترن في الوقت نفسه؛ ويتطلب الاستحواذ موافقة صريحة من جهة Mac.',
    reqMacosLabel: 'macOS',
    reqMacosValue: '15 (Sequoia) أو أحدث',
    reqIosLabel: 'iOS',
    reqIosValue: '17 أو أحدث',
    reqNetworkLabel: 'الشبكة',
    reqNetworkValue: 'نفس شبكة Wi-Fi أو LAN',
    reqPermsLabel: 'الأذونات',
    reqPermsValue: 'إمكانية الوصول (macOS)',
    footerCopy: '© {year} Airothy. من إنشاء easterve.',
    footerReleases: 'الإصدارات',
    footerGithub: 'GitHub',
    footerAppcast: 'Appcast',
    switcherLabel: 'اللغة',
  },
} as const;

export type Lang = keyof typeof ui;
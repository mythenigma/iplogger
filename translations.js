// Translation system - Core functionality
const translations = {
  // English (default)
  en: {
    "nav.create": "Create Link",
    "nav.about": "About",
    "nav.ipcheck": "IP Checker",
    "nav.howitworks": "How It Works",
    "hero.title": "Track any click with IPLogger",
    "hero.subtitle": "Create tracking links that capture IP addresses, location data, and device information from anyone who clicks. Perfect for analytics, security, and monitoring.",
    "hero.form.title": "Create Your Tracking Link",
    "hero.form.step1": "Enter the URL you want to track",
    "hero.form.step2": "Generate your personalized tracking link",
    "hero.form.step3": "Share the link and monitor visitor data",
    "hero.form.input": "Enter the URL to track",
    "hero.form.button": "Create Tracking Link",
    // Tab labels
    "tab.generate": "Generate Link",
    "tab.email": "Email Open Tracker",
    "tab.ip": "IP Address Lookup",
    // Email tracker
    "email.title": "Email Open Tracker",
    "email.subtitle": "Create invisible tracking images to know when your emails are opened. Generate tracking pixels that capture recipient data including IP address, location, and device information when emails are viewed.",
    "email.slider.label": "Drag the slider to the right to confirm you're human",
    "email.slider.start": "Start here - Drag me!",
    "email.slider.end": "Complete here",
    "email.slider.guide": "Drag the red circle to the right",
    "email.slider.progress": "Please drag the slider all the way to the right",
    "email.button": "Generate Email Tracking Image",
    "email.button.hint": "Complete the slider verification above to enable",
    "email.how.title": "How Email Tracking Works",
    "email.how.content": "When you add this tiny image to your email, it loads from our server whenever the email is opened. This lets you know exactly when someone views your message and provides information about their device and location.",
    // IP checker
    "ipcheck.title": "IP Address Checker",
    "ipcheck.subtitle": "Want to look up information about a specific IP address? Use our free IP checker tool to find location details and network information about any public IP address.",
    "ipcheck.input": "Enter an IP address (e.g., 192.168.1.1)",
    "ipcheck.button": "Check IP",
    "ipcheck.default": "Enter an IP address above to see its details",
    // Results and tracking info
    "result.tracking.title": "Your Tracking Information",
    "result.qr.title": "QR Code",
    "result.qr.scan": "Scan to access your IPLogger Link",
    "result.email.title": "Your Email Tracking Information",
    "result.pixel.title": "Tracking Pixel Preview",
    "result.pixel.copy": "Copy this tiny invisible image into your emails",
    "result.pixel.info": "This image loads from our server when the email is opened, sending you tracking data",
    // Technical section
    "technical.title": "Technical Information",
    "technical.content": "IPLogger works by utilizing common web technologies to collect visitor information. When someone clicks your tracking link, our servers capture available data through standard browser APIs and server-side technologies.",
    "technical.server": "Server-side IP collection:",
    "technical.browser": "Browser information collection:",
    "technical.conclusion": "This information allows our system to generate detailed reports on visitor activity, enabling you to analyze traffic patterns and understand your audience better. All tracking is performed anonymously and data is securely stored.",
    // How it works section
    "how.title": "How IP Tracking Works",
    "how.content": "Our system works by creating a unique redirection link that passes through our servers before sending the visitor to the destination URL. During this quick redirection, we collect and analyze visitor data including:",
    "how.feature1": "IP address and geolocation",
    "how.feature2": "Browser type and version", 
    "how.feature3": "Operating system and device",
    "how.feature4": "Screen resolution and language",
    "how.feature5": "Referral source",
    "how.button1": "Create Tracking Link",
    "how.button2": "View Use Cases",
    // Logic section
    "logic.title": "Logic Behind IpLogger",
    "logic.content": "As we all know, websites and apps can easily obtain a user's IP address. This is achieved through simple means, whereby the program running on the server can effortlessly obtain and utilize a pre-built function to obtain the user's IP address. Typically, websites will record these IP addresses for further analysis. Moreover, such programs can also collect the user's browser information, including the browser's time zone and time settings. Through analyzing the browser version, one can also determine the user's device type, such as a mobile phone or computer, along with device brand information and the OS version system.",
    // Privnote section
    "privnote.title": "MaiPDF's Privnote Service",
    "privnote.content": "Create self-destructing notes with Privnote.chat that can only be read once before being permanently deleted. When recipients click your shared link, not only will they see your message, but you'll also receive their IP address and location information.",
    "privnote.feature1": "Create encrypted, self-destructing messages that disappear after being read",
    "privnote.feature2": "Track when your note is opened and by whom (including IP address)",
    "privnote.feature3": "Set custom expiration times for automatic deletion",
    "privnote.feature4": "No account required - simple and anonymous to use",
    "privnote.button": "Try Privnote Now",
    // Footer
    "footer.title": "IPLogger",
    "footer.description": "Free IP tracking and link analytics tool for monitoring visitor activity and collecting user information.",
    "footer.copyright": "© 2025 IPLogger. All rights reserved.",
    "footer.features": "Features",
    "footer.resources": "Resources",
    "footer.usecase": "Use Cases",
    "footer.proscons": "Pros & Cons",
    "footer.guide": "IP Tracking Guide",
    "footer.about": "About Us",
    "footer.related": "Related Tools"
  },
  
  // Spanish
  es: {
    "nav.create": "Crear Enlace",
    "nav.about": "Acerca de",
    "nav.ipcheck": "Verificador de IP",
    "nav.howitworks": "Cómo Funciona",
    "hero.title": "Rastrea cualquier clic con IPLogger",
    "hero.subtitle": "Crea enlaces de seguimiento que capturan direcciones IP, datos de ubicación e información del dispositivo de cualquier persona que haga clic. Perfecto para análisis, seguridad y monitoreo.",
    "hero.form.input": "Ingresa la URL a rastrear",
    "hero.form.button": "Crear Enlace de Seguimiento",
    "tab.generate": "Generar Enlace",
    "tab.email": "Rastreador de Apertura de Email",
    "tab.ip": "Búsqueda de Dirección IP",
    "email.title": "Rastreador de Apertura de Email",
    "email.subtitle": "Crea imágenes de seguimiento invisibles para saber cuándo se abren tus emails. Genera píxeles de seguimiento que capturan datos del destinatario incluyendo dirección IP, ubicación e información del dispositivo cuando se ven los emails.",
    "email.slider.label": "Arrastra el deslizador hacia la derecha para confirmar que eres humano",
    "email.slider.start": "Comienza aquí - ¡Arrástrame!",
    "email.slider.end": "Completa aquí",
    "email.slider.guide": "Arrastra el círculo rojo hacia la derecha",
    "email.button": "Generar Imagen de Seguimiento de Email",
    "email.button.hint": "Completa la verificación del deslizador arriba para habilitar",
    "email.how.title": "Cómo Funciona el Rastreo de Email",
    "email.how.content": "Cuando agregas esta pequeña imagen a tu email, se carga desde nuestro servidor cada vez que se abre el email. Esto te permite saber exactamente cuándo alguien ve tu mensaje y proporciona información sobre su dispositivo y ubicación.",
    "ipcheck.title": "Verificador de Direcciones IP",
    "ipcheck.subtitle": "¿Quieres buscar información sobre una dirección IP específica? Usa nuestra herramienta gratuita de verificación de IP para encontrar detalles de ubicación e información de red sobre cualquier dirección IP pública.",
    "ipcheck.input": "Ingresa una dirección IP (ej., 192.168.1.1)",
    "ipcheck.button": "Verificar IP",
    "ipcheck.default": "Ingresa una dirección IP arriba para ver sus detalles",
    "technical.title": "Información Técnica",
    "technical.content": "IPLogger funciona utilizando tecnologías web comunes para recopilar información de visitantes. Cuando alguien hace clic en tu enlace de seguimiento, nuestros servidores capturan datos disponibles a través de APIs de navegador estándar y tecnologías del lado del servidor.",
    "how.title": "Cómo Funciona el Rastreo de IP",
    "how.content": "Nuestro sistema funciona creando un enlace de redirección único que pasa por nuestros servidores antes de enviar al visitante a la URL de destino. Durante esta redirección rápida, recopilamos y analizamos datos del visitante incluyendo:",
    "logic.title": "Lógica Detrás de IpLogger",
    "privnote.title": "Servicio Privnote de MaiPDF",
    "footer.title": "IPLogger",
    "footer.description": "Herramienta gratuita de seguimiento de IP y análisis de enlaces para monitorear la actividad de visitantes y recopilar información de usuarios.",
    "footer.copyright": "© 2025 IPLogger. Todos los derechos reservados."
  },
  
  // Chinese
  zh: {
    "nav.create": "创建链接",
    "nav.about": "关于我们",
    "nav.ipcheck": "IP查询",
    "nav.howitworks": "工作原理",
    "hero.title": "使用IPLogger跟踪任何点击",
    "hero.subtitle": "创建跟踪链接，捕获任何点击者的IP地址、位置数据和设备信息。完美用于分析、安全和监控。",
    "hero.form.input": "输入要跟踪的URL",
    "hero.form.button": "创建跟踪链接",
    "tab.generate": "生成链接",
    "tab.email": "邮件打开跟踪器",
    "tab.ip": "IP地址查询",
    "email.title": "邮件打开跟踪器",
    "email.subtitle": "创建不可见的跟踪图像，了解何时打开您的邮件。生成跟踪像素，在查看邮件时捕获收件人数据，包括IP地址、位置和设备信息。",
    "email.slider.label": "向右拖动滑块以确认您是人类",
    "email.slider.start": "从这里开始 - 拖动我！",
    "email.slider.end": "在这里完成",
    "email.slider.guide": "向右拖动红色圆圈",
    "email.button": "生成邮件跟踪图像",
    "ipcheck.title": "IP地址查询",
    "ipcheck.subtitle": "想要查找特定IP地址的信息？使用我们的免费IP检查工具查找任何公共IP地址的位置详细信息和网络信息。",
    "ipcheck.input": "输入IP地址（例如，192.168.1.1）",
    "ipcheck.button": "查询IP",
    "ipcheck.default": "在上方输入IP地址以查看详情",
    "technical.title": "技术信息",
    "how.title": "IP跟踪工作原理",
    "logic.title": "IPLogger背后的逻辑",
    "privnote.title": "MaiPDF的Privnote服务",
    "footer.title": "IPLogger",
    "footer.description": "免费IP跟踪和链接分析工具，用于监控访问者活动和收集用户信息。",
    "footer.copyright": "© 2025 IPLogger。保留所有权利。"
  },
    // Arabic
  ar: {
    "nav.create": "إنشاء رابط",
    "nav.about": "حول",
    "nav.ipcheck": "فاحص IP",
    "nav.howitworks": "كيف يعمل",
    "hero.title": "تتبع أي نقرة مع IPLogger",
    "hero.subtitle": "إنشاء روابط تتبع تلتقط عناوين IP وبيانات الموقع ومعلومات الجهاز من أي شخص ينقر. مثالي للتحليلات والأمان والمراقبة.",
    "hero.form.title": "إنشاء رابط التتبع الخاص بك",
    "hero.form.step1": "أدخل عنوان URL الذي تريد تتبعه",
    "hero.form.step2": "قم بإنشاء رابط التتبع المخصص الخاص بك",
    "hero.form.step3": "شارك الرابط وراقب بيانات الزائر",
    "hero.form.input": "أدخل عنوان URL للتتبع",
    "hero.form.button": "إنشاء رابط التتبع",
    // Tab labels
    "tab.generate": "إنشاء رابط",
    "tab.email": "متتبع فتح البريد الإلكتروني",
    "tab.ip": "البحث عن عنوان IP",
    // Email tracker
    "email.title": "متتبع فتح البريد الإلكتروني",
    "email.subtitle": "إنشاء صور تتبع غير مرئية لمعرفة متى يتم فتح رسائل البريد الإلكتروني. قم بإنشاء بكسلات تتبع تلتقط بيانات المستلم بما في ذلك عنوان IP والموقع ومعلومات الجهاز عند عرض رسائل البريد الإلكتروني.",
    "email.slider.label": "اسحب المنزلق إلى اليمين لتأكيد أنك إنسان",
    "email.slider.start": "ابدأ هنا - اسحبني!",
    "email.slider.end": "أكمل هنا",
    "email.slider.guide": "اسحب الدائرة الحمراء إلى اليمين",
    "email.slider.progress": "يرجى سحب المنزلق إلى اليمين بالكامل",
    "email.button": "إنشاء صورة تتبع البريد الإلكتروني",
    "email.button.hint": "أكمل التحقق من المنزلق أعلاه للتمكين",
    "email.how.title": "كيف يعمل تتبع البريد الإلكتروني",
    "email.how.content": "عندما تضيف هذه الصورة الصغيرة إلى بريدك الإلكتروني، يتم تحميلها من خادمنا كلما تم فتح البريد الإلكتروني. هذا يتيح لك معرفة متى يشاهد شخص ما رسالتك بالضبط ويوفر معلومات حول جهازه وموقعه.",
    // IP checker
    "ipcheck.title": "فاحص عنوان IP",
    "ipcheck.subtitle": "هل تريد البحث عن معلومات حول عنوان IP محدد؟ استخدم أداة فحص IP المجانية الخاصة بنا للعثور على تفاصيل الموقع ومعلومات الشبكة حول أي عنوان IP عام.",
    "ipcheck.input": "أدخل عنوان IP (مثل 192.168.1.1)",
    "ipcheck.button": "فحص IP",
    "ipcheck.default": "أدخل عنوان IP أعلاه لمشاهدة تفاصيله",
    // Results and tracking info
    "result.tracking.title": "معلومات التتبع الخاصة بك",
    "result.qr.title": "رمز QR",
    "result.qr.scan": "امسح للوصول إلى رابط IPLogger الخاص بك",
    "result.email.title": "معلومات تتبع البريد الإلكتروني الخاصة بك",
    "result.pixel.title": "معاينة بكسل التتبع",
    "result.pixel.copy": "انسخ هذه الصورة الصغيرة غير المرئية في رسائل البريد الإلكتروني الخاصة بك",
    "result.pixel.info": "تتحمل هذه الصورة من خادمنا عند فتح البريد الإلكتروني، مما يرسل لك بيانات التتبع",
    // Technical section
    "technical.title": "المعلومات التقنية",
    "technical.content": "يعمل IPLogger باستخدام تقنيات الويب الشائعة لجمع معلومات الزائر. عندما ينقر شخص ما على رابط التتبع الخاص بك، تلتقط خوادمنا البيانات المتاحة من خلال واجهات برمجة التطبيقات القياسية للمتصفح والتقنيات من جانب الخادم.",
    "technical.server": "جمع IP من جانب الخادم:",
    "technical.browser": "جمع معلومات المتصفح:",
    "technical.conclusion": "تتيح هذه المعلومات لنظامنا إنشاء تقارير مفصلة حول نشاط الزائر، مما يمكنك من تحليل أنماط الحركة وفهم جمهورك بشكل أفضل. يتم تنفيذ جميع عمليات التتبع بشكل مجهول ويتم تخزين البيانات بشكل آمن.",
    // How it works section
    "how.title": "كيف يعمل تتبع IP",
    "how.content": "يعمل نظامنا عن طريق إنشاء رابط إعادة توجيه فريد يمر عبر خوادمنا قبل إرسال الزائر إلى عنوان URL الوجهة. أثناء إعادة التوجيه السريعة هذه، نجمع ونحلل بيانات الزائر بما في ذلك:",
    "how.feature1": "عنوان IP والموقع الجغرافي",
    "how.feature2": "نوع المتصفح والإصدار",
    "how.feature3": "نظام التشغيل والجهاز",
    "how.feature4": "دقة الشاشة واللغة",
    "how.feature5": "مصدر الإحالة",
    "how.button1": "إنشاء رابط التتبع",
    "how.button2": "عرض حالات الاستخدام",
    // Logic section
    "logic.title": "المنطق وراء IPLogger",
    "logic.content": "كما نعلم جميعاً، يمكن للمواقع والتطبيقات الحصول بسهولة على عنوان IP الخاص بالمستخدم. يتم تحقيق ذلك من خلال وسائل بسيطة، حيث يمكن للبرنامج الذي يعمل على الخادم الحصول بسهولة على عنوان IP الخاص بالمستخدم واستخدام وظيفة مبنية مسبقاً. عادة، ستسجل المواقع عناوين IP هذه لمزيد من التحليل. علاوة على ذلك، يمكن لهذه البرامج أيضاً جمع معلومات متصفح المستخدم، بما في ذلك المنطقة الزمنية للمتصفح وإعدادات الوقت. من خلال تحليل إصدار المتصفح، يمكن للمرء أيضاً تحديد نوع جهاز المستخدم، مثل الهاتف المحمول أو الكمبيوتر، إلى جانب معلومات علامة الجهاز التجارية ونظام الإصدار.",
    // Privnote section
    "privnote.title": "خدمة Privnote من MaiPDF",
    "privnote.content": "إنشاء ملاحظات ذاتية التدمير مع Privnote.chat التي يمكن قراءتها مرة واحدة فقط قبل حذفها نهائياً. عندما ينقر المتلقون على الرابط المشترك، لن يروا رسالتك فحسب، بل ستتلقى أيضاً عنوان IP الخاص بهم ومعلومات الموقع.",
    "privnote.feature1": "إنشاء رسائل مشفرة ذاتية التدمير تختفي بعد قراءتها",
    "privnote.feature2": "تتبع متى يتم فتح ملاحظتك ومن قبل من (بما في ذلك عنوان IP)",
    "privnote.feature3": "تعيين أوقات انتهاء صلاحية مخصصة للحذف التلقائي",
    "privnote.feature4": "لا حاجة لحساب - سهل ومجهول الاستخدام",
    "privnote.button": "جرب Privnote الآن",
    // Footer
    "footer.title": "IPLogger",
    "footer.description": "أداة مجانية لتتبع IP وتحليل الروابط لمراقبة نشاط الزائر وجمع معلومات المستخدم.",
    "footer.copyright": "© 2025 IPLogger. جميع الحقوق محفوظة.",
    "footer.features": "الميزات",
    "footer.resources": "الموارد",
    "footer.usecase": "حالات الاستخدام",
    "footer.proscons": "الإيجابيات والسلبيات",
    "footer.guide": "دليل تتبع IP",
    "footer.about": "معلومات عنا",
    "footer.related": "الأدوات ذات الصلة"
  },

  // French
  fr: {
    "nav.create": "Créer un lien",
    "nav.about": "À propos",
    "nav.ipcheck": "Vérificateur IP",
    "nav.howitworks": "Comment ça marche",
    "hero.title": "Suivez chaque clic avec IPLogger",
    "hero.subtitle": "Créez des liens de suivi qui capturent les adresses IP, les données de localisation et les informations sur l'appareil de toute personne qui clique. Parfait pour l'analyse, la sécurité et la surveillance.",
    "hero.form.title": "Créez votre lien de suivi",
    "hero.form.step1": "Entrez l'URL que vous voulez suivre",
    "hero.form.step2": "Générez votre lien de suivi personnalisé",
    "hero.form.step3": "Partagez le lien et surveillez les données des visiteurs",
    "hero.form.input": "Entrez l'URL à suivre",
    "hero.form.button": "Créer un lien de suivi",
    // Tab labels
    "tab.generate": "Générer un lien",
    "tab.email": "Tracker d'ouverture d'email",
    "tab.ip": "Recherche d'adresse IP",
    // Email tracker
    "email.title": "Tracker d'ouverture d'email",
    "email.subtitle": "Créez des images de suivi invisibles pour savoir quand vos emails sont ouverts. Générez des pixels de suivi qui capturent les données du destinataire, y compris l'adresse IP, la localisation et les informations sur l'appareil lorsque les emails sont consultés.",
    "email.slider.label": "Faites glisser le curseur vers la droite pour confirmer que vous êtes humain",
    "email.slider.start": "Commencez ici - Glissez-moi !",
    "email.slider.end": "Terminez ici",
    "email.slider.guide": "Faites glisser le cercle rouge vers la droite",
    "email.slider.progress": "Veuillez faire glisser le curseur complètement vers la droite",
    "email.button": "Générer une image de suivi d'email",
    "email.button.hint": "Complétez la vérification du curseur ci-dessus pour activer",
    "email.how.title": "Comment fonctionne le suivi d'email",
    "email.how.content": "Lorsque vous ajoutez cette petite image à votre email, elle se charge depuis notre serveur chaque fois que l'email est ouvert. Cela vous permet de savoir exactement quand quelqu'un consulte votre message et fournit des informations sur son appareil et sa localisation.",
    // IP checker
    "ipcheck.title": "Vérificateur d'adresse IP",
    "ipcheck.subtitle": "Vous voulez rechercher des informations sur une adresse IP spécifique ? Utilisez notre outil gratuit de vérification IP pour trouver les détails de localisation et les informations réseau sur toute adresse IP publique.",
    "ipcheck.input": "Entrez une adresse IP (ex : 192.168.1.1)",
    "ipcheck.button": "Vérifier l'IP",
    "ipcheck.default": "Entrez une adresse IP ci-dessus pour voir ses détails",
    // Results and tracking info
    "result.tracking.title": "Vos informations de suivi",
    "result.qr.title": "Code QR",
    "result.qr.scan": "Scannez pour accéder à votre lien IPLogger",
    "result.email.title": "Vos informations de suivi d'email",
    "result.pixel.title": "Aperçu du pixel de suivi",
    "result.pixel.copy": "Copiez cette petite image invisible dans vos emails",
    "result.pixel.info": "Cette image se charge depuis notre serveur lorsque l'email est ouvert, vous envoyant les données de suivi",
    // Technical section
    "technical.title": "Informations techniques",
    "technical.content": "IPLogger fonctionne en utilisant des technologies web communes pour collecter des informations sur les visiteurs. Lorsque quelqu'un clique sur votre lien de suivi, nos serveurs capturent les données disponibles via les API de navigateur standard et les technologies côté serveur.",
    "technical.server": "Collecte IP côté serveur :",
    "technical.browser": "Collecte d'informations sur le navigateur :",
    "technical.conclusion": "Ces informations permettent à notre système de générer des rapports détaillés sur l'activité des visiteurs, vous permettant d'analyser les modèles de trafic et de mieux comprendre votre audience. Tout le suivi est effectué de manière anonyme et les données sont stockées en toute sécurité.",
    // How it works section
    "how.title": "Comment fonctionne le suivi IP",
    "how.content": "Notre système fonctionne en créant un lien de redirection unique qui passe par nos serveurs avant d'envoyer le visiteur vers l'URL de destination. Pendant cette redirection rapide, nous collectons et analysons les données du visiteur, notamment :",
    "how.feature1": "Adresse IP et géolocalisation",
    "how.feature2": "Type et version du navigateur",
    "how.feature3": "Système d'exploitation et appareil",
    "how.feature4": "Résolution d'écran et langue",
    "how.feature5": "Source de référence",
    "how.button1": "Créer un lien de suivi",
    "how.button2": "Voir les cas d'usage",
    // Logic section
    "logic.title": "Logique derrière IPLogger",
    "logic.content": "Comme nous le savons tous, les sites web et les applications peuvent facilement obtenir l'adresse IP d'un utilisateur. Ceci est accompli par des moyens simples, où le programme fonctionnant sur le serveur peut sans effort obtenir et utiliser une fonction pré-construite pour obtenir l'adresse IP de l'utilisateur. Typiquement, les sites web enregistreront ces adresses IP pour une analyse plus poussée. De plus, de tels programmes peuvent également collecter les informations du navigateur de l'utilisateur, y compris le fuseau horaire du navigateur et les paramètres de temps. En analysant la version du navigateur, on peut également déterminer le type d'appareil de l'utilisateur, tel qu'un téléphone mobile ou un ordinateur, ainsi que les informations de marque de l'appareil et le système de version OS.",
    // Privnote section
    "privnote.title": "Service Privnote de MaiPDF",
    "privnote.content": "Créez des notes auto-destructrices avec Privnote.chat qui ne peuvent être lues qu'une seule fois avant d'être définitivement supprimées. Lorsque les destinataires cliquent sur votre lien partagé, non seulement ils verront votre message, mais vous recevrez également leur adresse IP et leurs informations de localisation.",
    "privnote.feature1": "Créer des messages chiffrés auto-destructeurs qui disparaissent après lecture",
    "privnote.feature2": "Suivre quand votre note est ouverte et par qui (y compris l'adresse IP)",
    "privnote.feature3": "Définir des délais d'expiration personnalisés pour la suppression automatique",
    "privnote.feature4": "Aucun compte requis - simple et anonyme à utiliser",
    "privnote.button": "Essayer Privnote maintenant",
    // Footer
    "footer.title": "IPLogger",
    "footer.description": "Outil gratuit de suivi IP et d'analyse de liens pour surveiller l'activité des visiteurs et collecter des informations utilisateur.",
    "footer.copyright": "© 2025 IPLogger. Tous droits réservés.",
    "footer.features": "Fonctionnalités",
    "footer.resources": "Ressources",
    "footer.usecase": "Cas d'usage",
    "footer.proscons": "Avantages et inconvénients",
    "footer.guide": "Guide de suivi IP",
    "footer.about": "À propos de nous",
    "footer.related": "Outils associés"
  },

  // German
  de: {
    "nav.create": "Link erstellen",
    "nav.about": "Über uns",
    "nav.ipcheck": "IP-Prüfer",
    "nav.howitworks": "Wie es funktioniert",
    "hero.title": "Verfolge jeden Klick mit IPLogger",
    "hero.subtitle": "Erstelle Tracking-Links, die IP-Adressen, Standortdaten und Geräteinformationen von jedem erfassen, der klickt. Perfekt für Analysen, Sicherheit und Überwachung.",
    "hero.form.title": "Erstelle deinen Tracking-Link",
    "hero.form.step1": "Gib die URL ein, die du verfolgen möchtest",
    "hero.form.step2": "Generiere deinen personalisierten Tracking-Link",
    "hero.form.step3": "Teile den Link und überwache Besucherdaten",
    "hero.form.input": "Zu verfolgende URL eingeben",
    "hero.form.button": "Tracking-Link erstellen",
    // Tab labels
    "tab.generate": "Link generieren",
    "tab.email": "E-Mail-Öffnungs-Tracker",
    "tab.ip": "IP-Adressensuche",
    // Email tracker
    "email.title": "E-Mail-Öffnungs-Tracker",
    "email.subtitle": "Erstelle unsichtbare Tracking-Bilder, um zu wissen, wann deine E-Mails geöffnet werden. Generiere Tracking-Pixel, die Empfängerdaten einschließlich IP-Adresse, Standort und Geräteinformationen erfassen, wenn E-Mails angezeigt werden.",
    "email.slider.label": "Ziehe den Schieberegler nach rechts, um zu bestätigen, dass du ein Mensch bist",
    "email.slider.start": "Hier beginnen - Zieh mich!",
    "email.slider.end": "Hier beenden",
    "email.slider.guide": "Ziehe den roten Kreis nach rechts",
    "email.slider.progress": "Bitte ziehe den Schieberegler ganz nach rechts",
    "email.button": "E-Mail-Tracking-Bild generieren",
    "email.button.hint": "Vervollständige die Schieberegler-Verifizierung oben zum Aktivieren",
    "email.how.title": "Wie E-Mail-Tracking funktioniert",
    "email.how.content": "Wenn du dieses winzige Bild zu deiner E-Mail hinzufügst, lädt es von unserem Server, wann immer die E-Mail geöffnet wird. Das lässt dich genau wissen, wann jemand deine Nachricht ansieht und bietet Informationen über sein Gerät und seinen Standort.",
    // IP checker
    "ipcheck.title": "IP-Adressprüfer",
    "ipcheck.subtitle": "Möchtest du Informationen über eine bestimmte IP-Adresse nachschlagen? Verwende unser kostenloses IP-Prüftool, um Standortdetails und Netzwerkinformationen über jede öffentliche IP-Adresse zu finden.",
    "ipcheck.input": "Gib eine IP-Adresse ein (z.B. 192.168.1.1)",
    "ipcheck.button": "IP prüfen",
    "ipcheck.default": "Gib oben eine IP-Adresse ein, um Details zu sehen",
    // Results and tracking info
    "result.tracking.title": "Deine Tracking-Informationen",
    "result.qr.title": "QR-Code",
    "result.qr.scan": "Scannen, um auf deinen IPLogger-Link zuzugreifen",
    "result.email.title": "Deine E-Mail-Tracking-Informationen",
    "result.pixel.title": "Tracking-Pixel-Vorschau",
    "result.pixel.copy": "Kopiere dieses winzige unsichtbare Bild in deine E-Mails",
    "result.pixel.info": "Dieses Bild lädt von unserem Server, wenn die E-Mail geöffnet wird und sendet dir Tracking-Daten",
    // Technical section
    "technical.title": "Technische Informationen",
    "technical.content": "IPLogger funktioniert durch die Nutzung gängiger Web-Technologien zur Sammlung von Besucherinformationen. Wenn jemand auf deinen Tracking-Link klickt, erfassen unsere Server verfügbare Daten durch Standard-Browser-APIs und serverseitige Technologien.",
    "technical.server": "Serverseitige IP-Sammlung:",
    "technical.browser": "Browser-Informationssammlung:",
    "technical.conclusion": "Diese Informationen ermöglichen es unserem System, detaillierte Berichte über Besucheraktivitäten zu generieren, wodurch du Verkehrsmuster analysieren und deine Zielgruppe besser verstehen kannst. Alle Verfolgung wird anonym durchgeführt und Daten werden sicher gespeichert.",
    // How it works section
    "how.title": "Wie IP-Tracking funktioniert",
    "how.content": "Unser System funktioniert durch die Erstellung eines einzigartigen Weiterleitungslinks, der durch unsere Server läuft, bevor der Besucher zur Ziel-URL gesendet wird. Während dieser schnellen Weiterleitung sammeln und analysieren wir Besucherdaten einschließlich:",
    "how.feature1": "IP-Adresse und Geolokation",
    "how.feature2": "Browser-Typ und -Version",
    "how.feature3": "Betriebssystem und Gerät",
    "how.feature4": "Bildschirmauflösung und Sprache",
    "how.feature5": "Verweis-Quelle",
    "how.button1": "Tracking-Link erstellen",
    "how.button2": "Anwendungsfälle anzeigen",
    // Logic section
    "logic.title": "Logik hinter IPLogger",
    "logic.content": "Wie wir alle wissen, können Websites und Apps leicht die IP-Adresse eines Benutzers erhalten. Dies wird durch einfache Mittel erreicht, wobei das auf dem Server laufende Programm mühelos eine vorgefertigte Funktion erhalten und nutzen kann, um die IP-Adresse des Benutzers zu erhalten. Typischerweise werden Websites diese IP-Adressen für weitere Analysen aufzeichnen. Außerdem können solche Programme auch die Browser-Informationen des Benutzers sammeln, einschließlich der Zeitzone und Zeiteinstellungen des Browsers. Durch die Analyse der Browser-Version kann man auch den Gerätetyp des Benutzers bestimmen, wie ein Mobiltelefon oder Computer, zusammen mit Gerätemarkeninformationen und dem OS-Versionssystem.",
    // Privnote section
    "privnote.title": "MaiPDFs Privnote-Service",
    "privnote.content": "Erstelle selbstzerstörende Notizen mit Privnote.chat, die nur einmal gelesen werden können, bevor sie dauerhaft gelöscht werden. Wenn Empfänger auf deinen geteilten Link klicken, sehen sie nicht nur deine Nachricht, sondern du erhältst auch ihre IP-Adresse und Standortinformationen.",
    "privnote.feature1": "Erstelle verschlüsselte, selbstzerstörende Nachrichten, die nach dem Lesen verschwinden",
    "privnote.feature2": "Verfolge, wann deine Notiz geöffnet wird und von wem (einschließlich IP-Adresse)",
    "privnote.feature3": "Setze benutzerdefinierte Ablaufzeiten für automatische Löschung",
    "privnote.feature4": "Kein Konto erforderlich - einfach und anonym zu verwenden",
    "privnote.button": "Privnote jetzt ausprobieren",
    // Footer
    "footer.title": "IPLogger",
    "footer.description": "Kostenloses IP-Tracking- und Link-Analyse-Tool zur Überwachung von Besucheraktivitäten und zum Sammeln von Nutzerinformationen.",
    "footer.copyright": "© 2025 IPLogger. Alle Rechte vorbehalten.",
    "footer.features": "Funktionen",
    "footer.resources": "Ressourcen",
    "footer.usecase": "Anwendungsfälle",
    "footer.proscons": "Vorteile & Nachteile",
    "footer.guide": "IP-Tracking-Anleitung",
    "footer.about": "Über uns",
    "footer.related": "Verwandte Tools"
  },

  // Japanese
  ja: {
    "nav.create": "リンク作成",
    "nav.about": "概要",
    "nav.ipcheck": "IPチェッカー",
    "nav.howitworks": "使い方",
    "hero.title": "IPLoggerであらゆるクリックを追跡",
    "hero.subtitle": "クリックした人のIPアドレス、位置情報、デバイス情報を取得するトラッキングリンクを作成。分析・セキュリティ・監視に最適です。",
    "hero.form.title": "トラッキングリンクを作成",
    "hero.form.step1": "追跡したいURLを入力",
    "hero.form.step2": "パーソナラライズされたトラッキングリンクを生成",
    "hero.form.step3": "リンクを共有し、訪問者データを監視",
    "hero.form.input": "追跡するURLを入力",
    "hero.form.button": "トラッキングリンク作成",
    // Tab labels
    "tab.generate": "リンク生成",
    "tab.email": "メール開封トラッカー",
    "tab.ip": "IPアドレス検索",
    // Email tracker
    "email.title": "メール開封トラッカー",
    "email.subtitle": "見えないトラッキング画像を作成して、メールがいつ開かれたかを知ることができます。メールが表示される際に、IPアドレス、位置情報、デバイス情報を含む受信者データを取得するトラッキングピクセルを生成します。",
    "email.slider.label": "人間であることを確認するため、スライダーを右に動かしてください",
    "email.slider.start": "ここから開始 - ドラッグしてください！",
    "email.slider.end": "ここで完了",
    "email.slider.guide": "赤い円を右にドラッグしてください",
    "email.slider.progress": "スライダーを最後まで右にドラッグしてください",
    "email.button": "メールトラッキング画像を生成",
    "email.button.hint": "有効にするには上のスライダー認証を完了してください",
    "email.how.title": "メールトラッキングの仕組み",
    "email.how.content": "この小さな画像をメールに追加すると、メールが開かれるたびに当社のサーバーから読み込まれます。これにより、誰かがあなたのメッセージを見た正確な時間がわかり、そのデバイスと位置に関する情報が提供されます。",
    // IP checker
    "ipcheck.title": "IPアドレスチェッカー",
    "ipcheck.subtitle": "特定のIPアドレスについての情報を調べたいですか？無料のIPチェックツールを使用して、任意のパブリックIPアドレスの位置詳細とネットワーク情報を見つけてください。",
    "ipcheck.input": "IPアドレスを入力（例: 192.168.1.1）",
    "ipcheck.button": "IPをチェック",
    "ipcheck.default": "上にIPアドレスを入力して詳細を表示",
    // Results and tracking info
    "result.tracking.title": "あなたのトラッキング情報",
    "result.qr.title": "QRコード",
    "result.qr.scan": "スキャンしてIPLoggerリンクにアクセス",
    "result.email.title": "あなたのメールトラッキング情報",
    "result.pixel.title": "トラッキングピクセルプレビュー",
    "result.pixel.copy": "この小さな見えない画像をメールにコピー",
    "result.pixel.info": "この画像はメールが開かれた時に当社のサーバーから読み込まれ、トラッキングデータを送信します",
    // Technical section
    "technical.title": "技術情報",
    "technical.content": "IPLoggerは一般的なウェブ技術を利用して訪問者情報を収集することで動作します。誰かがあなたのトラッキングリンクをクリックすると、当社のサーバーは標準ブラウザAPIとサーバーサイド技術を通じて利用可能なデータを取得します。",
    "technical.server": "サーバーサイドIP収集:",
    "technical.browser": "ブラウザ情報収集:",
    "technical.conclusion": "この情報により、当社のシステムは訪問者活動に関する詳細なレポートを生成でき、トラフィックパターンを分析し、オーディエンスをより良く理解することができます。すべてのトラッキングは匿名で実行され、データは安全に保存されます。",
    // How it works section
    "how.title": "IPトラッキングの仕組み",
    "how.content": "当社のシステムは、訪問者を目的のURLに送る前に当社のサーバーを通過するユニークなリダイレクトリンクを作成することで動作します。この迅速なリダイレクト中に、以下を含む訪問者データを収集・分析します：",
    "how.feature1": "IPアドレスと地理的位置",
    "how.feature2": "ブラウザタイプとバージョン",
    "how.feature3": "オペレーティングシステムとデバイス",
    "how.feature4": "画面解像度と言語",
    "how.feature5": "参照元ソース",
    "how.button1": "トラッキングリンクを作成",
    "how.button2": "使用例を表示",
    // Logic section
    "logic.title": "IPLoggerの背後にあるロジック",
    "logic.content": "私たち全員が知っているように、ウェブサイトやアプリはユーザーのIPアドレスを簡単に取得できます。これは簡単な手段によって達成され、サーバー上で実行されているプログラムは、ユーザーのIPアドレスを取得するための事前構築された関数を簡単に取得して利用できます。通常、ウェブサイトはさらなる分析のためにこれらのIPアドレスを記録します。さらに、そのようなプログラムはブラウザのタイムゾーンや時間設定を含むユーザーのブラウザ情報も収集できます。ブラウザのバージョンを分析することで、携帯電話やコンピューターなどのユーザーのデバイスタイプ、デバイスブランド情報、OSバージョンシステムも判断できます。",
    // Privnote section
    "privnote.title": "MaiPDFのPrivnoteサービス",
    "privnote.content": "Privnote.chatで自己破壊ノートを作成し、永久に削除される前に一度だけ読むことができます。受信者があなたの共有リンクをクリックすると、メッセージを見るだけでなく、IPアドレスと位置情報も受け取ります。",
    "privnote.feature1": "読み取り後に消える暗号化された自己破壊メッセージを作成",
    "privnote.feature2": "ノートがいつ、誰によって開かれたかを追跡（IPアドレスを含む）",
    "privnote.feature3": "自動削除のためのカスタム有効期限を設定",
    "privnote.feature4": "アカウント不要 - シンプルで匿名使用",
    "privnote.button": "今すぐPrivnoteを試す",
    // Footer
    "footer.title": "IPLogger",
    "footer.description": "訪問者の行動を監視し、ユーザー情報を収集する無料のIPトラッキング＆リンク解析ツール。",
    "footer.copyright": "© 2025 IPLogger. すべての権利は留保されています。",
    "footer.features": "機能",
    "footer.resources": "リソース",
    "footer.usecase": "ユースケース",
    "footer.proscons": "長所と短所",
    "footer.guide": "IPトラッキングガイド",
    "footer.about": "概要",
    "footer.related": "関連ツール"
  },

  // Russian
  ru: {
    "nav.create": "Создать ссылку",
    "nav.about": "О нас",
    "nav.ipcheck": "Проверка IP",
    "nav.howitworks": "Как это работает",
    "hero.title": "Отслеживайте любой клик с помощью IPLogger",
    "hero.subtitle": "Создавайте трекинговые ссылки для сбора IP-адресов, данных о местоположении и устройстве каждого, кто переходит по ссылке. Идеально для аналитики, безопасности и мониторинга.",
    "hero.form.title": "Создайте свою трекинговую ссылку",
    "hero.form.step1": "Введите URL для отслеживания",
    "hero.form.step2": "Сгенерируйте персональную трекинговую ссылку",
    "hero.form.step3": "Поделитесь ссылкой и отслеживайте данные посетителей",
    "hero.form.input": "Введите URL для отслеживания",
    "hero.form.button": "Создать трекинговую ссылку",
    // Tab labels
    "tab.generate": "Создать ссылку",
    "tab.email": "Трекер открытия писем",
    "tab.ip": "Поиск IP-адреса",
    // Email tracker
    "email.title": "Трекер открытия писем",
    "email.subtitle": "Создавайте невидимые изображения для отслеживания, чтобы знать, когда ваши письма открываются. Генерируйте пиксели отслеживания, которые захватывают данные получателя, включая IP-адрес, местоположение и информацию об устройстве при просмотре писем.",
    "email.slider.label": "Перетащите ползунок вправо, чтобы подтвердить, что вы человек",
    "email.slider.start": "Начните здесь - Перетащите меня!",
    "email.slider.end": "Завершите здесь",
    "email.slider.guide": "Перетащите красный круг вправо",
    "email.slider.progress": "Пожалуйста, перетащите ползунок до конца вправо",
    "email.button": "Создать изображение для отслеживания писем",
    "email.button.hint": "Завершите проверку ползунка выше для активации",
    "email.how.title": "Как работает отслеживание писем",
    "email.how.content": "Когда вы добавляете это крошечное изображение в свое письмо, оно загружается с нашего сервера каждый раз при открытии письма. Это позволяет точно знать, когда кто-то просматривает ваше сообщение, и предоставляет информацию об их устройстве и местоположении.",
    // IP checker
    "ipcheck.title": "Проверка IP-адреса",
    "ipcheck.subtitle": "Хотите найти информацию о конкретном IP-адресе? Используйте наш бесплатный инструмент проверки IP, чтобы найти детали местоположения и сетевую информацию о любом публичном IP-адресе.",
    "ipcheck.input": "Введите IP-адрес (например, 192.168.1.1)",
    "ipcheck.button": "Проверить IP",
    "ipcheck.default": "Введите IP-адрес выше, чтобы увидеть детали",
    // Results and tracking info
    "result.tracking.title": "Ваша информация отслеживания",
    "result.qr.title": "QR-код",
    "result.qr.scan": "Сканируйте для доступа к вашей ссылке IPLogger",
    "result.email.title": "Ваша информация отслеживания писем",
    "result.pixel.title": "Предварительный просмотр пикселя отслеживания",
    "result.pixel.copy": "Скопируйте это крошечное невидимое изображение в ваши письма",
    "result.pixel.info": "Это изображение загружается с нашего сервера при открытии письма, отправляя вам данные отслеживания",
    // Technical section
    "technical.title": "Техническая информация",
    "technical.content": "IPLogger работает, используя общие веб-технологии для сбора информации о посетителях. Когда кто-то кликает по вашей трекинговой ссылке, наши серверы захватывают доступные данные через стандартные API браузера и серверные технологии.",
    "technical.server": "Серверный сбор IP:",
    "technical.browser": "Сбор информации о браузере:",
    "technical.conclusion": "Эта информация позволяет нашей системе генерировать подробные отчеты о активности посетителей, давая возможность анализировать паттерны трафика и лучше понимать вашу аудиторию. Все отслеживание выполняется анонимно, и данные хранятся безопасно.",
    // How it works section
    "how.title": "Как работает отслеживание IP",
    "how.content": "Наша система работает, создавая уникальную ссылку переадресации, которая проходит через наши серверы перед отправкой посетителя на целевой URL. Во время этой быстрой переадресации мы собираем и анализируем данные посетителя, включая:",
    "how.feature1": "IP-адрес и геолокация",
    "how.feature2": "Тип и версия браузера",
    "how.feature3": "Операционная система и устройство",
    "how.feature4": "Разрешение экрана и язык",
    "how.feature5": "Источник перехода",
    "how.button1": "Создать трекинговую ссылку",
    "how.button2": "Посмотреть примеры использования",
    // Logic section
    "logic.title": "Логика IPLogger",
    "logic.content": "Как мы все знаем, веб-сайты и приложения могут легко получить IP-адрес пользователя. Это достигается простыми средствами, где программа, работающая на сервере, может без усилий получить и использовать предварительно созданную функцию для получения IP-адреса пользователя. Обычно веб-сайты записывают эти IP-адреса для дальнейшего анализа. Кроме того, такие программы также могут собирать информацию о браузере пользователя, включая часовой пояс браузера и настройки времени. Анализируя версию браузера, можно также определить тип устройства пользователя, такой как мобильный телефон или компьютер, вместе с информацией о бренде устройства и системе версии ОС.",
    // Privnote section
    "privnote.title": "Сервис Privnote от MaiPDF",
    "privnote.content": "Создавайте самоуничтожающиеся заметки с Privnote.chat, которые можно прочитать только один раз перед окончательным удалением. Когда получатели кликают по вашей общей ссылке, они не только увидят ваше сообщение, но вы также получите их IP-адрес и информацию о местоположении.",
    "privnote.feature1": "Создавать зашифрованные самоуничтожающиеся сообщения, которые исчезают после прочтения",
    "privnote.feature2": "Отслеживать, когда ваша заметка открыта и кем (включая IP-адрес)",
    "privnote.feature3": "Устанавливать пользовательские времена истечения для автоматического удаления",
    "privnote.feature4": "Аккаунт не требуется - просто и анонимно в использовании",
    "privnote.button": "Попробовать Privnote сейчас",
    // Footer
    "footer.title": "IPLogger",
    "footer.description": "Бесплатный инструмент для отслеживания IP и анализа ссылок для мониторинга активности посетителей и сбора информации о пользователях.",
    "footer.copyright": "© 2025 IPLogger. Все права защищены.",
    "footer.features": "Функции",
    "footer.resources": "Ресурсы",
    "footer.usecase": "Примеры использования",
    "footer.proscons": "Плюсы и минусы",
    "footer.guide": "Руководство по отслеживанию IP",
    "footer.about": "О нас",
    "footer.related": "Похожие инструменты"
  },

  // Portuguese
  pt: {
    "nav.create": "Criar Link",
    "nav.about": "Sobre",
    "nav.ipcheck": "Verificador de IP",
    "nav.howitworks": "Como Funciona",
    "hero.title": "Rastreie qualquer clique com o IPLogger",
    "hero.subtitle": "Crie links de rastreamento que capturam endereços IP, localização e informações do dispositivo de quem clicar. Perfeito para análise, segurança e monitoramento.",
    "hero.form.title": "Crie seu Link de Rastreamento",
    "hero.form.step1": "Digite a URL que deseja rastrear",
    "hero.form.step2": "Gere seu link de rastreamento personalizado",
    "hero.form.step3": "Compartilhe o link e monitore os dados dos visitantes",
    "hero.form.input": "Digite a URL para rastrear",
    "hero.form.button": "Criar Link de Rastreamento",
    // Tab labels
    "tab.generate": "Gerar Link",
    "tab.email": "Rastreador de Abertura de Email",
    "tab.ip": "Pesquisa de Endereço IP",
    // Email tracker
    "email.title": "Rastreador de Abertura de Email",
    "email.subtitle": "Crie imagens de rastreamento invisíveis para saber quando seus emails são abertos. Gere pixels de rastreamento que capturam dados do destinatário, incluindo endereço IP, localização e informações do dispositivo quando os emails são visualizados.",
    "email.slider.label": "Arraste o controle deslizante para a direita para confirmar que você é humano",
    "email.slider.start": "Comece aqui - Arraste-me!",
    "email.slider.end": "Complete aqui",
    "email.slider.guide": "Arraste o círculo vermelho para a direita",
    "email.slider.progress": "Por favor, arraste o controle deslizante todo o caminho para a direita",
    "email.button": "Gerar Imagem de Rastreamento de Email",
    "email.button.hint": "Complete a verificação do controle deslizante acima para habilitar",
    "email.how.title": "Como Funciona o Rastreamento de Email",
    "email.how.content": "Quando você adiciona esta pequena imagem ao seu email, ela carrega do nosso servidor sempre que o email é aberto. Isso permite saber exatamente quando alguém visualiza sua mensagem e fornece informações sobre o dispositivo e localização.",
    // IP checker
    "ipcheck.title": "Verificador de Endereço IP",
    "ipcheck.subtitle": "Quer procurar informações sobre um endereço IP específico? Use nossa ferramenta gratuita de verificação de IP para encontrar detalhes de localização e informações de rede sobre qualquer endereço IP público.",
    "ipcheck.input": "Digite um endereço IP (ex: 192.168.1.1)",
    "ipcheck.button": "Verificar IP",
    "ipcheck.default": "Digite um endereço IP acima para ver os detalhes",
    // Results and tracking info
    "result.tracking.title": "Suas Informações de Rastreamento",
    "result.qr.title": "Código QR",
    "result.qr.scan": "Escaneie para acessar seu Link IPLogger",
    "result.email.title": "Suas Informações de Rastreamento de Email",
    "result.pixel.title": "Visualização do Pixel de Rastreamento",
    "result.pixel.copy": "Copie esta pequena imagem invisível para seus emails",
    "result.pixel.info": "Esta imagem carrega do nosso servidor quando o email é aberto, enviando dados de rastreamento",
    // Technical section
    "technical.title": "Informações Técnicas",
    "technical.content": "O IPLogger funciona utilizando tecnologias web comuns para coletar informações do visitante. Quando alguém clica no seu link de rastreamento, nossos servidores capturam dados disponíveis através de APIs padrão do navegador e tecnologias do lado do servidor.",
    "technical.server": "Coleta de IP do lado do servidor:",
    "technical.browser": "Coleta de informações do navegador:",
    "technical.conclusion": "Essas informações permitem que nosso sistema gere relatórios detalhados sobre a atividade do visitante, permitindo analisar padrões de tráfego e entender melhor sua audiência. Todo rastreamento é realizado anonimamente e os dados são armazenados com segurança.",
    // How it works section
    "how.title": "Como Funciona o Rastreamento de IP",
    "how.content": "Nosso sistema funciona criando um link de redirecionamento único que passa pelos nossos servidores antes de enviar o visitante para a URL de destino. Durante este redirecionamento rápido, coletamos e analisamos dados do visitante incluindo:",
    "how.feature1": "Endereço IP e geolocalização",
    "how.feature2": "Tipo e versão do navegador",
    "how.feature3": "Sistema operacional e dispositivo",
    "how.feature4": "Resolução da tela e idioma",
    "how.feature5": "Fonte de referência",
    "how.button1": "Criar Link de Rastreamento",
    "how.button2": "Ver Casos de Uso",
    // Logic section
    "logic.title": "Lógica por Trás do IPLogger",
    "logic.content": "Como todos sabemos, websites e aplicativos podem facilmente obter o endereço IP de um usuário. Isso é alcançado através de meios simples, onde o programa rodando no servidor pode sem esforço obter e utilizar uma função pré-construída para obter o endereço IP do usuário. Tipicamente, websites registrarão esses endereços IP para análise adicional. Além disso, tais programas também podem coletar informações do navegador do usuário, incluindo o fuso horário do navegador e configurações de tempo. Ao analisar a versão do navegador, também se pode determinar o tipo de dispositivo do usuário, como um celular ou computador, junto com informações da marca do dispositivo e sistema de versão do SO.",
    // Privnote section
    "privnote.title": "Serviço Privnote da MaiPDF",
    "privnote.content": "Crie notas autodestrutivas com Privnote.chat que só podem ser lidas uma vez antes de serem permanentemente deletadas. Quando os destinatários clicam no seu link compartilhado, não apenas verão sua mensagem, mas você também receberá o endereço IP e informações de localização deles.",
    "privnote.feature1": "Criar mensagens criptografadas autodestrutivas que desaparecem após serem lidas",
    "privnote.feature2": "Rastrear quando sua nota é aberta e por quem (incluindo endereço IP)",
    "privnote.feature3": "Definir tempos de expiração personalizados para exclusão automática",
    "privnote.feature4": "Nenhuma conta necessária - simples e anônimo de usar",
    "privnote.button": "Experimentar Privnote Agora",
    // Footer
    "footer.title": "IPLogger",
    "footer.description": "Ferramenta gratuita de rastreamento de IP e análise de links para monitorar a atividade dos visitantes e coletar informações dos usuários.",
    "footer.copyright": "© 2025 IPLogger. Todos os direitos reservados.",
    "footer.features": "Recursos",
    "footer.resources": "Recursos",
    "footer.usecase": "Casos de Uso",
    "footer.proscons": "Prós e Contras",
    "footer.guide": "Guia de Rastreamento de IP",
    "footer.about": "Sobre Nós",
    "footer.related": "Ferramentas Relacionadas"
  }
};

// Initialize the translation system
document.addEventListener('DOMContentLoaded', function() {
  // Set up language switcher
  const languageLinks = document.querySelectorAll('.language-dropdown .dropdown-item');
  languageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
  
  // Auto-detect browser language or use saved preference
  const savedLang = localStorage.getItem('iplogger-language');
  if (savedLang && translations[savedLang]) {
    changeLanguage(savedLang);
  } else {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.split('-')[0];
    
    // Check if we support this language
    if (translations[shortLang]) {
      changeLanguage(shortLang);
    } else {
      // Default to English
      changeLanguage('en');
    }
  }
});

// Helper: fallback for unsupported languages
function getSupportedLang(lang) {
  if (translations[lang]) return lang;
  return "en";
}

// Patch: update language badge and dropdown for unsupported languages
function updateLangDropdownState(lang) {
  const supportedLang = getSupportedLang(lang);
  const languageLinks = document.querySelectorAll('.language-dropdown .dropdown-item');
  languageLinks.forEach(link => {
    if (link.getAttribute('data-lang') === lang) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  const currentLangBadge = document.getElementById('current-lang');
  if (currentLangBadge) {
    currentLangBadge.textContent = lang.toUpperCase();
  }
}

// Patch: warn if translation is missing
function safeGetTranslation(lang, key) {
  if (translations[lang] && translations[lang][key]) return translations[lang][key];
  if (translations['en'] && translations['en'][key]) return translations['en'][key];
  console.warn(`Missing translation for key '${key}' in language '${lang}'`);
  return key;
}

// Main translation function
function changeLanguage(lang) {
  document.body.classList.add('translating');
  const supportedLang = getSupportedLang(lang);
  
  // RTL support
  if (supportedLang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    const rtlStylesheet = document.getElementById('rtl-stylesheet');
    if (rtlStylesheet) rtlStylesheet.disabled = false;
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    const rtlStylesheet = document.getElementById('rtl-stylesheet');
    if (rtlStylesheet) rtlStylesheet.disabled = true;
  }
  
  updateLangDropdownState(lang);
  
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = safeGetTranslation(supportedLang, key);
  });
  
  // Update all data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', safeGetTranslation(supportedLang, key));
  });
  
  // Update tab labels
  updateTabLabels(supportedLang);
  
  // Update form elements
  updateFormElements(supportedLang);
  
  // Update section-specific content
  updateEmailSection(supportedLang);
  updateIPSection(supportedLang);
  updateTechnicalSection(supportedLang);
  updateHowItWorksSection(supportedLang);
  updateLogicSection(supportedLang);
  updatePrivnoteSection(supportedLang);
  
  localStorage.setItem('iplogger-language', lang);
  setTimeout(() => { document.body.classList.remove('translating'); }, 300);
}

// Update tab labels
function updateTabLabels(lang) {
  const tabGenerate = document.querySelector('#tab-generate span');
  const tabEmail = document.querySelector('#tab-email span');
  const tabIP = document.querySelector('#tab-ip span');
  
  if (tabGenerate) tabGenerate.textContent = safeGetTranslation(lang, 'tab.generate');
  if (tabEmail) tabEmail.textContent = safeGetTranslation(lang, 'tab.email');
  if (tabIP) tabIP.textContent = safeGetTranslation(lang, 'tab.ip');
}

// Update form elements
function updateFormElements(lang) {
  // URL input placeholder (handled by data-i18n-placeholder now)
  // URL button (handled by data-i18n now)
  // IP input placeholder (handled by data-i18n-placeholder now)
  // IP button (handled by data-i18n now)
  
  // Update button text that gets overridden by JavaScript
  const urlbutton = document.getElementById('urlbutton');
  if (urlbutton && urlbutton.textContent.includes('Create')) {
    urlbutton.textContent = safeGetTranslation(lang, 'hero.form.button');
  }
  
  const findanipbutton = document.getElementById('findanipbutton');
  if (findanipbutton && findanipbutton.textContent.includes('Check')) {
    findanipbutton.textContent = safeGetTranslation(lang, 'ipcheck.button');
  }
}

// Update email section
function updateEmailSection(lang) {
  // Most content is now handled by data-i18n attributes
  // Only update dynamic content that gets overridden by JavaScript
  
  const emailBtn = document.getElementById('emailGenerateBtn');
  if (emailBtn && !emailBtn.disabled) {
    emailBtn.innerHTML = `<i class="fas fa-magic me-2"></i>${safeGetTranslation(lang, 'email.button')}`;
  }
  
  // Update slider progress text (gets overridden by updateSliderProgress)
  const rangeValue = document.getElementById('rangeValue2');
  if (rangeValue && rangeValue.textContent.includes('Please drag')) {
    rangeValue.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${safeGetTranslation(lang, 'email.slider.progress')}`;
  }
  
  // Update button hint (gets overridden by JavaScript)
  const buttonHint = document.getElementById('buttonHint');
  if (buttonHint && buttonHint.textContent.includes('Complete')) {
    buttonHint.innerHTML = `<i class="fas fa-info-circle me-1"></i>${safeGetTranslation(lang, 'email.button.hint')}`;
  }
}

// Update IP section
function updateIPSection(lang) {
  // Most content is now handled by data-i18n attributes
  // Update dynamic content that gets reset by JavaScript
  const ipDefault = document.getElementById('ipbackinfo');
  if (ipDefault && ipDefault.textContent.includes('Enter an IP address')) {
    ipDefault.textContent = safeGetTranslation(lang, 'ipcheck.default');
  }
}

// Update technical section
function updateTechnicalSection(lang) {
  const techTitle = document.querySelector('#technical h2');
  if (techTitle) techTitle.textContent = safeGetTranslation(lang, 'technical.title');
  
  const techContent = document.querySelector('#technical .lead');
  if (techContent) techContent.textContent = safeGetTranslation(lang, 'technical.content');
}

// Update how it works section
function updateHowItWorksSection(lang) {
  const howTitle = document.querySelector('#how-it-works h2');
  if (howTitle) howTitle.textContent = safeGetTranslation(lang, 'how.title');
  
  const howContent = document.querySelector('#how-it-works .lead');
  if (howContent) howContent.textContent = safeGetTranslation(lang, 'how.content');
  
  // Update buttons
  const buttons = document.querySelectorAll('#how-it-works button');
  if (buttons.length >= 2) {
    buttons[0].textContent = safeGetTranslation(lang, 'how.button1');
    buttons[1].textContent = safeGetTranslation(lang, 'how.button2');
  }
}

// Update logic section
function updateLogicSection(lang) {
  const logicTitle = document.querySelector('.bg-dark .display-5');
  if (logicTitle) logicTitle.textContent = safeGetTranslation(lang, 'logic.title');
}

// Update privnote section
function updatePrivnoteSection(lang) {
  const privnoteTitle = document.querySelector('#privnote h2');
  if (privnoteTitle) privnoteTitle.textContent = safeGetTranslation(lang, 'privnote.title');
  
  const privnoteContent = document.querySelector('#privnote .lead');
  if (privnoteContent) privnoteContent.textContent = safeGetTranslation(lang, 'privnote.content');
  
  const privnoteButton = document.querySelector('#privnote .btn');
  if (privnoteButton) privnoteButton.textContent = safeGetTranslation(lang, 'privnote.button');
}

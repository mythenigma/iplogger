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
    "hero.form.input": "أدخل عنوان URL للتتبع",
    "hero.form.button": "إنشاء رابط التتبع",
    "tab.generate": "إنشاء رابط",
    "tab.email": "متتبع فتح البريد الإلكتروني",
    "tab.ip": "البحث عن عنوان IP",
    "email.title": "متتبع فتح البريد الإلكتروني",
    "email.slider.label": "اسحب المنزلق إلى اليمين لتأكيد أنك إنسان",
    "email.slider.start": "ابدأ هنا - اسحبني!",
    "email.slider.end": "أكمل هنا",
    "email.button": "إنشاء صورة تتبع البريد الإلكتروني",
    "ipcheck.title": "فاحص عنوان IP",
    "ipcheck.input": "أدخل عنوان IP (مثل 192.168.1.1)",
    "ipcheck.button": "فحص IP",
    "ipcheck.default": "أدخل عنوان IP أعلاه لمشاهدة تفاصيله",
    "technical.title": "المعلومات التقنية",
    "how.title": "كيف يعمل تتبع IP",
    "logic.title": "المنطق وراء IPLogger",
    "privnote.title": "خدمة Privnote من MaiPDF",
    "footer.title": "IPLogger",
    "footer.description": "أداة مجانية لتتبع IP وتحليل الروابط لمراقبة نشاط الزائر وجمع معلومات المستخدم.",
    "footer.copyright": "© 2025 IPLogger. جميع الحقوق محفوظة."
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

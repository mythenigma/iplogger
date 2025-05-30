// IPLogger Translation System
// This file contains all the translation functionality for the IPLogger website

// Translation data for all supported languages
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
    "ipcheck.title": "IP Address Checker",
    "ipcheck.input": "Enter an IP address (e.g., 192.168.1.1)",
    "ipcheck.button": "Check IP",
    "ipcheck.default": "Enter an IP address above to see its details",
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
    "hero.form.title": "Crea Tu Enlace de Seguimiento",
    "hero.form.step1": "Ingresa la URL que deseas rastrear",
    "hero.form.step2": "Genera tu enlace de seguimiento personalizado",
    "hero.form.step3": "Comparte el enlace y monitorea los datos de los visitantes",
    "hero.form.input": "Ingresa la URL a rastrear",
    "hero.form.button": "Crear Enlace de Seguimiento",
    "ipcheck.title": "Verificador de Direcciones IP",
    "ipcheck.input": "Ingresa una dirección IP (ej., 192.168.1.1)",
    "ipcheck.button": "Verificar IP",
    "ipcheck.default": "Ingresa una dirección IP arriba para ver sus detalles",
    "footer.title": "IPLogger",
    "footer.description": "Herramienta gratuita de seguimiento de IP y análisis de enlaces para monitorear la actividad de visitantes y recopilar información de usuarios.",
    "footer.copyright": "© 2025 IPLogger. Todos los derechos reservados.",
    "footer.features": "Funciones",
    "footer.resources": "Recursos",
    "footer.usecase": "Casos de Uso",
    "footer.proscons": "Pros y Contras",
    "footer.guide": "Guía de Rastreo IP",
    "footer.about": "Sobre Nosotros",
    "footer.related": "Herramientas Relacionadas"
  },
  
  // Chinese
  zh: {
    "nav.create": "创建链接",
    "nav.about": "关于我们",
    "nav.ipcheck": "IP查询",
    "nav.howitworks": "工作原理",
    "hero.title": "使用IPLogger跟踪任何点击",
    "hero.subtitle": "创建跟踪链接，捕获任何点击者的IP地址、位置数据和设备信息。完美用于分析、安全和监控。",
    "hero.form.title": "创建您的跟踪链接",
    "hero.form.step1": "输入您想要跟踪的URL",
    "hero.form.step2": "生成您的个性化跟踪链接",
    "hero.form.step3": "分享链接并监控访问者数据",
    "hero.form.input": "输入要跟踪的URL",
    "hero.form.button": "创建跟踪链接",
    "ipcheck.title": "IP地址查询",
    "ipcheck.input": "输入IP地址（例如，192.168.1.1）",
    "ipcheck.button": "查询IP",
    "ipcheck.default": "在上方输入IP地址以查看详情",
    "footer.title": "IPLogger",
    "footer.description": "免费IP跟踪和链接分析工具，用于监控访问者活动和收集用户信息。",
    "footer.copyright": "© 2025 IPLogger。保留所有权利。",
    "footer.features": "功能",
    "footer.resources": "资源",
    "footer.usecase": "使用案例",
    "footer.proscons": "优缺点",
    "footer.guide": "IP跟踪指南",
    "footer.about": "关于我们",
    "footer.related": "相关工具"
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
    "ipcheck.title": "فاحص عنوان IP",
    "ipcheck.input": "أدخل عنوان IP (مثل 192.168.1.1)",
    "ipcheck.button": "فحص IP",
    "ipcheck.default": "أدخل عنوان IP أعلاه لمشاهدة تفاصيله",
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
    "ipcheck.title": "IP-Adressprüfer",
    "ipcheck.input": "Gib eine IP-Adresse ein (z.B. 192.168.1.1)",
    "ipcheck.button": "IP prüfen",
    "ipcheck.default": "Gib oben eine IP-Adresse ein, um Details zu sehen",
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
    "ipcheck.title": "IPアドレスチェッカー",
    "ipcheck.input": "IPアドレスを入力（例: 192.168.1.1）",
    "ipcheck.button": "IPをチェック",
    "ipcheck.default": "上にIPアドレスを入力して詳細を表示",
    "footer.title": "IPLogger",
    "footer.description": "訪問者の行動を監視し、ユーザー情報を収集する無料のIPトラッキング＆リンク解析ツール。",
    "footer.copyright": "© 2025 IPLogger. All rights reserved.",
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
    "ipcheck.title": "Проверка IP-адреса",
    "ipcheck.input": "Введите IP-адрес (например, 192.168.1.1)",
    "ipcheck.button": "Проверить IP",
    "ipcheck.default": "Введите IP-адрес выше, чтобы увидеть детали",
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
    "ipcheck.title": "Verificador de Endereço IP",
    "ipcheck.input": "Digite um endereço IP (ex: 192.168.1.1)",
    "ipcheck.button": "Verificar IP",
    "ipcheck.default": "Digite um endereço IP acima para ver os detalhes",
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
  },
};

// Helper: fallback for unsupported languages
function getSupportedLang(lang) {
  if (translations[lang]) return lang;
  // Fallback for dropdown languages not in translations
  if (["de","ja","ru","pt"].includes(lang)) return "en";
  return "en";
}

// Patch: update language badge and dropdown for unsupported languages
function updateLangDropdownState(lang) {
  const supportedLang = getSupportedLang(lang);
  const languageLinks = document.querySelectorAll('.language-dropdown .dropdown-item');
  languageLinks.forEach(link => {
    if (link.getAttribute('data-lang') === lang) {
      link.classList.add('active');
    } else if (link.getAttribute('data-lang') === supportedLang) {
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

// Patch: update changeLanguage to use fallback and helpers
function changeLanguage(lang) {
  document.body.classList.add('translating');
  const supportedLang = getSupportedLang(lang);
  // RTL
  if (supportedLang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.getElementById('rtl-stylesheet').disabled = false;
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.getElementById('rtl-stylesheet').disabled = true;
  }
  updateLangDropdownState(lang);
  // Update all data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = safeGetTranslation(supportedLang, key);
  });
  // Placeholders/buttons
  const shorturl = document.getElementById('shorturl');
  if (shorturl) shorturl.setAttribute('placeholder', safeGetTranslation(supportedLang, 'hero.form.input'));
  const findanip = document.getElementById('findanip');
  if (findanip) findanip.setAttribute('placeholder', safeGetTranslation(supportedLang, 'ipcheck.input'));
  const urlbutton = document.getElementById('urlbutton');
  if (urlbutton) urlbutton.textContent = safeGetTranslation(supportedLang, 'hero.form.button');
  const findanipbutton = document.getElementById('findanipbutton');
  if (findanipbutton) findanipbutton.textContent = safeGetTranslation(supportedLang, 'ipcheck.button');
  // Section-specific updates
  updateAdditionalSectionHeadings(supportedLang);
  updateEmailSectionTexts(supportedLang);
  updateDynamicContent(supportedLang);
  localStorage.setItem('iplogger-language', lang);
  setTimeout(() => { document.body.classList.remove('translating'); }, 300);
}

// Update headings and texts for sections that don't have data-i18n attributes
function updateAdditionalSectionHeadings(lang) {
  const keys = translations[lang];
  if (!keys) return;
  
  // Email tracker section
  const emailSection = document.querySelector('#email');
  if (emailSection) {
    const emailTitle = emailSection.querySelector('h2');
    if (emailTitle && keys['email.title']) {
      emailTitle.innerHTML = `<i class="fas fa-envelope me-2"></i>${keys['email.title']}`;
    }
    
    const emailSubtitle = emailSection.querySelector('p.lead');
    if (emailSubtitle && keys['email.subtitle']) {
      emailSubtitle.textContent = keys['email.subtitle'];
    }
    
    const emailLearnLink = emailSection.querySelector('p.small a');
    if (emailLearnLink && keys['email.learn']) {
      const icon = emailLearnLink.querySelector('i').outerHTML;
      emailLearnLink.innerHTML = icon + keys['email.learn'];
    }
  }
  
  // About section
  const aboutSection = document.querySelector('#about');
  if (aboutSection) {
    const aboutTitle = aboutSection.querySelector('h2');
    if (aboutTitle && keys['about.title']) {
      aboutTitle.textContent = keys['about.title'];
    }
    
    const aboutContent = aboutSection.querySelector('p.lead');
    if (aboutContent && keys['about.content']) {
      aboutContent.textContent = keys['about.content'];
    }
    
    const featureCards = aboutSection.querySelectorAll('.feature-card');
    if (featureCards.length >= 3) {
      if (keys['about.feature1.title']) {
        featureCards[0].querySelector('h3').textContent = keys['about.feature1.title'];
      }
      if (keys['about.feature1.content']) {
        featureCards[0].querySelector('p').textContent = keys['about.feature1.content'];
      }
      
      if (keys['about.feature2.title']) {
        featureCards[1].querySelector('h3').textContent = keys['about.feature2.title'];
      }
      if (keys['about.feature2.content']) {
        featureCards[1].querySelector('p').textContent = keys['about.feature2.content'];
      }
      
      if (keys['about.feature3.title']) {
        featureCards[2].querySelector('h3').textContent = keys['about.feature3.title'];
      }
      if (keys['about.feature3.content']) {
        featureCards[2].querySelector('p').textContent = keys['about.feature3.content'];
      }
    }
  }
  
  // Privnote section
  const privnoteSection = document.querySelector('#privnote');
  if (privnoteSection) {
    const privnoteTitle = privnoteSection.querySelector('h2');
    if (privnoteTitle && keys['privnote.title']) {
      privnoteTitle.textContent = keys['privnote.title'];
    }
    
    const privnoteContent = privnoteSection.querySelector('p.lead');
    if (privnoteContent && keys['privnote.content']) {
      privnoteContent.textContent = keys['privnote.content'];
    }
    
    const privnoteListItems = privnoteSection.querySelectorAll('ul li');
    if (privnoteListItems.length >= 4) {
      if (keys['privnote.feature1']) privnoteListItems[0].textContent = keys['privnote.feature1'];
      if (keys['privnote.feature2']) privnoteListItems[1].textContent = keys['privnote.feature2'];
      if (keys['privnote.feature3']) privnoteListItems[2].textContent = keys['privnote.feature3'];
      if (keys['privnote.feature4']) privnoteListItems[3].textContent = keys['privnote.feature4'];
    }
    
    const privnoteButton = privnoteSection.querySelector('.btn-primary');
    if (privnoteButton && keys['privnote.button']) {
      privnoteButton.textContent = keys['privnote.button'];
    }
  }
  
  // How it works section
  const howSection = document.querySelector('#how-it-works');
  if (howSection) {
    const howTitle = howSection.querySelector('h2');
    if (howTitle && keys['how.title']) {
      howTitle.textContent = keys['how.title'];
    }
    
    const howContent = howSection.querySelector('p.lead');
    if (howContent && keys['how.content']) {
      howContent.textContent = keys['how.content'];
    }
    
    const howListItems = howSection.querySelectorAll('ul.lead li');
    if (howListItems.length >= 5) {
      if (keys['how.feature1']) howListItems[0].textContent = keys['how.feature1'];
      if (keys['how.feature2']) howListItems[1].textContent = keys['how.feature2'];
      if (keys['how.feature3']) howListItems[2].textContent = keys['how.feature3'];
      if (keys['how.feature4']) howListItems[3].textContent = keys['how.feature4'];
      if (keys['how.feature5']) howListItems[4].textContent = keys['how.feature5'];
    }
  }
}

// Update email tracking section texts
function updateEmailSectionTexts(lang) {
  const keys = translations[lang];
  if (!keys) return;
  
  // Email tracking result explanation
  const resultExplanation = document.querySelector('#resultExplanation');
  if (resultExplanation && keys['email.result.explanation']) {
    resultExplanation.textContent = keys['email.result.explanation'];
  }
}

// Update dynamic content (any content that might be loaded after page load)
function updateDynamicContent(lang) {
  const keys = translations[lang];
  if (!keys) return;
  
  // Update any dynamically generated content here
  // This will depend on your specific implementation
}

// Initialize the translation system when DOM is fully loaded
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

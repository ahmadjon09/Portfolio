import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Globe,
  Github,
  Mail,
  Send,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Terminal,
  Layers,
  Rocket,
  Smartphone,
  Zap,
  Braces,
  Paintbrush,
  Lightbulb,
  ArrowUpRight,
  MousePointer2,
  ScanSearch,
  FolderKanban,
  Sun,
  Moon,
  Monitor,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import react from './assets/react.svg';

const SEO = {
  en: {
    title: 'Ahmadjon Mahmudov - Full-Stack Developer | React, Node.js, MongoDB',
    description: 'Full-stack developer specializing in React + Vite, Node.js, REST API, and MongoDB. Building modern web applications, admin panels, and backend systems.',
    keywords: 'full-stack developer, react developer, node.js developer, mongodb, web development, uzbekistan developer',
  },
  uz: {
    title: 'Ahmadjon Mahmudov - Full-Stack Dasturchi | React, Node.js, MongoDB',
    description: 'React + Vite, Node.js, REST API va MongoDB ga ixtisoslashgan full-stack dasturchi. Zamonaviy web ilovalar, admin panellar va backend tizimlar yaratish.',
    keywords: 'full-stack dasturchi, react dasturchi, node.js dasturchi, mongodb, web dasturlash, oʻzbekiston dasturchi',
  },
  ru: {
    title: 'Ahmadjon Mahmudov - Full-Stack Разработчик | React, Node.js, MongoDB',
    description: 'Full-stack разработчик специализирующийся на React + Vite, Node.js, REST API и MongoDB. Создание современных веб-приложений, админ-панелей и backend систем.',
    keywords: 'full-stack разработчик, react разработчик, node.js разработчик, mongodb, веб-разработка, узбекистан разработчик',
  },
};

const STORAGE_KEYS = {
  lang: 'portfolio_lang',
  theme: 'portfolio_theme',
};

const LANGS = ['en', 'uz', 'ru'];
const THEMES = ['dark', 'light', 'system'];

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';

const CONTACT = {
  github: {
    label: 'GitHub',
    value: 'github.com/ahmadjon09',
    href: 'https://github.com/ahmadjon09',
  },
  email: {
    label: 'Email',
    value: 'maxmudov8883@gmail.com',
    href: 'mailto:maxmudov8883@gmail.com',
  },
  telegram: {
    label: 'Telegram',
    value: '@wxkow',
    href: 'https://t.me/wxkow',
  },
  phone: {
    label: 'Phone',
    value: '+998 95 671 88 83',
    href: 'tel:+998956718883',
  },
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    topBadge: 'Building clean interfaces and solid backends',
    role: 'Full-Stack Developer',
    heroTitle1: 'Ahmadjon',
    heroTitle2: 'Mahmudov',
    heroDesc:
      'Full-stack developer focused on React + Vite, Node.js, REST API, HTML5, CSS3, Sass, and MongoDB. I build modern web interfaces, backend systems, and project-based digital products.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    techPills: ['Node.js', 'React Vite', 'HTML5', 'CSS3', 'Sass', 'REST API', 'MongoDB'],
    previewEyebrow: 'Portfolio Preview',
    previewTitle: 'Developer Snapshot',
    previewCards: [
      { label: 'Focus', value: 'Frontend + Backend' },
      { label: 'Main Stack', value: 'React / Node / MongoDB' },
      { label: 'Approach', value: 'Responsive, Clean, Practical' },
      { label: 'Projects', value: 'Bots, Dashboards, APIs' },
    ],
    about: {
      eyebrow: 'About',
      title: 'Real stack. Real focus.',
      text: 'Only the technologies and direction actually used are shown here. No fake additions. No inflated claims.',
      heading: 'About Me',
      p1: 'I am Ahmadjon Mahmudov, a full-stack developer working mainly with React + Vite, Node.js, REST API, HTML5, CSS3, Sass, and MongoDB.',
      p2: 'My work is centered on web applications, admin panels, backend APIs, and Telegram-related systems with practical UI and usable architecture.',
      p3: 'This portfolio intentionally avoids claiming technologies that are not part of the real stack.',
      cards: [
        { title: 'Frontend', value: 'React + Vite / HTML / CSS / Sass' },
        { title: 'Backend', value: 'Node.js / Express / REST architecture' },
        { title: 'Database', value: 'MongoDB data models and backend flow' },
        { title: 'Output', value: 'Web apps, dashboards, APIs, bot systems' },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Core technologies I use',
      text: 'Organized by actual usage: interface layer, backend layer, and data layer.',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work',
      text: 'Projects aligned with real work direction: music platforms, Telegram bots, tools, and backend APIs.',
      livePreview: 'Live Preview',
    },
    process: {
      eyebrow: 'Process',
      title: 'How I build',
      text: 'A practical workflow from idea to delivery.',
      steps: [
        { step: '01', title: 'Plan', desc: 'Define goal, pages, data flow, and backend needs.' },
        { step: '02', title: 'Design', desc: 'Build structure, layout, hierarchy, and responsive sections.' },
        { step: '03', title: 'Develop', desc: 'Create components, APIs, database models, and logic.' },
        { step: '04', title: 'Launch', desc: 'Optimize, test, deploy, and refine the product.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build something solid',
      text: 'Every contact item below is clickable and opens the related service directly.',
      panelTitle: 'Contact panel',
      panelDesc: 'Use the direct links or send a message through the form. Messages are sent directly to Telegram.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      phone: 'Phone',
      telegramUsername: 'Telegram Username',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      telegramPlaceholder: '@yourusername',
      phonePlaceholder: '+998...',
      messagePlaceholder: 'Project details...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully.',
      error: 'Message failed. Please try again or use direct contacts.',
      directTelegram: 'Open Telegram',
    },
    footer: {
      text: '© 2026 Ahmadjon Mahmudov. Portfolio.',
      top: 'Top',
      projects: 'Projects',
      contact: 'Contact',
    },
    theme: {
      dark: 'Dark',
      light: 'Light',
      system: 'System',
    },
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      skills: 'Ko‘nikmalar',
      projects: 'Loyihalar',
      contact: 'Aloqa',
    },
    topBadge: 'Toza interfeyslar va mustahkam backendlar yarataman',
    role: 'Full-Stack Dasturchi',
    heroTitle1: 'Ahmadjon',
    heroTitle2: 'Mahmudov',
    heroDesc:
      'React + Vite, Node.js, REST API, HTML5, CSS3, Sass va MongoDB ga yo‘naltirilgan full-stack dasturchiman. Zamonaviy web interfeyslar, backend tizimlar va loyiha asosidagi raqamli mahsulotlar yarataman.',
    viewProjects: 'Loyihalarni ko‘rish',
    contactMe: 'Bog‘lanish',
    techPills: ['Node.js', 'React Vite', 'HTML5', 'CSS3', 'Sass', 'REST API', 'MongoDB'],
    previewEyebrow: 'Portfolio Preview',
    previewTitle: 'Dasturchi ko‘rinishi',
    previewCards: [
      { label: 'Yo‘nalish', value: 'Frontend + Backend' },
      { label: 'Asosiy stack', value: 'React / Node / MongoDB' },
      { label: 'Yondashuv', value: 'Responsive, Toza, Amaliy' },
      { label: 'Loyihalar', value: 'Botlar, Panellar, API lar' },
    ],
    about: {
      eyebrow: 'Men haqimda',
      title: 'Haqiqiy stack. Haqiqiy yo‘nalish.',
      text: 'Bu yerda faqat amalda ishlatiladigan texnologiyalar va real yo‘nalish ko‘rsatilgan. Ortiqcha qo‘shimcha yo‘q. Sun’iy da’vo yo‘q.',
      heading: 'Men haqimda',
      p1: 'Men Ahmadjon Mahmudovman. Asosan React + Vite, Node.js, REST API, HTML5, CSS3, Sass va MongoDB bilan ishlaydigan full-stack dasturchiman.',
      p2: 'Ishim web ilovalar, admin panellar, backend API lar va Telegram bilan bog‘liq tizimlarni amaliy UI hamda foydali arxitektura bilan qurishga qaratilgan.',
      p3: 'Bu portfolio ataylab real stackdan tashqaridagi texnologiyalarni men bilaman deb ko‘rsatmaydi.',
      cards: [
        { title: 'Frontend', value: 'React + Vite / HTML / CSS / Sass' },
        { title: 'Backend', value: 'Node.js / Express / REST arxitekturasi' },
        { title: 'Database', value: 'MongoDB model va backend oqimi' },
        { title: 'Natija', value: 'Web ilovalar, dashboardlar, API lar, bot tizimlar' },
      ],
    },
    skills: {
      eyebrow: 'Ko‘nikmalar',
      title: 'Men ishlatadigan asosiy texnologiyalar',
      text: 'Amaldagi ishlatishga qarab ajratilgan: interfeys qatlami, backend qatlami va data qatlami.',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
    },
    projects: {
      eyebrow: 'Loyihalar',
      title: 'Tanlangan ishlar',
      text: 'Loyihalar real yo‘nalishga mos: musiqa platformalari, Telegram botlar, tool lar va backend API lar.',
      livePreview: 'Ko‘rish',
    },
    process: {
      eyebrow: 'Jarayon',
      title: 'Qanday quraman',
      text: 'G‘oyadan tayyor natijagacha bo‘lgan amaliy jarayon.',
      steps: [
        { step: '01', title: 'Reja', desc: 'Maqsad, sahifalar, data oqimi va backend ehtiyojlarini belgilash.' },
        { step: '02', title: 'Dizayn', desc: 'Struktura, layout, ierarxiya va responsive sectionlar qurish.' },
        { step: '03', title: 'Yasash', desc: 'Komponentlar, API lar, database modellar va logikani yozish.' },
        { step: '04', title: 'Ishga tushirish', desc: 'Optimallashtirish, test, deploy va yaxshilash.' },
      ],
    },
    contact: {
      eyebrow: 'Aloqa',
      title: 'Mustahkam narsa quramiz',
      text: 'Pastdagi barcha aloqa elementlari bosiladi va to‘g‘ridan-to‘g‘ri kerakli xizmatga olib boradi.',
      panelTitle: 'Aloqa paneli',
      panelDesc: 'To‘g‘ridan-to‘g‘ri linklardan foydalaning yoki formadan xabar yuboring. Xabarlar to‘g‘ridan-to‘g‘ri Telegramga yuboriladi.',
      name: 'Ism',
      email: 'Email',
      message: 'Xabar',
      phone: 'Telefon',
      telegramUsername: 'Telegram Username',
      namePlaceholder: 'Ismingiz',
      emailPlaceholder: 'your@email.com',
      telegramPlaceholder: '@username',
      phonePlaceholder: '+998...',
      messagePlaceholder: 'Loyiha tafsilotlari...',
      sendMessage: 'Xabar yuborish',
      sending: 'Yuborilmoqda...',
      success: 'Xabar muvaffaqiyatli yuborildi.',
      error: 'Xabar yuborilmadi. Qayta urinib ko‘ring yoki to‘g‘ridan-to‘g‘ri kontaktlardan foydalaning.',
      directTelegram: 'Telegramni ochish',
    },
    footer: {
      text: '© 2026 Ahmadjon Mahmudov. Portfolio.',
      top: 'Yuqoriga',
      projects: 'Loyihalar',
      contact: 'Aloqa',
    },
    theme: {
      dark: 'Qora',
      light: 'Yorug‘',
      system: 'Tizim',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    topBadge: 'Создаю чистые интерфейсы и надёжные backend-системы',
    role: 'Full-Stack Разработчик',
    heroTitle1: 'Ahmadjon',
    heroTitle2: 'Mahmudov',
    heroDesc:
      'Full-stack разработчик с фокусом на React + Vite, Node.js, REST API, HTML5, CSS3, Sass и MongoDB. Создаю современные web-интерфейсы, backend-системы и цифровые продукты под реальные задачи.',
    viewProjects: 'Смотреть проекты',
    contactMe: 'Связаться',
    techPills: ['Node.js', 'React Vite', 'HTML5', 'CSS3', 'Sass', 'REST API', 'MongoDB'],
    previewEyebrow: 'Portfolio Preview',
    previewTitle: 'Профиль разработчика',
    previewCards: [
      { label: 'Фокус', value: 'Frontend + Backend' },
      { label: 'Основной стек', value: 'React / Node / MongoDB' },
      { label: 'Подход', value: 'Responsive, Clean, Practical' },
      { label: 'Проекты', value: 'Боты, панели, API' },
    ],
    about: {
      eyebrow: 'Обо мне',
      title: 'Реальный стек. Реальный фокус.',
      text: 'Здесь показаны только реально используемые технологии и направление работы. Без выдуманных дополнений. Без завышенных заявлений.',
      heading: 'Обо мне',
      p1: 'Меня зовут Ahmadjon Mahmudov. Я full-stack разработчик, который в основном работает с React + Vite, Node.js, REST API, HTML5, CSS3, Sass и MongoDB.',
      p2: 'Моя работа сосредоточена на web-приложениях, admin-панелях, backend API и системах, связанных с Telegram, с практичным UI и рабочей архитектурой.',
      p3: 'Это портфолио специально не заявляет технологии, которые не относятся к реальному стеку.',
      cards: [
        { title: 'Frontend', value: 'React + Vite / HTML / CSS / Sass' },
        { title: 'Backend', value: 'Node.js / Express / REST архитектура' },
        { title: 'Database', value: 'MongoDB модели и backend-поток' },
        { title: 'Результат', value: 'Web-приложения, панели, API, bot-системы' },
      ],
    },
    skills: {
      eyebrow: 'Навыки',
      title: 'Основные технологии, с которыми я работаю',
      text: 'Разделено по реальному использованию: интерфейсный слой, backend-слой и data-слой.',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
    },
    projects: {
      eyebrow: 'Проекты',
      title: 'Выбранные работы',
      text: 'Проекты соответствуют реальному направлению: музыкальные платформы, Telegram-боты, инструменты и backend API.',
      livePreview: 'Открыть',
    },
    process: {
      eyebrow: 'Процесс',
      title: 'Как я работаю',
      text: 'Практический процесс от идеи до результата.',
      steps: [
        { step: '01', title: 'План', desc: 'Определение цели, страниц, потока данных и backend-задач.' },
        { step: '02', title: 'Дизайн', desc: 'Построение структуры, layout, иерархии и responsive-блоков.' },
        { step: '03', title: 'Разработка', desc: 'Создание компонентов, API, database-моделей и логики.' },
        { step: '04', title: 'Запуск', desc: 'Оптимизация, тестирование, deploy и доработка.' },
      ],
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Сделаем что-то сильное',
      text: 'Все контактные элементы ниже кликабельны и ведут прямо в нужный сервис.',
      panelTitle: 'Панель контактов',
      panelDesc: 'Используйте прямые ссылки или отправьте сообщение через форму. Сообщения отправляются напрямую в Telegram.',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      phone: 'Телефон',
      telegramUsername: 'Telegram Username',
      namePlaceholder: 'Ваше имя',
      emailPlaceholder: 'your@email.com',
      telegramPlaceholder: '@username',
      phonePlaceholder: '+998...',
      messagePlaceholder: 'Детали проекта...',
      sendMessage: 'Отправить сообщение',
      sending: 'Отправка...',
      success: 'Сообщение успешно отправлено.',
      error: 'Сообщение не отправлено. Попробуйте снова или используйте прямые контакты.',
      directTelegram: 'Открыть Telegram',
    },
    footer: {
      text: '© 2026 Ahmadjon Mahmudov. Portfolio.',
      top: 'Наверх',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    theme: {
      dark: 'Тёмная',
      light: 'Светлая',
      system: 'Система',
    },
  },
};

const skillContent = {
  frontend: [
    { name: 'React + Vite', level: 92, icon: Braces },
    { name: 'HTML5', level: 95, icon: Code2 },
    { name: 'CSS3', level: 93, icon: Paintbrush },
    { name: 'Sass', level: 88, icon: Layers },
  ],
  backend: [
    { name: 'Node.js', level: 90, icon: Terminal },
    { name: 'REST API', level: 91, icon: Globe },
    { name: 'Express.js', level: 88, icon: Server },
  ],
  database: [{ name: 'MongoDB', level: 86, icon: Database }],
};

const projectContent = [
  {
    title: 'Music Platform',
    type: 'Web App',
    descriptionEn:
      'Online music platform with search, streaming flow, responsive UI, and API-based content handling.',
    descriptionUz:
      'Qidiruv, stream oqimi, responsive UI va API asosidagi kontent boshqaruviga ega online musiqa platformasi.',
    descriptionRu:
      'Онлайн музыкальная платформа с поиском, потоковым воспроизведением, responsive UI и API-логикой.',
    stack: ['React', 'Vite', 'Node.js', 'REST API', 'MongoDB'],
    accent: 'from-cyan-400/30 via-emerald-400/10 to-transparent',
    link: 'https://music.xolt.uz?via=portfolio',
  },
  {
    title: 'Telegram Cloud Bot',
    type: 'Bot System',
    descriptionEn:
      'Telegram bot for storing and managing files in the cloud with authentication, file handling, and database integration.',
    descriptionUz:
      'Autentifikatsiya, fayl boshqaruvi va database integratsiyasi bilan cloud fayllarni saqlovchi va boshqaruvchi Telegram bot.',
    descriptionRu:
      'Telegram-бот для хранения и управления файлами в облаке с аутентификацией, обработкой файлов и database-интеграцией.',
    stack: ['Node.js', 'Telegraf', 'REST API', 'MongoDB'],
    accent: 'from-emerald-400/30 via-cyan-400/10 to-transparent',
    link: 'https://t.me/cloudtgrobot?via=portfolio',
  },
  {
    title: 'Data Faker',
    type: 'Web App',
    descriptionEn:
      'Data generation tool with configurable fields, real-time preview, and export-ready output for testing and development.',
    descriptionUz:
      'Test va development uchun sozlanadigan fieldlar, real-time preview va export chiqishi bor data generator tool.',
    descriptionRu:
      'Инструмент генерации данных с настраиваемыми полями, real-time preview и готовым экспортом для тестирования и разработки.',
    stack: ['React', 'Vite'],
    accent: 'from-fuchsia-400/30 via-cyan-400/10 to-transparent',
    link: 'https://faker.xolt.uz?via=portfolio',
  },
  {
    title: 'AI Chat',
    type: 'Web App',
    descriptionEn:
      'AI-based chat interface with responsive UI and backend-connected request flow.',
    descriptionUz:
      'Responsive UI va backend bilan ulangan so‘rov oqimiga ega AI chat interfeysi.',
    descriptionRu:
      'AI-чат интерфейс с responsive UI и backend-потоком запросов.',
    stack: ['React', 'Vite', 'REST API'],
    accent: 'from-sky-400/30 via-emerald-400/10 to-transparent',
    link: 'https://ai.xolt.uz?via=portfolio',
  },
];

const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

function getSystemTheme() {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function resolveTheme(theme) {
  return theme === 'system' ? getSystemTheme() : theme;
}

// Fixed SEO component - uses useEffect to update document head
function SEOHead({ lang, theme }) {
  const seo = SEO[lang] || SEO.en;
  const isLight = resolveTheme(theme) === 'light';

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = seo.description;

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = seo.keywords;

    // Update author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.name = 'author';
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = 'Ahmadjon Mahmudov';

    // Update theme color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = isLight ? '#f5f9ff' : '#06070b';

    // Update html lang
    document.documentElement.lang = lang;

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://ahmadjon.uz';

    // Update favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      document.head.appendChild(favicon);
    }
    favicon.href = react;

  }, [lang, seo, isLight]);

  return null; // This component doesn't render anything
}

// Fixed CursorGlow component - added position relative to container
function CursorGlow({ isLight }) {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const smoothX = useSpring(mouseX, { stiffness: 250, damping: 30, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 250, damping: 30, mass: 0.4 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-30 h-80 w-80 rounded-full blur-3xl ${isLight ? 'bg-cyan-500/10' : 'bg-cyan-400/10'
          }`}
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-30 h-6 w-6 rounded-full border ${isLight ? 'border-cyan-600/40 bg-cyan-500/10' : 'border-cyan-300/30 bg-cyan-300/10'
          }`}
        style={{ x: useTransform(smoothX, (v) => v + 148), y: useTransform(smoothY, (v) => v + 148) }}
      />
    </>
  );
}

function FloatingParticles({ isLight }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 19) % 100}%`,
        duration: 8 + (i % 5),
        delay: i * 0.25,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute h-1.5 w-1.5 rounded-full ${isLight ? 'bg-cyan-700/20' : 'bg-white/30'
            }`}
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.8, 1] }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
        />
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, isLight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div
        className={`mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] ${isLight
          ? 'border-cyan-900/10 bg-cyan-600/5 text-cyan-700'
          : 'border-white/10 bg-white/5 text-cyan-300'
          }`}
      >
        <Sparkles size={14} />
        {eyebrow}
      </div>
      <h2 className={`mb-4 text-4xl font-black tracking-tight md:text-5xl ${isLight ? 'text-gray-900' : 'text-white'
        }`}>
        {title}
      </h2>
      {text && (
        <p className={`text-base leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'
          }`}>
          {text}
        </p>
      )}
    </motion.div>
  );
}

function SkillCard({ title, icon: Icon, colorClass, items, isLight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45 }}
      className={`group relative overflow-hidden rounded-3xl border p-7 backdrop-blur-xl ${isLight
        ? 'border-gray-200 bg-white/90 shadow-lg'
        : 'border-white/10 bg-white/5'
        }`}
    >
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${colorClass} opacity-60 blur-2xl`} />
      <div className="relative mb-6 flex items-center gap-4">
        <div className={`rounded-2xl border p-3 ${isLight
          ? 'border-gray-200 bg-gray-50'
          : 'border-white/10 bg-black/30'
          }`}>
          <Icon className={isLight ? 'text-cyan-600' : 'text-cyan-300'} size={24} />
        </div>
        <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'
          }`}>
          {title}
        </h3>
      </div>

      <div className="relative space-y-5">
        {items.map((skill, index) => (
          <div key={skill.name} className={`rounded-2xl border p-4 ${isLight
            ? 'border-gray-200 bg-gray-50/90'
            : 'border-white/5 bg-black/20'
            }`}>
            <div className="mb-2 flex items-center gap-3">
              <skill.icon size={16} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
              <span className={`text-sm font-medium ${isLight ? 'text-gray-700' : 'text-gray-200'
                }`}>
                {skill.name}
              </span>
              <span className="ml-auto text-xs text-cyan-500">{skill.level}%</span>
            </div>
            <div className={`h-2 overflow-hidden rounded-full ${isLight ? 'bg-gray-200' : 'bg-white/5'
              }`}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-400"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index, lang, labels, isLight }) {
  const description =
    lang === 'uz' ? project.descriptionUz : lang === 'ru' ? project.descriptionRu : project.descriptionEn;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      className={`group relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl ${isLight
        ? 'border-gray-200 bg-white/90 shadow-lg'
        : 'border-white/10 bg-white/5'
        }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.14), transparent 35%)' }} />
      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-600">
              {project.type}
            </span>
            <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'
              }`}>
              {project.title}
            </h3>
          </div>
          <div className={`rounded-2xl border p-3 ${isLight
            ? 'border-gray-200 bg-gray-50'
            : 'border-white/10 bg-black/30'
            }`}>
            <FolderKanban size={22} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
          </div>
        </div>

        <div className={`mb-6 overflow-hidden rounded-3xl border p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${isLight
          ? 'border-gray-200 bg-gray-50'
          : 'border-white/10 bg-[#0b1018]'
          }`}>
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div
                key={i}
                className={`rounded-xl ${isLight ? 'bg-gray-200' : 'bg-white/5'
                  } ${i % 3 === 0 ? 'h-6' : i % 3 === 1 ? 'h-7' : 'h-8'}`}
                animate={{ opacity: [0.35, 0.8, 0.35] }}
                transition={{ duration: 2.5 + (i % 4), repeat: Infinity, delay: i * 0.05 }}
              />
            ))}
          </div>
        </div>

        <p className={`mb-5 text-sm leading-7 ${isLight ? 'text-gray-600' : 'text-gray-300'
          }`}>
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className={`rounded-full border px-3 py-1 text-xs ${isLight
              ? 'border-gray-200 bg-gray-50 text-gray-700'
              : 'border-white/10 bg-black/20 text-gray-200'
              }`}>
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 transition ${isLight ? 'text-cyan-600 hover:text-cyan-700' : 'text-cyan-400 hover:text-cyan-300'
              }`}
          >
            {labels.livePreview} <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ThemeButton({ active, icon: Icon, label, onClick, isLight }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition ${active
        ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-600'
        : isLight
          ? 'border-gray-200 bg-white text-gray-600 hover:border-cyan-300 hover:text-cyan-600'
          : 'border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300'
        }`}
    >
      <Icon size={14} />
      {label}
    </button>
  );
}

// Telegram message sender function
async function sendToTelegram(formData, lang) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram bot token or chat ID not configured');
    return false;
  }

  const message = `
🔔 *New Contact Message*

👤 *Name:* ${formData.name || 'Not provided'}
📧 *Email:* ${formData.email || 'Not provided'}
📱 *Phone:* ${formData.phone || 'Not provided'}
💬 *Telegram:* ${formData.telegram || 'Not provided'}

📝 *Message:*
${formData.message || 'No message'}

🌐 *Language:* ${lang}
⏰ *Time:* ${new Date().toLocaleString()}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    return true;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

export default function App() {
  const heroRef = useRef(null);
  const mainRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_KEYS.lang) || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.theme) || 'system');
  const [resolvedTheme, setResolvedTheme] = useState(() => resolveTheme(localStorage.getItem(STORAGE_KEYS.theme) || 'system'));
  const [form, setForm] = useState({ name: '', email: '', telegram: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  // Fixed useScroll with proper container reference
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
    layoutEffect: false // Prevent SSR issues
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    if (!LANGS.includes(lang)) setLang('en');
    localStorage.setItem(STORAGE_KEYS.lang, lang);
  }, [lang]);

  useEffect(() => {
    if (!THEMES.includes(theme)) setTheme('system');
    localStorage.setItem(STORAGE_KEYS.theme, theme);

    const apply = () => {
      const current = resolveTheme(theme);
      setResolvedTheme(current);
      document.documentElement.classList.toggle('dark', current === 'dark');
    };

    apply();

    const media = window.matchMedia('(prefers-color-scheme: light)');
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [theme]);

  const t = translations[lang] || translations.en;
  const isLight = resolvedTheme === 'light';

  const aboutIcons = [Code2, Server, Database, Rocket];
  const processIcons = [Lightbulb, Paintbrush, Code2, Rocket];
  const previewIcons = [Rocket, Layers, Zap, Smartphone];
  const contactIcons = [Github, Mail, MessageCircle, Phone];

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (sending) return;

    setSending(true);
    setStatus({ type: '', text: '' });

    try {
      // Try to send directly to Telegram
      const success = await sendToTelegram(form, lang);

      if (success) {
        setStatus({ type: 'success', text: t.contact.success });
        setForm({ name: '', email: '', telegram: '', phone: '', message: '' });
      } else {
        // Fallback to local API if configured
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...form, lang }),
          });

          if (res.ok) {
            setStatus({ type: 'success', text: t.contact.success });
            setForm({ name: '', email: '', telegram: '', phone: '', message: '' });
          } else {
            throw new Error('API failed');
          }
        } catch {
          setStatus({ type: 'error', text: t.contact.error });
        }
      }
    } catch (error) {
      setStatus({ type: 'error', text: t.contact.error });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEOHead lang={lang} theme={theme} />

      <div
        ref={mainRef}
        className={`relative min-h-screen overflow-x-hidden selection:bg-cyan-300 selection:text-black ${isLight
          ? 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'
          : 'bg-[#06070b] text-white'
          }`}
      >
        <CursorGlow isLight={isLight} />

        <div className="pointer-events-none fixed inset-0 z-0">
          <div className={`absolute inset-0 ${isLight
            ? 'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.03),transparent_25%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.05),transparent_30%)]'
            : 'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.08),transparent_25%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.06),transparent_30%)]'
            }`} />
          <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)] ${isLight ? 'opacity-20' : ''
            }`} />
          <FloatingParticles isLight={isLight} />
        </div>

        <div className="fixed left-0 right-0 top-0 z-40 px-4 pt-5">
          <nav className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-5 py-4 backdrop-blur-xl ${isLight
            ? 'border-gray-200 bg-white/90 shadow-lg'
            : 'border-white/10 bg-black/30 shadow-[0_10px_50px_rgba(0,0,0,0.25)]'
            }`}>
            <a href="#home" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-black text-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.14)]">
                <img className='w-7 h-7' src={react} alt="react" />
              </div>
              <div>
                <div className={`text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-white'
                  }`}>
                  Ahmadjon
                </div>
                <div className={`text-xs ${isLight ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                  {t.role}
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-3 xl:flex">
              <div className="flex items-center gap-7">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`relative text-sm font-medium transition ${isLight
                      ? 'text-gray-600 hover:text-cyan-600'
                      : 'text-gray-300 hover:text-cyan-300'
                      }`}
                  >
                    {t.nav[item]}
                  </a>
                ))}
              </div>
              <div className="ml-4 flex items-center gap-2">
                <button
                  onClick={() => setLang('en')}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium ${lang === 'en'
                    ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-600'
                    : isLight
                      ? 'border-gray-200 bg-white text-gray-600'
                      : 'border-white/10 bg-white/5 text-gray-300'
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('uz')}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium ${lang === 'uz'
                    ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-600'
                    : isLight
                      ? 'border-gray-200 bg-white text-gray-600'
                      : 'border-white/10 bg-white/5 text-gray-300'
                    }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLang('ru')}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium ${lang === 'ru'
                    ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-600'
                    : isLight
                      ? 'border-gray-200 bg-white text-gray-600'
                      : 'border-white/10 bg-white/5 text-gray-300'
                    }`}
                >
                  RU
                </button>
              </div>
              <div className="ml-2 flex items-center gap-2">
                <ThemeButton active={theme === 'dark'} icon={Moon} label={t.theme.dark} onClick={() => setTheme('dark')} isLight={isLight} />
                <ThemeButton active={theme === 'light'} icon={Sun} label={t.theme.light} onClick={() => setTheme('light')} isLight={isLight} />
                <ThemeButton active={theme === 'system'} icon={Monitor} label={t.theme.system} onClick={() => setTheme('system')} isLight={isLight} />
              </div>
            </div>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`inline-flex rounded-xl border p-2 transition xl:hidden ${isLight
                ? 'border-gray-200 bg-white text-gray-700 hover:border-cyan-300 hover:text-cyan-600'
                : 'border-white/10 bg-white/5 text-gray-200 hover:border-cyan-400/40 hover:text-cyan-300'
                }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                className={`mx-auto mt-3 max-w-6xl rounded-2xl border p-4 backdrop-blur-xl xl:hidden ${isLight
                  ? 'border-gray-200 bg-white/95'
                  : 'border-white/10 bg-[#0a0d13]/95'
                  }`}
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => setLang('en')}
                    className={`rounded-xl border px-3 py-2 text-xs font-medium ${lang === 'en'
                      ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-600'
                      : isLight
                        ? 'border-gray-200 bg-white text-gray-600'
                        : 'border-white/10 bg-white/5 text-gray-300'
                      }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang('uz')}
                    className={`rounded-xl border px-3 py-2 text-xs font-medium ${lang === 'uz'
                      ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-600'
                      : isLight
                        ? 'border-gray-200 bg-white text-gray-600'
                        : 'border-white/10 bg-white/5 text-gray-300'
                      }`}
                  >
                    UZ
                  </button>
                  <button
                    onClick={() => setLang('ru')}
                    className={`rounded-xl border px-3 py-2 text-xs font-medium ${lang === 'ru'
                      ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-600'
                      : isLight
                        ? 'border-gray-200 bg-white text-gray-600'
                        : 'border-white/10 bg-white/5 text-gray-300'
                      }`}
                  >
                    RU
                  </button>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <ThemeButton active={theme === 'dark'} icon={Moon} label={t.theme.dark} onClick={() => setTheme('dark')} isLight={isLight} />
                  <ThemeButton active={theme === 'light'} icon={Sun} label={t.theme.light} onClick={() => setTheme('light')} isLight={isLight} />
                  <ThemeButton active={theme === 'system'} icon={Monitor} label={t.theme.system} onClick={() => setTheme('system')} isLight={isLight} />
                </div>
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm transition ${isLight
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600'
                        : 'text-gray-200 hover:bg-white/5 hover:text-cyan-300'
                        }`}
                    >
                      {t.nav[item]}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <main className="relative z-10">
          <section id="home" ref={heroRef} className="px-4 pb-24 pt-36 md:pt-40">
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
              className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${isLight
                    ? 'border-gray-200 bg-white/70 text-gray-600'
                    : 'border-white/10 bg-white/5 text-gray-300'
                    }`}
                >
                  <MousePointer2 size={16} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                  {t.topBadge}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-[92px]"
                >
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${isLight
                    ? 'from-gray-800 via-gray-700 to-gray-600'
                    : 'from-white via-cyan-100 to-gray-400'
                    }`}>
                    {t.heroTitle1}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-600 via-emerald-600 to-cyan-500 bg-clip-text text-transparent">
                    {t.heroTitle2}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={`mt-7 max-w-2xl text-base leading-8 md:text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'
                    }`}
                >
                  {t.heroDesc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                  >
                    {t.viewProjects}
                    <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-semibold transition ${isLight
                      ? 'border-gray-200 bg-white text-gray-800 hover:border-cyan-300 hover:bg-gray-50'
                      : 'border-white/10 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-white/10'
                      }`}
                  >
                    {t.contactMe}
                    <Send size={18} />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="mt-10 flex flex-wrap gap-3"
                >
                  {t.techPills.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-4 py-2 text-sm backdrop-blur ${isLight
                        ? 'border-gray-200 bg-white/70 text-gray-700'
                        : 'border-white/10 bg-black/20 text-gray-300'
                        }`}
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                className="relative"
              >
                <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className={`relative overflow-hidden rounded-[34px] border p-5 backdrop-blur-2xl ${isLight
                  ? 'border-gray-200 bg-white/90 shadow-xl'
                  : 'border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]'
                  }`}>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400/70" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                  </div>

                  <div className={`rounded-[26px] border p-5 ${isLight
                    ? 'border-gray-200 bg-gray-50'
                    : 'border-white/10 bg-[#090d14]'
                    }`}>
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.24em] text-cyan-600">
                          {t.previewEyebrow}
                        </div>
                        <div className={`mt-2 text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'
                          }`}>
                          {t.previewTitle}
                        </div>
                      </div>
                      <div className={`rounded-2xl border p-3 ${isLight
                        ? 'border-gray-200 bg-white'
                        : 'border-white/10 bg-white/5'
                        }`}>
                        <ScanSearch size={24} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {t.previewCards.map((card, index) => {
                        const Icon = previewIcons[index];
                        return (
                          <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 + index * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                            className={`rounded-2xl border p-4 ${isLight
                              ? 'border-gray-200 bg-white'
                              : 'border-white/10 bg-white/5'
                              }`}
                          >
                            <Icon size={18} className={isLight ? 'mb-3 text-cyan-600' : 'mb-3 text-cyan-400'} />
                            <div className={`text-xs uppercase tracking-[0.18em] ${isLight ? 'text-gray-500' : 'text-gray-500'
                              }`}>
                              {card.label}
                            </div>
                            <div className={`mt-2 text-sm font-medium ${isLight ? 'text-gray-900' : 'text-gray-100'
                              }`}>
                              {card.value}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          <section id="about" className="px-4 py-24 md:py-28">
            <div className="mx-auto max-w-6xl">
              <SectionTitle
                eyebrow={t.about.eyebrow}
                title={t.about.title}
                text={t.about.text}
                isLight={isLight}
              />
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className={`rounded-[32px] border p-8 backdrop-blur-xl ${isLight
                    ? 'border-gray-200 bg-white/90 shadow-lg'
                    : 'border-white/10 bg-white/5'
                    }`}
                >
                  <h3 className={`mb-5 text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'
                    }`}>
                    {t.about.heading}
                  </h3>
                  <div className={`space-y-5 text-base leading-8 ${isLight ? 'text-gray-600' : 'text-gray-300'
                    }`}>
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                    <p>{t.about.p3}</p>
                  </div>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {t.about.cards.map((item, index) => {
                    const Icon = aboutIcons[index];
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ delay: index * 0.07 }}
                        whileHover={{ y: -6 }}
                        className={`rounded-[28px] border p-6 backdrop-blur-xl ${isLight
                          ? 'border-gray-200 bg-white/90 shadow-lg'
                          : 'border-white/10 bg-white/5'
                          }`}
                      >
                        <Icon size={24} className={isLight ? 'mb-4 text-cyan-600' : 'mb-4 text-cyan-400'} />
                        <h4 className={`mb-2 text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'
                          }`}>
                          {item.title}
                        </h4>
                        <p className={`text-sm leading-7 ${isLight ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                          {item.value}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="px-4 py-24 md:py-28">
            <div className="mx-auto max-w-6xl">
              <SectionTitle
                eyebrow={t.skills.eyebrow}
                title={t.skills.title}
                text={t.skills.text}
                isLight={isLight}
              />
              <div className="grid gap-6 lg:grid-cols-3">
                <SkillCard
                  title={t.skills.frontend}
                  icon={Code2}
                  colorClass="from-cyan-500/30 to-transparent"
                  items={skillContent.frontend}
                  isLight={isLight}
                />
                <SkillCard
                  title={t.skills.backend}
                  icon={Server}
                  colorClass="from-emerald-500/30 to-transparent"
                  items={skillContent.backend}
                  isLight={isLight}
                />
                <SkillCard
                  title={t.skills.database}
                  icon={Database}
                  colorClass="from-sky-500/30 to-transparent"
                  items={skillContent.database}
                  isLight={isLight}
                />
              </div>
            </div>
          </section>

          <section id="projects" className="px-4 py-24 md:py-28">
            <div className="mx-auto max-w-6xl">
              <SectionTitle
                eyebrow={t.projects.eyebrow}
                title={t.projects.title}
                text={t.projects.text}
                isLight={isLight}
              />
              <div className="grid gap-6 md:grid-cols-2">
                {projectContent.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    lang={lang}
                    labels={t.projects}
                    isLight={isLight}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-24 md:py-28">
            <div className="mx-auto max-w-6xl">
              <SectionTitle
                eyebrow={t.process.eyebrow}
                title={t.process.title}
                text={t.process.text}
                isLight={isLight}
              />
              <div className="grid gap-5 md:grid-cols-4">
                {t.process.steps.map((item, index) => {
                  const Icon = processIcons[index];
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -8 }}
                      className={`relative overflow-hidden rounded-[28px] border p-6 text-center backdrop-blur-xl ${isLight
                        ? 'border-gray-200 bg-white/90 shadow-lg'
                        : 'border-white/10 bg-white/5'
                        }`}
                    >
                      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-cyan-500/20 to-emerald-500/10 blur-2xl" />
                      <div className="relative">
                        <div className={`mb-4 text-5xl font-black ${isLight ? 'text-gray-200' : 'text-white/10'
                          }`}>
                          {item.step}
                        </div>
                        <Icon size={28} className={`mx-auto mb-4 ${isLight ? 'text-cyan-600' : 'text-cyan-400'
                          }`} />
                        <h3 className={`mb-2 text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'
                          }`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm leading-7 ${isLight ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="contact" className="px-4 pb-20 pt-24 md:pt-28">
            <div className="mx-auto max-w-5xl">
              <SectionTitle
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                text={t.contact.text}
                isLight={isLight}
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                className={`overflow-hidden rounded-[34px] border p-8 backdrop-blur-xl ${isLight
                  ? 'border-gray-200 bg-white/90 shadow-lg'
                  : 'border-white/10 bg-white/5'
                  }`}
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
                  <div>
                    <h3 className={`mb-4 text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'
                      }`}>
                      {t.contact.panelTitle}
                    </h3>
                    <p className={`mb-6 text-base leading-8 ${isLight ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                      {t.contact.panelDesc}
                    </p>
                    <div className="space-y-3">
                      {[CONTACT.github, CONTACT.email, CONTACT.telegram, CONTACT.phone].map((item, index) => {
                        const Icon = contactIcons[index];
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`flex items-center gap-4 rounded-2xl border px-4 py-4 transition ${isLight
                              ? 'border-gray-200 bg-gray-50 hover:border-cyan-300 hover:shadow-lg'
                              : 'border-white/10 bg-black/20 hover:border-cyan-400/30 hover:bg-white/5'
                              }`}
                          >
                            <div className={`rounded-xl border p-2 ${isLight
                              ? 'border-gray-200 bg-white'
                              : 'border-white/10 bg-white/5'
                              }`}>
                              <Icon size={18} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                            </div>
                            <div>
                              <div className={`text-xs uppercase tracking-[0.2em] ${isLight ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                {item.label}
                              </div>
                              <div className={`text-sm ${isLight ? 'text-gray-900' : 'text-gray-200'
                                }`}>
                                {item.value}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className={`mb-2 block text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                        {t.contact.name}
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleInput}
                        type="text"
                        placeholder={t.contact.namePlaceholder}
                        required
                        className={`w-full rounded-2xl border px-4 py-4 outline-none transition ${isLight
                          ? 'border-gray-200 bg-gray-50 text-gray-900 focus:border-cyan-500/50'
                          : 'border-white/10 bg-black/20 text-white focus:border-cyan-400/40'
                          }`}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={`mb-2 block text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                          {t.contact.email}
                        </label>
                        <input
                          name="email"
                          value={form.email}
                          onChange={handleInput}
                          type="email"
                          placeholder={t.contact.emailPlaceholder}
                          className={`w-full rounded-2xl border px-4 py-4 outline-none transition ${isLight
                            ? 'border-gray-200 bg-gray-50 text-gray-900 focus:border-cyan-500/50'
                            : 'border-white/10 bg-black/20 text-white focus:border-cyan-400/40'
                            }`}
                        />
                      </div>
                      <div>
                        <label className={`mb-2 block text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                          {t.contact.phone}
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleInput}
                          type="text"
                          placeholder={t.contact.phonePlaceholder}
                          className={`w-full rounded-2xl border px-4 py-4 outline-none transition ${isLight
                            ? 'border-gray-200 bg-gray-50 text-gray-900 focus:border-cyan-500/50'
                            : 'border-white/10 bg-black/20 text-white focus:border-cyan-400/40'
                            }`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`mb-2 block text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                        {t.contact.telegramUsername}
                      </label>
                      <input
                        name="telegram"
                        value={form.telegram}
                        onChange={handleInput}
                        type="text"
                        placeholder={t.contact.telegramPlaceholder}
                        className={`w-full rounded-2xl border px-4 py-4 outline-none transition ${isLight
                          ? 'border-gray-200 bg-gray-50 text-gray-900 focus:border-cyan-500/50'
                          : 'border-white/10 bg-black/20 text-white focus:border-cyan-400/40'
                          }`}
                      />
                    </div>
                    <div>
                      <label className={`mb-2 block text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                        {t.contact.message}
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleInput}
                        rows={6}
                        placeholder={t.contact.messagePlaceholder}
                        required
                        className={`w-full rounded-2xl border px-4 py-4 outline-none transition ${isLight
                          ? 'border-gray-200 bg-gray-50 text-gray-900 focus:border-cyan-500/50'
                          : 'border-white/10 bg-black/20 text-white focus:border-cyan-400/40'
                          }`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {sending ? t.contact.sending : t.contact.sendMessage}
                      <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>

                    <AnimatePresence>
                      {status.text && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm ${status.type === 'success'
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600'
                            : 'border-rose-500/30 bg-rose-500/10 text-rose-600'
                            }`}
                        >
                          {status.type === 'success' ? <CheckCircle2 size={17} /> : <AlertCircle size={17} />}
                          {status.text}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className={`relative z-10 border-t px-4 py-8 ${isLight ? 'border-gray-200' : 'border-white/10'
          }`}>
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
            <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'
              }`}>
              {t.footer.text}
            </p>
            <div className={`flex items-center gap-6 text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'
              }`}>
              <a href="#home" className="transition hover:text-cyan-600">{t.footer.top}</a>
              <a href="#projects" className="transition hover:text-cyan-600">{t.footer.projects}</a>
              <a href="#contact" className="transition hover:text-cyan-600">{t.footer.contact}</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
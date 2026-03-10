export const STORAGE_KEYS = {
    lang: 'portfolio_lang',
    theme: 'portfolio_theme',
};

export const LANGS = ['en', 'uz', 'ru'];
export const THEMES = ['dark', 'light', 'system'];

export const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
export const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';

export const CONTACT = {
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

export const navItems = ['home', 'about', 'skills', 'projects', 'contact'];
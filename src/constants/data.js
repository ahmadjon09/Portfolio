import {
    Code2,
    Server,
    Database,
    Globe,
    Terminal,
    Layers,
    Braces,
    Paintbrush,
} from 'lucide-react';

export const skillContent = {
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

export const projectContent = [
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
        accent: 'from-cyan-400/40 via-emerald-400/20 to-transparent',
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
        accent: 'from-emerald-400/40 via-cyan-400/20 to-transparent',
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
        accent: 'from-fuchsia-400/40 via-cyan-400/20 to-transparent',
        link: 'https://faker.xolt.uz?via=portfolio',
    },
    {
        title: 'AI Chat',
        type: 'Web App',
        descriptionEn:
            'AI-based chat interface with responsive UI and backend-connected request flow.',
        descriptionUz:
            "Responsive UI va backend bilan ulangan so'rov oqimiga ega AI chat interfeysi.",
        descriptionRu:
            'AI-чат интерфейс с responsive UI и backend-потоком запросов.',
        stack: ['React', 'Vite', 'REST API'],
        accent: 'from-sky-400/40 via-emerald-400/20 to-transparent',
        link: 'https://ai.xolt.uz?via=portfolio',
    },
];
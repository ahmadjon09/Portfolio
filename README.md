# Ahmadjon Maxmudov — Developer Portfolio

<div align="center">

  <h3>Zamonaviy, chiroyli va animatsiyali full-stack developer portfoliosi</h3>

  <p>
    <a href="https://ahmadjon.uz" target="_blank">🌐 Live Demo</a> •
    <a href="#features">✨ Features</a> •
    <a href="#tech-stack">🛠️ Tech Stack</a> •
    <a href="#project-structure">📁 Structure</a> •
    <a href="#installation">⚙️ Installation</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  </p>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [SEO](#-seo)
- [Contact Form Setup](#-contact-form-setup)
- [Author](#-author)

---

## 🎯 Overview

Bu portfolio **Ahmadjon Maxmudov** — full-stack dasturchi uchun yaratilgan. React + Vite bilan tezkor ishlaydi, Framer Motion animatsiyalari, Tailwind CSS dizayni va 3 tilli (EN / UZ / RU) qo'llab-quvvatlash mavjud.

Portfolio quyidagilarga urg'u beradi:
- Toza va professional dizayn
- Silliq foydalanuvchi tajribasi
- Tez yuklanish
- SEO optimizatsiya
- Telegram orqali aloqa formasi

---

## ✨ Features

### 🎨 Design & UI
- **Glass morphism** kartalar — backdrop blur effektlari bilan
- **Custom cursor** — sichqonchani kuzatadigan glow effekt
- **Floating particles** — fon animatsiyalari
- **Parallax scrolling** — opacity va scale transformlar bilan
- **3D tilt** effektlari — loyiha kartalarida rotateX/rotateY
- **Animatsiyali skill bar**lar — foiz ko'rsatkichlari bilan
- **Kod mockup** — loyiha kartalarida realistik preview

### 🌓 Theme System
- **Dark mode** — kosmik qora fon (standart)
- **Light mode** — toza oq professional tema
- **System mode** — OS sozlamalariga moslashadi
- **localStorage** da saqlanadi
- Flickersiz silliq o'tish

### 🌐 Ko'p Tilli Qo'llab-Quvvatlash
| Til | Status |
|-----|--------|
| 🇺🇸 English | ✅ To'liq |
| 🇺🇿 O'zbek | ✅ To'liq |
| 🇷🇺 Русский | ✅ To'liq |

- Til tanlovi **localStorage** da saqlanadi
- Barcha UI elementlari tarjima qilingan

### 🖱️ Interaktiv Elementlar
- **Magnetic buttons** — spring physics bilan
- **Hover animatsiyalari** — barcha kartalar
- **Smooth scroll** — bo'limlar orasida
- **Hamburger menu** — mobil uchun
- **Form validation** — vizual feedback bilan
- **Telegram xabar** — muvaffaqiyat/xato holatlari

### 📱 Responsive Design
- **Mobile-first** yondashuv
- Breakpointlar: `sm` `md` `lg` `xl` `2xl`
- Mobilda collapsible navigatsiya
- Touch-friendly elementlar

### 🚀 Performance
- Vite bilan lightning-fast build
- `useMemo` / `useCallback` bilan optimallashtirilgan re-renderlar
- `useSpring` bilan smooth animatsiyalar
- Scroll handlerlar debounced

---

## 🛠️ Tech Stack

### Frontend

| Texnologiya | Versiya | Maqsad |
|-------------|---------|--------|
| **React** | 18.x | UI library |
| **Vite** | 4.x | Build tool |
| **Tailwind CSS** | 3.x | Utility-first styling |
| **Framer Motion** | 10.x | Animatsiyalar |
| **Lucide React** | 0.x | Ikonlar |

### Developer Stack (Portfolio mavzusi)

| Texnologiya | Daraja |
|-------------|--------|
| React + Vite | 92% |
| HTML5 | 95% |
| CSS3 | 93% |
| Sass | 88% |
| Node.js | 90% |
| REST API | 91% |
| Express.js | 88% |
| MongoDB | 86% |

---

## 📁 Project Structure

```
src/
├── App.jsx                         # Root component — layout va state
│
├── constants/
│   ├── config.js                   # STORAGE_KEYS, CONTACT, navItems, env
│   ├── seo.js                      # SEO meta (title, description, keywords)
│   ├── translations.js             # EN / UZ / RU tarjimalar
│   └── data.js                     # skillContent, projectContent
│
├── utils/
│   ├── theme.js                    # getSystemTheme, resolveTheme
│   └── telegram.js                 # sendToTelegram funksiyasi
│
└── components/
    ├── SEOHead.jsx                  # Meta teglar, favicon, canonical
    ├── PremiumCursor.jsx            # Custom mouse follower + glow
    ├── FloatingOrbs.jsx             # Fon uchun suzuvchi orb animatsiyalar
    ├── FloatingParticles.jsx        # Fon uchun particle animatsiyalar
    ├── GridBackground.jsx           # Grid pattern fon
    ├── SectionTitle.jsx             # Reusable bo'lim sarlavhasi
    ├── GlassCard.jsx                # 3D tilt + glass morphism karta
    ├── MagneticButton.jsx           # Magnetic hover effektli tugma
    ├── ThemeButton.jsx              # Dark/Light/System tugmasi
    ├── SkillCard.jsx                # Skill + animatsiyali progress bar
    ├── ProjectCard.jsx              # Loyiha kartasi + kod mockup
    ├── Navbar.jsx                   # Navigatsiya + til + tema + hamburger
    ├── Footer.jsx                   # Footer havolalar
    │
    └── sections/
        ├── HeroSection.jsx          # Hero — ism, tavsif, tugmalar, preview
        ├── AboutSection.jsx         # Men haqimda — matn + 4 karta
        ├── SkillsSection.jsx        # Ko'nikmalar — 3 ustun
        ├── ProjectsSection.jsx      # Loyihalar — 2x2 grid
        ├── ProcessSection.jsx       # Jarayon — 4 qadam
        └── ContactSection.jsx       # Aloqa — form + kontakt linklar
```

---

## ⚙️ Installation

### Talablar

- **Node.js** >= 16.x
- **npm** >= 8.x yoki **yarn** >= 1.22.x

### O'rnatish

```bash
# 1. Reponi clone qiling
git clone https://github.com/ahmadjon09/portfolio.git
cd portfolio

# 2. Dependencylarni o'rnating
npm install

# 3. .env faylini yarating
cp .env.example .env

# 4. Dev serverni ishga tushiring
npm run dev
```

Brauzerda oching: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Environment Variables

`.env` faylini yarating va quyidagilarni to'ldiring:

```env
# Telegram Bot (aloqa formasi uchun)
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

### Telegram Bot Token qanday olish kerak?

1. Telegramda **[@BotFather](https://t.me/BotFather)** ga yozing
2. `/newbot` buyrug'ini yuboring
3. Bot nomini kiriting
4. Olingan tokenni `VITE_TELEGRAM_BOT_TOKEN` ga qo'ying

### Chat ID qanday olish kerak?

1. **[@userinfobot](https://t.me/userinfobot)** ga `/start` yuboring
2. Olingan ID ni `VITE_TELEGRAM_CHAT_ID` ga qo'ying

> ⚠️ `.env` faylini hech qachon GitHubga push qilmang! `.gitignore` ga qo'shing.

---

## 📜 Available Scripts

```bash
# Development server (hot reload bilan)
npm run dev

# Production build
npm run build

# Build preview (local)
npm run preview

# Lint tekshiruv
npm run lint
```

---

## 🚀 Deployment

### Vercel (Tavsiya etiladi)

```bash
# Vercel CLI o'rnating
npm i -g vercel

# Deploy qiling
vercel

# Production deploy
vercel --prod
```

Vercel dashboard'da environment variablelarni qo'shishni unutmang:
- `VITE_TELEGRAM_BOT_TOKEN`
- `VITE_TELEGRAM_CHAT_ID`

### Netlify

```bash
# Build qiling
npm run build

# dist/ papkasini Netlify'ga drag & drop qiling
# yoki netlify CLI orqali:
netlify deploy --prod --dir=dist
```

### O'z serveringiz (Nginx)

```bash
# Build qiling
npm run build

# dist/ papkasini serverga ko'chiring
scp -r dist/ user@yourserver.com:/var/www/portfolio/

# Nginx config
server {
    listen 80;
    server_name ahmadjon.uz;
    root /var/www/portfolio;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🔍 SEO

Portfolio quyidagi SEO optimizatsiyalarni o'z ichiga oladi:

- ✅ Dynamic `<title>` — tilga qarab o'zgaradi
- ✅ `<meta name="description">` — tilga qarab
- ✅ `<meta name="keywords">` — tilga qarab
- ✅ `<meta name="author">` — Ahmadjon Maxmudov
- ✅ `<meta name="theme-color">` — temaga qarab
- ✅ `<link rel="canonical">` — ahmadjon.uz
- ✅ `<html lang="">` — tilga qarab o'zgaradi
- ✅ Favicon — React SVG

**SEO fayllar joylashuvi:** `src/constants/seo.js`

---

## 📬 Contact Form Setup

Aloqa formasi xabarlarni to'g'ridan-to'g'ri Telegramga yuboradi.

**Xabar formati:**
```
🔔 New Contact Message

👤 Name: ...
📧 Email: ...
📱 Phone: ...
💬 Telegram: ...

📝 Message:
...

🌐 Language: en
⏰ Time: ...
```

Agar Telegram API ishlamasa, `/api/contact` endpointga fallback qiladi.

**Telegram logikasi joylashuvi:** `src/utils/telegram.js`

---

## 🌐 Live Projects (Portfolio'da ko'rsatilgan)

| Loyiha | Tur | Link |
|--------|-----|------|
| Music Platform | Web App | [music.xolt.uz](https://music.xolt.uz) |
| Telegram Cloud Bot | Bot | [t.me/cloudtgrobot](https://t.me/cloudtgrobot) |
| Data Faker | Web App | [faker.xolt.uz](https://faker.xolt.uz) |
| AI Chat | Web App | [ai.xolt.uz](https://ai.xolt.uz) |

---

## 👤 Author

**Ahmadjon Maxmudov**

| | |
|---|---|
| 🌐 Website | [ahmadjon.uz](https://ahmadjon.uz) |
| 💻 GitHub | [@ahmadjon09](https://github.com/ahmadjon09) |
| 📧 Email | maxmudov8883@gmail.com |
| 💬 Telegram | [@wxkow](https://t.me/wxkow) |
| 📱 Phone | +998 95 671 88 83 |

---

<div align="center">
  <p>© 2026 Ahmadjon Maxmudov. Portfolio.</p>
</div>
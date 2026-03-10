import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';

// Constants
import { STORAGE_KEYS, LANGS, THEMES, navItems } from './constants/config';
import { translations } from './constants/translations';

// Utils
import { resolveTheme } from './utils/theme';

// Components
import SEOHead from './components/SEOHead';
import PremiumCursor from './components/PremiumCursor';
import FloatingOrbs from './components/FloatingOrbs';
import GridBackground from './components/GridBackground';
import FloatingParticles from './components/FloatingParticles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ProcessSection from './components/sections/ProcessSection';
import ContactSection from './components/sections/ContactSection';

console.log(
  "%cAHMAD",
  `
  font-size:50px;
  font-weight:900;
  color:#00ffcc;
  text-shadow:
    0 0 10px #00ffcc,
    0 0 20px #00ffcc,
    0 0 40px #00ffcc,
    0 0 80px #00ffcc;
  letter-spacing:10px;
  `
);

export default function App() {
  const heroRef = useRef(null);
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_KEYS.lang) || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.theme) || 'system');
  const [resolvedTheme, setResolvedTheme] = useState(() => resolveTheme(localStorage.getItem(STORAGE_KEYS.theme) || 'system'));
  const [activeNav, setActiveNav] = useState('home');

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
    layoutEffect: false
  });

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(id => document.getElementById(id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveNav(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <>
      <SEOHead lang={lang} theme={theme} />

      <div
        className={`relative min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-gray-900 ${isLight
          ? 'bg-gradient-to-br from-slate-50 via-white to-gray-50 text-gray-900'
          : 'bg-gradient-to-br from-gray-950 via-[#030712] to-gray-950 text-white'
          }`}
      >
        <PremiumCursor isLight={isLight} />
        <FloatingOrbs isLight={isLight} />
        <GridBackground isLight={isLight} />
        <FloatingParticles isLight={isLight} />

        {/* Progress bar */}
        <motion.div
          className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-400"
          style={{ scaleX: scrollYProgress }}
        />

        <Navbar
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          activeNav={activeNav}
          t={t}
          isLight={isLight}
        />

        <main className="relative z-10">
          <HeroSection
            heroRef={heroRef}
            scrollYProgress={scrollYProgress}
            t={t}
            isLight={isLight}
          />
          <AboutSection t={t} isLight={isLight} />
          <SkillsSection t={t} isLight={isLight} />
          <ProjectsSection t={t} lang={lang} isLight={isLight} />
          <ProcessSection t={t} isLight={isLight} />
          <ContactSection t={t} lang={lang} isLight={isLight} />
        </main>

        <Footer t={t} isLight={isLight} />
      </div>
    </>
  );
}
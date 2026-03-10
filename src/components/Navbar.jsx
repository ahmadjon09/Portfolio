import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../constants/config';
import react from '../assets/react.svg';
import ThemeButton from './ThemeButton';

export default function Navbar({ lang, setLang, theme, setTheme, activeNav, t, isLight }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="fixed left-0 right-0 top-0 z-40 px-4 pt-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-5 py-4 backdrop-blur-2xl ${isLight
                    ? 'border-gray-200/60 bg-white/70 shadow-lg shadow-gray-200/30'
                    : 'border-white/10 bg-gray-900/60 shadow-2xl shadow-black/30'
                    }`}
            >
                <a href="#home" className="group inline-flex items-center gap-3">
                    <motion.div
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${isLight
                            ? 'border-cyan-200 bg-gradient-to-br from-cyan-50 to-emerald-50'
                            : 'border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-emerald-500/10'
                            } shadow-lg`}
                    >
                        <img className='w-7 h-7' src={react} alt="react" />
                    </motion.div>
                    <div>
                        <div className={`text-sm font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                            Ahmadjon
                        </div>
                        <div className={`text-xs ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                            {t.role}
                        </div>
                    </div>
                </a>

                <div className="hidden items-center gap-3 xl:flex">
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all ${activeNav === item
                                    ? isLight
                                        ? 'text-cyan-600'
                                        : 'text-cyan-400'
                                    : isLight
                                        ? 'text-gray-600 hover:text-cyan-600'
                                        : 'text-gray-400 hover:text-cyan-300'
                                    }`}
                            >
                                {activeNav === item && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className={`absolute inset-0 rounded-xl ${isLight
                                            ? 'bg-cyan-100/50'
                                            : 'bg-cyan-500/10'
                                            }`}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{t.nav[item]}</span>
                            </a>
                        ))}
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                        {['en', 'uz', 'ru'].map((l) => (
                            <motion.button
                                key={l}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setLang(l)}
                                className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase transition-all ${lang === l
                                    ? 'border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-emerald-500/10 text-cyan-500'
                                    : isLight
                                        ? 'border-gray-200 bg-white text-gray-600 hover:border-cyan-300'
                                        : 'border-white/10 bg-white/5 text-gray-400 hover:border-cyan-400/30'
                                    }`}
                            >
                                {l}
                            </motion.button>
                        ))}
                    </div>
                    <div className="ml-2 flex items-center gap-2">
                        <ThemeButton active={theme === 'dark'} icon={Moon} label={t.theme.dark} onClick={() => setTheme('dark')} isLight={isLight} />
                        <ThemeButton active={theme === 'light'} icon={Sun} label={t.theme.light} onClick={() => setTheme('light')} isLight={isLight} />
                        <ThemeButton active={theme === 'system'} icon={Monitor} label={t.theme.system} onClick={() => setTheme('system')} isLight={isLight} />
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className={`inline-flex rounded-xl border p-2.5 transition xl:hidden ${isLight
                        ? 'border-gray-200 bg-white text-gray-700 hover:border-cyan-300'
                        : 'border-white/10 bg-white/5 text-gray-200 hover:border-cyan-400/40'
                        }`}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.button>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`mx-auto mt-3 max-w-6xl rounded-2xl border p-5 backdrop-blur-2xl xl:hidden ${isLight
                            ? 'border-gray-200/60 bg-white/90'
                            : 'border-white/10 bg-gray-900/90'
                            }`}
                    >
                        <div className="mb-4 flex flex-wrap gap-2">
                            {['en', 'uz', 'ru'].map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase ${lang === l
                                        ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-500'
                                        : isLight
                                            ? 'border-gray-200 bg-white text-gray-600'
                                            : 'border-white/10 bg-white/5 text-gray-400'
                                        }`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                            <ThemeButton active={theme === 'dark'} icon={Moon} label={t.theme.dark} onClick={() => setTheme('dark')} isLight={isLight} />
                            <ThemeButton active={theme === 'light'} icon={Sun} label={t.theme.light} onClick={() => setTheme('light')} isLight={isLight} />
                            <ThemeButton active={theme === 'system'} icon={Monitor} label={t.theme.system} onClick={() => setTheme('system')} isLight={isLight} />
                        </div>
                        <div className="flex flex-col gap-1">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    href={`#${item}`}
                                    onClick={() => setMenuOpen(false)}
                                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${isLight
                                        ? 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600'
                                        : 'text-gray-200 hover:bg-white/5 hover:text-cyan-300'
                                        }`}
                                >
                                    {t.nav[item]}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
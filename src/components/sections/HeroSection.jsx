import { motion, useTransform } from 'framer-motion';
import {
    ChevronRight,
    Send,
    Star,
    ScanSearch,
    Rocket,
    Layers,
    Zap,
    Smartphone,
} from 'lucide-react';
import GlassCard from '../GlassCard';
import MagneticButton from '../MagneticButton';

const previewIcons = [Rocket, Layers, Zap, Smartphone];

export default function HeroSection({ heroRef, scrollYProgress, t, isLight }) {
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section id="home" ref={heroRef} className="px-4 pb-24 pt-32 md:pt-40">
            <motion.div
                style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
            >
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className={`mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm ${isLight
                            ? 'border-gray-200 bg-white/80 text-gray-600 shadow-sm'
                            : 'border-white/10 bg-white/5 text-gray-300'
                            }`}
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        >
                            <Star size={16} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                        </motion.div>
                        {t.topBadge}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl"
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`block bg-clip-text text-transparent ${isLight
                                ? 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800'
                                : 'bg-gradient-to-r from-white via-gray-200 to-gray-400'
                                }`}
                        >
                            {t.heroTitle1}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-400 bg-clip-text text-transparent"
                        >
                            {t.heroTitle2}
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className={`mt-8 max-w-2xl text-base leading-8 md:text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'
                            }`}
                    >
                        {t.heroDesc}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <MagneticButton
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30"
                        >
                            {t.viewProjects}
                            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </MagneticButton>
                        <MagneticButton
                            href="#contact"
                            className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-8 py-4 font-semibold transition-all ${isLight
                                ? 'border-gray-200 bg-white text-gray-800 hover:border-cyan-300 hover:shadow-lg'
                                : 'border-white/10 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-white/10'
                                }`}
                        >
                            {t.contactMe}
                            <Send size={18} />
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-10 flex flex-wrap gap-3"
                    >
                        {t.techPills.map((item, i) => (
                            <motion.span
                                key={item}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + i * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`rounded-full border px-4 py-2 text-sm backdrop-blur transition-all ${isLight
                                    ? 'border-gray-200 bg-white/80 text-gray-700 hover:border-cyan-300 hover:shadow-md'
                                    : 'border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/30'
                                    }`}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    <div className="absolute -inset-20 rounded-full bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-transparent blur-3xl" />
                    <GlassCard isLight={isLight} className="p-6">
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-3.5 w-3.5 rounded-full bg-rose-400" />
                            <span className="h-3.5 w-3.5 rounded-full bg-amber-400" />
                            <span className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
                            <span className={`ml-auto text-xs ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                                portfolio.jsx
                            </span>
                        </div>

                        <div className={`rounded-2xl border p-5 ${isLight
                            ? 'border-gray-200 bg-gray-50'
                            : 'border-white/10 bg-[#080c14]'
                            }`}>
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <div className={`text-xs uppercase tracking-[0.25em] ${isLight ? 'text-cyan-600' : 'text-cyan-400'
                                        }`}>
                                        {t.previewEyebrow}
                                    </div>
                                    <div className={`mt-2 text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                                        {t.previewTitle}
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className={`rounded-2xl border p-3 ${isLight
                                        ? 'border-gray-200 bg-white'
                                        : 'border-white/10 bg-white/5'
                                        }`}
                                >
                                    <ScanSearch size={24} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                                </motion.div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {t.previewCards.map((card, index) => {
                                    const Icon = previewIcons[index];
                                    return (
                                        <motion.div
                                            key={card.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            className={`rounded-xl border p-4 transition-all ${isLight
                                                ? 'border-gray-200 bg-white hover:border-cyan-200 hover:shadow-md'
                                                : 'border-white/10 bg-white/5 hover:border-cyan-500/20'
                                                }`}
                                        >
                                            <Icon size={20} className={`mb-3 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                                            <div className={`text-xs uppercase tracking-[0.2em] ${isLight ? 'text-gray-500' : 'text-gray-500'
                                                }`}>
                                                {card.label}
                                            </div>
                                            <div className={`mt-1.5 text-sm font-semibold ${isLight ? 'text-gray-900' : 'text-gray-100'
                                                }`}>
                                                {card.value}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </motion.div>
        </section>
    );
}
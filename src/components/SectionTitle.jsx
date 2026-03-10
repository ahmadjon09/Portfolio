import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SectionTitle({ eyebrow, title, text, isLight }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-16 max-w-3xl text-center"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`mb-4 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.3em] ${isLight
                    ? 'border-cyan-200 bg-gradient-to-r from-cyan-50 to-emerald-50 text-cyan-700'
                    : 'border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 text-cyan-400'
                    }`}
            >
                <Sparkles size={14} className="animate-pulse" />
                {eyebrow}
                <Sparkles size={14} className="animate-pulse" />
            </motion.div>
            <h2 className={`mb-5 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl ${isLight ? 'text-gray-900' : 'text-white'
                }`}>
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-white" style={{
                    backgroundImage: isLight
                        ? 'linear-gradient(to right, #111827, #374151, #111827)'
                        : 'linear-gradient(to right, #ffffff, #d1d5db, #ffffff)'
                }}>
                    {title}
                </span>
            </h2>
            {text && (
                <p className={`mx-auto max-w-2xl text-base leading-relaxed md:text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                    {text}
                </p>
            )}
        </motion.div>
    );
}
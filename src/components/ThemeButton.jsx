import { motion } from 'framer-motion';

export default function ThemeButton({ active, icon: Icon, label, onClick, isLight }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-all ${active
                ? 'border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-emerald-500/10 text-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                : isLight
                    ? 'border-gray-200 bg-white text-gray-600 hover:border-cyan-300 hover:text-cyan-600'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-cyan-400/30 hover:text-cyan-300'
                }`}
        >
            <Icon size={14} />
            {label}
        </motion.button>
    );
}
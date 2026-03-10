import { motion } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';

export default function GlassCard({ children, className = '', isLight, delay = 0 }) {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        setRotateX(-mouseY / 20);
        setRotateY(mouseX / 20);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setRotateX(0);
        setRotateY(0);
    }, []);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
            }}
            className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 ${isLight
                ? 'border-gray-200/80 bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]'
                : 'border-white/10 bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-cyan-500/20'
                } ${className}`}
        >
            {/* Premium shine effect */}
            <div
                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100 ${isLight
                    ? 'bg-gradient-to-br from-white/40 via-transparent to-transparent'
                    : 'bg-gradient-to-br from-white/10 via-transparent to-transparent'
                    }`}
                style={{ transform: 'translateZ(20px)' }}
            />
            {children}
        </motion.div>
    );
}
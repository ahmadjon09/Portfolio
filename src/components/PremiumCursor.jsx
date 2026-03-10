import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function PremiumCursor({ isLight }) {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.5 });
    const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.5 });

    const glowX = useSpring(cursorX, { damping: 40, stiffness: 150, mass: 0.8 });
    const glowY = useSpring(cursorY, { damping: 40, stiffness: 150, mass: 0.8 });

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Large ambient glow */}
            <motion.div
                className="pointer-events-none fixed z-30 hidden lg:block"
                style={{
                    x: useTransform(glowX, (v) => v - 200),
                    y: useTransform(glowY, (v) => v - 200),
                    width: 400,
                    height: 400,
                }}
            >
                <div className={`h-full w-full rounded-full blur-[100px] ${isLight
                    ? 'bg-gradient-to-br from-cyan-400/15 via-emerald-400/10 to-transparent'
                    : 'bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-transparent'
                    }`} />
            </motion.div>

            {/* Small cursor dot */}
            <motion.div
                className={`pointer-events-none fixed z-50 hidden lg:block ${isLight ? 'mix-blend-multiply' : 'mix-blend-screen'
                    }`}
                style={{
                    x: useTransform(cursorXSpring, (v) => v - 6),
                    y: useTransform(cursorYSpring, (v) => v - 6),
                }}
            >
                <div className={`h-3 w-3 rounded-full ${isLight
                    ? 'bg-cyan-600 shadow-[0_0_20px_rgba(8,145,178,0.6)]'
                    : 'bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]'
                    }`} />
            </motion.div>

            {/* Cursor ring */}
            <motion.div
                className="pointer-events-none fixed z-40 hidden lg:block"
                style={{
                    x: useTransform(cursorXSpring, (v) => v - 20),
                    y: useTransform(cursorYSpring, (v) => v - 20),
                }}
            >
                <div className={`h-10 w-10 rounded-full border-2 ${isLight
                    ? 'border-cyan-500/30'
                    : 'border-cyan-400/30'
                    }`} />
            </motion.div>
        </>
    );
}
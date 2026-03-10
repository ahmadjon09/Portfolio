import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function FloatingOrbs({ isLight }) {
    const orbs = useMemo(() => [
        { size: 600, x: '10%', y: '20%', duration: 25, delay: 0, color: isLight ? 'cyan-300/20' : 'cyan-500/15' },
        { size: 500, x: '70%', y: '60%', duration: 30, delay: 5, color: isLight ? 'emerald-300/15' : 'emerald-500/10' },
        { size: 400, x: '85%', y: '10%', duration: 20, delay: 10, color: isLight ? 'sky-300/15' : 'sky-500/10' },
        { size: 350, x: '20%', y: '75%', duration: 35, delay: 8, color: isLight ? 'teal-300/20' : 'teal-500/15' },
    ], [isLight]);

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full bg-${orb.color} blur-[120px]`}
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: orb.x,
                        top: orb.y,
                        background: isLight
                            ? i % 2 === 0 ? 'rgba(34, 211, 238, 0.12)' : 'rgba(52, 211, 153, 0.1)'
                            : i % 2 === 0 ? 'rgba(34, 211, 238, 0.08)' : 'rgba(52, 211, 153, 0.06)',
                    }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -40, 30, 0],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
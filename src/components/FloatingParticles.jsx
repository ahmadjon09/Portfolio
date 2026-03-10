import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function FloatingParticles({ isLight }) {
    const particles = useMemo(
        () =>
            Array.from({ length: 30 }, (_, i) => ({
                id: i,
                left: `${(i * 37 + 10) % 100}%`,
                top: `${(i * 23 + 5) % 100}%`,
                duration: 6 + (i % 8),
                delay: i * 0.2,
                size: 2 + (i % 3),
            })),
        []
    );

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute rounded-full ${isLight ? 'bg-cyan-600/30' : 'bg-cyan-400/40'
                        }`}
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
}
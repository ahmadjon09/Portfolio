import { motion } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';

export default function MagneticButton({ children, className = '', href, onClick, isLight }) {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setPosition({
            x: (e.clientX - centerX) * 0.15,
            y: (e.clientY - centerY) * 0.15,
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    const ButtonContent = (
        <motion.span
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="inline-flex items-center gap-2"
        >
            {children}
        </motion.span>
    );

    const commonProps = {
        ref: buttonRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className,
    };

    if (href) {
        return (
            <a {...commonProps} href={href}>
                {ButtonContent}
            </a>
        );
    }

    return (
        <button {...commonProps} onClick={onClick}>
            {ButtonContent}
        </button>
    );
}
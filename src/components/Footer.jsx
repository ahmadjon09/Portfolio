import { motion } from 'framer-motion';
import { Github, Mail, MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '../constants/config';

const socialIcons = [Github, Mail, MessageCircle, Phone];

export default function Footer({ t, isLight }) {
    return (
        <motion.footer
            className={`relative z-10 border-t px-4 py-10 ${isLight ? 'border-gray-200' : 'border-white/10'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
                <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                    {t.footer.text}
                </p>
                <div className={`flex items-center gap-6 text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                    <a href="#home" className={`transition hover:text-cyan-500`}>{t.footer.top}</a>
                    <a href="#projects" className={`transition hover:text-cyan-500`}>{t.footer.projects}</a>
                    <a href="#contact" className={`transition hover:text-cyan-500`}>{t.footer.contact}</a>
                </div>
                <div className="flex items-center gap-4">
                    {[CONTACT.github, CONTACT.email, CONTACT.telegram, CONTACT.phone].map((item, index) => {
                        const Icon = socialIcons[index];
                        return (
                            <motion.a
                                key={item.label}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className={`rounded-full border p-2 transition-all ${isLight
                                    ? 'border-gray-200 bg-white hover:border-cyan-300 hover:shadow-lg'
                                    : 'border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/10'
                                    }`}
                            >
                                <Icon size={16} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </motion.footer>
    );
}
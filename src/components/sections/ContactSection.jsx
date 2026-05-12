import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    Mail,
    MessageCircle,
    Phone,
    ArrowUpRight,
    CheckCircle2,
    AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import GlassCard from '../GlassCard';
import MagneticButton from '../MagneticButton';
import SectionTitle from '../SectionTitle';
import { CONTACT } from '../../constants/config';
import { sendToTelegram } from '../../utils/telegram';

const contactIcons = [Github, Mail, MessageCircle, Phone];

export default function ContactSection({ t, lang, isLight }) {
    const [form, setForm] = useState({ name: '', email: '', telegram: '', phone: '', message: '' });
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState({ type: '', text: '' });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (sending) return;

        setSending(true);
        setStatus({ type: '', text: '' });

        try {
            const success = await sendToTelegram(form, lang);

            if (success) {
                setStatus({ type: 'success', text: t.contact.success });
                setForm({ name: '', email: '', telegram: '', phone: '', message: '' });
            } else {
                try {
                    const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ...form, lang }),
                    });

                    if (res.ok) {
                        setStatus({ type: 'success', text: t.contact.success });
                        setForm({ name: '', email: '', telegram: '', phone: '', message: '' });
                    } else {
                        throw new Error('API failed');
                    }
                } catch {
                    setStatus({ type: 'error', text: t.contact.error });
                }
            }
        } catch (error) {
            setStatus({ type: 'error', text: t.contact.error });
        } finally {
            setSending(false);
        }
    };

    return (
        <motion.section
            id="contact"
            className="px-4 pb-24 pt-24 md:pt-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="mx-auto max-w-6xl">
                <SectionTitle
                    eyebrow={t.contact.eyebrow}
                    title={t.contact.title}
                    text={t.contact.text}
                    isLight={isLight}
                />
                <GlassCard isLight={isLight} className="p-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                        <div>
                            <h3 className={`mb-4 text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                                {t.contact.panelTitle}
                            </h3>
                            <p className={`mb-6 text-base leading-8 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                                {t.contact.panelDesc}
                            </p>
                            <div className="space-y-3">
                                {[CONTACT.github, CONTACT.email, CONTACT.telegram, CONTACT.phone].map((item, index) => {
                                    const Icon = contactIcons[index];
                                    return (
                                        <motion.a
                                            key={item.label}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className={`flex items-center gap-4 rounded-2xl border px-4 py-4 transition-all ${isLight
                                                ? 'border-gray-200 bg-gray-50 hover:border-cyan-300 hover:shadow-lg'
                                                : 'border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/10'
                                                }`}
                                        >
                                            <div className={`rounded-xl border p-2.5 ${isLight
                                                ? 'border-gray-200 bg-white'
                                                : 'border-white/10 bg-white/5'
                                                }`}>
                                                <Icon size={20} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                                            </div>
                                            <div>
                                                <div className={`text-xs uppercase tracking-[0.2em] ${isLight ? 'text-gray-500' : 'text-gray-500'
                                                    }`}>
                                                    {item.label}
                                                </div>
                                                <div className={`font-medium ${isLight ? 'text-gray-900' : 'text-gray-200'}`}>
                                                    {item.value}
                                                </div>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className={`mb-2 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                    {t.contact.name}
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleInput}
                                    type="text"
                                    placeholder={t.contact.namePlaceholder}
                                    required
                                    className={`w-full rounded-2xl border px-4 py-4 outline-none transition-all ${isLight
                                        ? 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                                        : 'border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
                                        }`}
                                />
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className={`mb-2 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                        {t.contact.email}
                                    </label>
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleInput}
                                        type="email"
                                        placeholder={t.contact.emailPlaceholder}
                                        className={`w-full rounded-2xl border px-4 py-4 outline-none transition-all ${isLight
                                            ? 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                                            : 'border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
                                            }`}
                                    />
                                </div>
                                <div>
                                    <label className={`mb-2 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                        {t.contact.phone}
                                    </label>
                                    <input
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleInput}
                                        type="text"
                                        placeholder={t.contact.phonePlaceholder}
                                        className={`w-full rounded-2xl border px-4 py-4 outline-none transition-all ${isLight
                                            ? 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                                            : 'border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
                                            }`}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className={`mb-2 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                    {t.contact.telegramUsername}
                                </label>
                                <input
                                    name="telegram"
                                    value={form.telegram}
                                    onChange={handleInput}
                                    type="text"
                                    placeholder={t.contact.telegramPlaceholder}
                                    className={`w-full rounded-2xl border px-4 py-4 outline-none transition-all ${isLight
                                        ? 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                                        : 'border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
                                        }`}
                                />
                            </div>
                            <div>
                                <label className={`mb-2 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                    {t.contact.message}
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleInput}
                                    rows={5}
                                    placeholder={t.contact.messagePlaceholder}
                                    required
                                    className={`w-full rounded-2xl border px-4 py-4 outline-none transition-all resize-none ${isLight
                                        ? 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                                        : 'border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
                                        }`}
                                />
                            </div>

                            <MagneticButton
                                onClick={handleSubmit}
                                className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {sending ? t.contact.sending : t.contact.sendMessage}
                                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </MagneticButton>

                            <AnimatePresence>
                                {status.text && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className={`flex items-center gap-3 rounded-2xl border px-5 py-4 ${status.type === 'success'
                                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600'
                                            : 'border-rose-500/30 bg-rose-500/10 text-rose-600'
                                            }`}
                                    >
                                        {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                                        <span className="font-medium">{status.text}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </GlassCard>
            </div>
        </motion.section>
    );
}
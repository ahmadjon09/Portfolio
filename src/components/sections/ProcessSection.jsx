import { Lightbulb, Paintbrush, Code2, Rocket } from 'lucide-react';
import GlassCard from '../GlassCard';
import SectionTitle from '../SectionTitle';

const processIcons = [Lightbulb, Paintbrush, Code2, Rocket];

export default function ProcessSection({ t, isLight }) {
    return (
        <section className="px-4 py-24 md:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    eyebrow={t.process.eyebrow}
                    title={t.process.title}
                    text={t.process.text}
                    isLight={isLight}
                />
                <div className="grid gap-5 md:grid-cols-4">
                    {t.process.steps.map((item, index) => {
                        const Icon = processIcons[index];
                        return (
                            <GlassCard key={item.step} isLight={isLight} delay={index * 0.1} className="p-6 text-center">
                                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-cyan-500/30 via-emerald-500/20 to-transparent blur-2xl`} />
                                <div className="relative">
                                    <div className={`mb-4 text-6xl font-black ${isLight ? 'text-gray-100' : 'text-white/5'
                                        }`}>
                                        {item.step}
                                    </div>
                                    <Icon size={32} className={`mx-auto mb-4 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                                    <h3 className={`mb-3 text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm leading-7 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
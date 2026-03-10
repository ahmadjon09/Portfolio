import { Code2, Server, Database, Rocket } from 'lucide-react';
import GlassCard from '../GlassCard';
import SectionTitle from '../SectionTitle';

const aboutIcons = [Code2, Server, Database, Rocket];

export default function AboutSection({ t, isLight }) {
    return (
        <section id="about" className="px-4 py-24 md:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    eyebrow={t.about.eyebrow}
                    title={t.about.title}
                    text={t.about.text}
                    isLight={isLight}
                />
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <GlassCard isLight={isLight} className="p-8">
                        <h3 className={`mb-5 text-3xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                            {t.about.heading}
                        </h3>
                        <div className={`space-y-5 text-base leading-8 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                        </div>
                    </GlassCard>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {t.about.cards.map((item, index) => {
                            const Icon = aboutIcons[index];
                            return (
                                <GlassCard key={item.title} isLight={isLight} delay={index * 0.1} className="p-6">
                                    <Icon size={28} className={`mb-4 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                                    <h4 className={`mb-2 text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                                        {item.title}
                                    </h4>
                                    <p className={`text-sm leading-7 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                                        {item.value}
                                    </p>
                                </GlassCard>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
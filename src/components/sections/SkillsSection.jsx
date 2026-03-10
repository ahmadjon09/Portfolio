import { Code2, Server, Database } from 'lucide-react';
import SkillCard from '../SkillCard';
import SectionTitle from '../SectionTitle';
import { skillContent } from '../../constants/data';

export default function SkillsSection({ t, isLight }) {
    return (
        <section id="skills" className="px-4 py-24 md:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    eyebrow={t.skills.eyebrow}
                    title={t.skills.title}
                    text={t.skills.text}
                    isLight={isLight}
                />
                <div className="grid gap-6 lg:grid-cols-3">
                    <SkillCard
                        title={t.skills.frontend}
                        icon={Code2}
                        colorClass="from-cyan-500/40 via-cyan-400/20 to-transparent"
                        items={skillContent.frontend}
                        isLight={isLight}
                    />
                    <SkillCard
                        title={t.skills.backend}
                        icon={Server}
                        colorClass="from-emerald-500/40 via-emerald-400/20 to-transparent"
                        items={skillContent.backend}
                        isLight={isLight}
                    />
                    <SkillCard
                        title={t.skills.database}
                        icon={Database}
                        colorClass="from-sky-500/40 via-sky-400/20 to-transparent"
                        items={skillContent.database}
                        isLight={isLight}
                    />
                </div>
            </div>
        </section>
    );
}
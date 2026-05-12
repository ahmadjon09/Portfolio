import { motion } from 'framer-motion';
import { ExternalLink, FolderKanban, Hexagon } from 'lucide-react';
import GlassCard from './GlassCard';
import MagneticButton from './MagneticButton';

export default function ProjectCard({ project, index, lang, labels, isLight }) {
    const description =
        lang === 'uz' ? project.descriptionUz : lang === 'ru' ? project.descriptionRu : project.descriptionEn;

    return (
        <GlassCard isLight={isLight} delay={index * 0.1} className="group p-6">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`} />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at top right, rgba(34,211,238,0.15), transparent 50%)' }} />

            <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className={`mb-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider ${isLight
                                ? 'border-cyan-200 bg-cyan-50 text-cyan-700'
                                : 'border-cyan-400/30 bg-cyan-400/10 text-cyan-400'
                                }`}
                        >
                            <Hexagon size={12} />
                            {project.type}
                        </motion.span>
                        <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                            {project.title}
                        </h3>
                    </div>
                    <div className={`rounded-2xl border p-3 transition-transform duration-300 group-hover:rotate-12 ${isLight
                        ? 'border-gray-200 bg-white shadow-sm'
                        : 'border-white/10 bg-white/5'
                        }`}>
                        <FolderKanban size={24} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                    </div>
                </div>

                {/* Code preview mockup */}
                <div className={`mb-6 overflow-hidden rounded-2xl border ${isLight
                    ? 'border-gray-200 bg-gray-50'
                    : 'border-white/10 bg-[#0a0d14]'
                    }`}>
                    <img src={project.img} alt={project.title} loading='lazy' />
                </div>

                <p className={`mb-5 text-sm leading-7 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>
                    {description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <motion.span
                            key={item}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${isLight
                                ? 'border-gray-200 bg-white text-gray-700 hover:border-cyan-300 hover:text-cyan-700'
                                : 'border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300'
                                }`}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>

                <MagneticButton
                    href={project.link}
                    className={`group/link inline-flex items-center gap-2 text-sm font-medium transition ${isLight ? 'text-cyan-600 hover:text-cyan-700' : 'text-cyan-400 hover:text-cyan-300'
                        }`}
                >
                    {labels.livePreview}
                    <ExternalLink size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </MagneticButton>
            </div>
        </GlassCard>
    );
}
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function SkillCard({ title, icon: Icon, colorClass, items, isLight }) {
    return (
        <GlassCard isLight={isLight} className="p-7">
            <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-r ${colorClass} opacity-60 blur-3xl`} />
            <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                    <div className={`rounded-2xl border p-3.5 ${isLight
                        ? 'border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm'
                        : 'border-white/10 bg-gradient-to-br from-white/10 to-white/5'
                        }`}>
                        <Icon className={isLight ? 'text-cyan-600' : 'text-cyan-400'} size={26} />
                    </div>
                    <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {title}
                    </h3>
                </div>

                <div className="space-y-4">
                    {items.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.02] ${isLight
                                ? 'border-gray-100 bg-gradient-to-r from-gray-50/80 to-white/80 hover:border-cyan-200 hover:shadow-md'
                                : 'border-white/5 bg-gradient-to-r from-white/5 to-transparent hover:border-cyan-500/20'
                                }`}
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <skill.icon size={18} className={isLight ? 'text-cyan-600' : 'text-cyan-400'} />
                                    <span className={`font-medium ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                                        {skill.name}
                                    </span>
                                </div>
                                <span className={`text-sm font-semibold ${isLight ? 'text-cyan-600' : 'text-cyan-400'
                                    }`}>
                                    {skill.level}%
                                </span>
                            </div>
                            <div className={`h-2.5 overflow-hidden rounded-full ${isLight ? 'bg-gray-200' : 'bg-white/10'
                                }`}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </GlassCard>
    );
}
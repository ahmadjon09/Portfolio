import ProjectCard from '../ProjectCard';
import SectionTitle from '../SectionTitle';
import { projectContent } from '../../constants/data';

export default function ProjectsSection({ t, lang, isLight }) {
    return (
        <section id="projects" className="px-4 py-24 md:py-32">
            <div className="mx-auto max-w-7xl">
                <SectionTitle
                    eyebrow={t.projects.eyebrow}
                    title={t.projects.title}
                    text={t.projects.text}
                    isLight={isLight}
                />
                <div className="grid gap-6 md:grid-cols-2">
                    {projectContent.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            lang={lang}
                            labels={t.projects}
                            isLight={isLight}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

function Projects({ onSelectProject }) {
    return (
        <section id="projects" className={styles.section}>
            <div className='container'>
                <div className={styles.label}>&gt; ls projects/</div>
                <div className={styles.grid}>
                    {projects.map((p) => (
                        <ProjectCard
                            key={p.id}
                            title={p.title}
                            tech={p.tech}
                            description={p.description}
                            status={p.status}
                            onClick={() => onSelectProject(p.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
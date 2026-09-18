import styles from './ProjectModal.module.css'

function ProjectModal({ project, onClose }) {
    if (!project) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.headerRow}>
                    <div>
                        <div className={styles.logLine}>&gt; cat {project.id}.log</div>
                        <h2 className={styles.title}>{project.title}</h2>
                    </div>
                    <button onClick={onClose} className={styles.closeButton}>X</button>
                </div>

                <p className={styles.classification}>{project.classification}</p>
                <p className={styles.detail}>{project.detail}</p>

                <div className={styles.metricsBox}>
                    {project.metrics.map((m, i) => (
                        <div key={i}>&gt; {m}</div>
                    ))}
                </div>

                <p className={styles.stack}>stack: {project.tech}</p>

                {(project.repoUrl || project.liveUrl) && (
                    <div className={styles.linkRow}> 
                    {project.repoUrl && ( <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.linkBtn}> &gt; Repositorio</a> )}
                    {project.liveUrl && ( <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.linkBtn}> &gt; Ver demo</a> )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectModal
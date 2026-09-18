import { useRef } from 'react'
import styles from './ProjectCard.module.css'

function ProjectCard({ title, tech, description, status, onClick }) {
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        const card = cardRef.current
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const xRotation = -y / 15
        const yRotation = x / 15
        card.style.transform = `translateY(-8px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
    }

    const handleMouseLeave = () => {
        cardRef.current.style.transform = ''
    }

    const statusClass = status === 'terminado' ? styles.statusDone : styles.statusProgress

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={styles.card}
        >

            <div className={styles.headerRow}>
                <h3 className={styles.title}>{title}</h3>
                <span className={`${styles.status} ${statusClass}`}>{status}</span>
            </div>

            <p className={styles.tech}>{tech}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default ProjectCard
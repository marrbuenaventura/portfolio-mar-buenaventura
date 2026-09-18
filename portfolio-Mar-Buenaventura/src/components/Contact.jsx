import styles from './Contact.module.css'
import { useState } from 'react'

function Contact() {
    const [copied, setCopied] = useState(false)
    const email = 'martinabuenaventura2024@gmail.com'

    const handleEmailClick = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Error al copiar el correo:', error)
        }
    }

    return (
        <section id="contact" className={styles.section}>
            <div className='container'>
                <div className={styles.label}>&gt; ./contact.sh</div>
                <div className={styles.linkRow}>
                    <a href="https://github.com/marrbuenaventura" target="_blank" rel="noreferrer" className={`${styles.link} ${styles.linkGithub}`}>GITHUB</a>
                    <a href="https://www.linkedin.com/in/martina-buenaventura-743872338/" target="_blank" rel="noreferrer" className={`${styles.link} ${styles.linkLinkedin}`}>LINKEDIN</a>
                    <a href={`mailto:${email}`} className={`${styles.link} ${styles.linkEmail}`} onClick={handleEmailClick}>
                        {copied ? 'Correo copiado' : 'EMAIL'}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
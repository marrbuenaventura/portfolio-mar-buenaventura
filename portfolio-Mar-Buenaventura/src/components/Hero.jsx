import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={styles.section}>
            <div className='container'>
                <div className={styles.prompt}>&gt; whoami</div>
                <h1 className={styles.title}>Martina Buenaventura</h1>
                <p className={styles.description}>
                    Estudiante de Programación (UTN Avellaneda), 2do año.\nEnfocada en desarrollo full-stack y seguridad.\nConstruyo herramientas completas: de apps de escritorio a APIs y sistemas web.
                </p>
            </div>
        </section>
    )
}

export default Hero
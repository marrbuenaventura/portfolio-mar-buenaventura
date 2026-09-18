import styles from './Nav.module.css'

function Nav() {
    return (
        <header className={styles.header}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={styles.logoContainer}>
                    <span className={styles.statusDot} />
                    <span className={styles.logo}>M.BUENAVENTURA</span>
                </div>

                <nav className={styles.nav}>
                    <a href="#about" className={styles.navLink}>ABOUT</a>
                    <a href="#projects" className={styles.navLink}>PROYECTOS</a>
                    <a href="#contact" className={styles.navLink}>CONTACTO</a>
                </nav>
            </div>
        </header>
    )
}

export default Nav
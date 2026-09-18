import { useState, useRef, useEffect } from 'react'
import styles from './AboutTerminal.module.css'

const commands = {
    about: '>> Estudiante de Programación (UTN Avellaneda), 2do año.\nEnfocada en desarrollo full-stack y seguridad.\nConstruyo herramientas completas: de apps de escritorio a APIs y sistemas web.',
    skills: '>> APTITUDES:\n* frontend: React, Angular, JS, HTML/CSS\n* backend: Node.js, Express, MySQL\n* mobile: Ionic\n* desktop: Electron\n* otros: Python',
    projects: '>> PROYECTOS DETECTADOS:\n1. Sport & Sweet - Backend full-stack (Node + MySQL)\n2. QResto - App móvil (Ionic + Angular) [en progreso]\n3. CineCon - Gestión de cine (Angular + Supabase) [en progreso]\n4. Pa Siempre - App de escritorio (React + Electron)\n5. Weather Widget - Integración de API\n6. Sticky Notes - CRUD + Electron\n\nEscribí "ver proyectos" para ir a la sección.',
}

const helpText = `Comandos disponibles:
  help      - Muestra esta lista
  about     - Perfil
  skills    - Aptitudes técnicas
  projects  - Lista de proyectos
  clear     - Limpia la pantalla`

function AboutTerminal({ onGoToProjects }) {
    const [history, setHistory] = useState([helpText])
    const [input, setInput] = useState('')
    const bodyRef = useRef(null)

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight
        }
    }, [history])

    const handleKeyDown = (e) => {
        if (e.key !== 'Enter') return
        const val = input.trim().toLowerCase()
        if (val === '') return

        let response = ''
        if (val === 'help') response = helpText
        else if (val === 'clear') {
            setHistory([])
            setInput('')
            return
        } else if (val === 'ver proyectos') {
            response = 'Abriendo proyectos...'
            onGoToProjects?.()
        } else if (commands[val]) response = commands[val]
        else response = `Comando no reconocido: '${val}'. Escribí 'help'.`

        setHistory((prev) => [...prev, `> ${input}`, response])
        setInput('')
    }

    return (
        <section id="about" className={styles.section}>
            <div className='container'>
                <div className={styles.label}>&gt; ./about.sh</div>

                <div className={styles.terminal}>
                    <div className={styles.terminalHeader}>martina@portfolio:~</div>

                    <div ref={bodyRef} className={styles.terminalBody}>
                        {history.map((line, i) => (
                            <div key={i} className={line.startsWith('>') ? styles.commandLine : styles.historyLine}>
                                {line}
                            </div>
                        ))}
                    </div>

                    <div className={styles.inputRow}>
                        <span className={styles.prompt}>&gt;</span>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="escribí 'help'"
                            className={styles.input}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTerminal
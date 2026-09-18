import { useState, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { projects } from './data/projects'
import ProjectModal from './components/ProjectModal'
import AboutTerminal from './components/AboutTerminal'
import Contact from './components/Contact'


function App() {
  const [selectedId, setSelectedId] = useState(null)
  const projectsRef = useRef(null)

  const selectedProject = projects.find((p) => p.id === selectedId) || null

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Nav />
      <Hero />
      <AboutTerminal onGoToProjects={scrollToProjects} />
      <div ref={projectsRef}>
        <Projects onSelectProject={setSelectedId} />
      </div>
      <Contact />
      <ProjectModal project={selectedProject} onClose={() => setSelectedId(null)} />
    </div>
  )
}

export default App
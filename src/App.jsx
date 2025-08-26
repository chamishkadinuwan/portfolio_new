import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="App">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Experience setActiveSection={setActiveSection} />
      <Education setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </div>
  )
}

export default App
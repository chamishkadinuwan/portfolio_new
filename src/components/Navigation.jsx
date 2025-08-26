import { useState } from 'react'

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={() => scrollToSection('home')}>
            Portfolio
          </a>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div 
            className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Navbar Container */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          z-index: 1000;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
        }

        /* Logo */
        .nav-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #111827;
          text-decoration: none;
          cursor: pointer;
        }

        /* Nav Menu */
        .nav-menu {
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          transition: color 0.3s, border-bottom 0.3s;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #1d4ed8;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #1d4ed8;
          border-radius: 2px;
        }

        /* Hamburger */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 25px;
          height: 18px;
          cursor: pointer;
        }

        .bar {
          height: 3px;
          width: 100%;
          background-color: #111827;
          border-radius: 2px;
          transition: all 0.3s;
        }

        /* Mobile Menu Active */
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 250px;
            background-color: #ffffff;
            flex-direction: column;
            align-items: flex-start;
            padding: 4rem 1.5rem;
            gap: 1.5rem;
            transition: right 0.3s ease-in-out;
            box-shadow: -2px 0 10px rgba(0,0,0,0.1);
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-hamburger {
            display: flex;
          }

          .nav-hamburger.active .bar:nth-child(1) {
            transform: rotate(45deg) translateY(7px);
          }
          .nav-hamburger.active .bar:nth-child(2) {
            opacity: 0;
          }
          .nav-hamburger.active .bar:nth-child(3) {
            transform: rotate(-45deg) translateY(-7px);
          }
        }
      `}</style>
    </>
  )
}

export default Navigation

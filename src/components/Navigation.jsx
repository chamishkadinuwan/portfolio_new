import { useState } from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a
            href="#home"
            className="nav-logo"
            onClick={() => scrollToSection('home')}
          >
            Portfolio
          </a>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
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
      
        /* Navigation.css - Premium Styling */

/* Navbar Container */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.navbar.scrolled {
  padding: 0.3rem 0;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
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
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-logo::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  transition: width 0.3s ease;
}

.nav-logo:hover::after {
  width: 100%;
}

/* Nav Menu */
.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #111827;
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 100%;
}

/* Hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  cursor: pointer;
  position: relative;
  z-index: 1001;
}

.bar {
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
}

.nav-hamburger.active .bar:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  background: #6366F1;
}

.nav-hamburger.active .bar:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.nav-hamburger.active .bar:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
  background: #EC4899;
}

/* Mobile Menu */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 280px;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem 2rem;
    gap: 2rem;
    transition: right 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 0.75rem 0;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .nav-link:hover::before,
  .nav-link.active::before {
    width: 40px;
  }

  .nav-hamburger {
    display: flex;
  }
}

/* Animation for menu items */
.nav-menu.active .nav-link {
  opacity: 0;
  transform: translateX(20px);
  animation: fadeInRight 0.5s ease forwards;
}

.nav-menu.active .nav-link:nth-child(1) {
  animation-delay: 0.1s;
}

.nav-menu.active .nav-link:nth-child(2) {
  animation-delay: 0.2s;
}

.nav-menu.active .nav-link:nth-child(3) {
  animation-delay: 0.3s;
}

.nav-menu.active .nav-link:nth-child(4) {
  animation-delay: 0.4s;
}

.nav-menu.active .nav-link:nth-child(5) {
  animation-delay: 0.5s;
}

.nav-menu.active .nav-link:nth-child(6) {
  animation-delay: 0.6s;
}

.nav-menu.active .nav-link:nth-child(7) {
  animation-delay: 0.7s;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .nav-container {
    padding: 0.75rem 1rem;
  }
  
  .nav-logo {
    font-size: 1.5rem;
  }
  
  .nav-menu {
    width: 100%;
    padding: 5rem 1.5rem;
  }
}

      `}</style>
    </>
  );
};

export default Navigation;

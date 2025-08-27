import { useState, useEffect } from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'experience', label: 'Experience', icon: '🚀' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Portfolio</span>
          </a>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
                <div className="nav-link-bg"></div>
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
        
        {/* Mobile menu overlay */}
        <div 
          className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        />
      </nav>

      <style jsx>{`
        /* Dark Modern Navigation Styles */
        
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(6, 10, 24, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.1);
          z-index: 1000;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0.5rem 0;
        }

        .navbar.scrolled {
          background: rgba(6, 10, 24, 0.95);
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          padding: 0.3rem 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          position: relative;
        }

        /* Logo Styles */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1001;
        }

        .logo-icon {
          font-size: 2rem;
          background: linear-gradient(135deg, #6366F1, #EC4899, #F59E0B);
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .nav-logo:hover .logo-icon {
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.5));
        }

        .nav-logo:hover .logo-text {
          background: linear-gradient(90deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Navigation Menu */
        .nav-menu {
          display: flex;
          gap: 0.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #9CA3AF;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          letter-spacing: 0.3px;
        }

        .nav-link-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }

        .nav-icon {
          font-size: 1.1rem;
          transition: all 0.3s ease;
          filter: grayscale(1) opacity(0.7);
        }

        .nav-text {
          transition: all 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
          transform: translateY(-2px);
        }

        .nav-link:hover .nav-link-bg,
        .nav-link.active .nav-link-bg {
          opacity: 1;
          transform: scale(1);
        }

        .nav-link:hover .nav-icon,
        .nav-link.active .nav-icon {
          filter: grayscale(0) opacity(1);
          transform: scale(1.1);
        }

        .nav-link.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.15));
          border: 1px solid rgba(99, 102, 241, 0.3);
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
        }

        /* Hamburger Menu */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          cursor: pointer;
          z-index: 1001;
          position: relative;
        }

        .bar {
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #6366F1, #EC4899);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
        }

        .nav-hamburger.active .bar:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
          background: #6366F1;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }

        .nav-hamburger.active .bar:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }

        .nav-hamburger.active .bar:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
          background: #EC4899;
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        }

        /* Menu Overlay */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Animations */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1.5rem;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 320px;
            background: linear-gradient(135deg, rgba(6, 10, 24, 0.98), rgba(17, 24, 39, 0.98));
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            align-items: stretch;
            padding: 6rem 2rem 2rem;
            gap: 0.5rem;
            transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-left: 1px solid rgba(99, 102, 241, 0.2);
            box-shadow: -10px 0 50px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-link {
            font-size: 1.1rem;
            padding: 1rem 1.5rem;
            border-radius: 16px;
            margin: 0.25rem 0;
            opacity: 0;
            transform: translateX(30px);
            animation: slideInRight 0.5s ease forwards;
            animation-delay: var(--delay);
          }

          .nav-hamburger {
            display: flex;
          }

          .logo-text {
            font-size: 1.3rem;
          }

          .logo-icon {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 1rem;
          }
          
          .nav-menu {
            width: 280px;
            padding: 5rem 1.5rem 2rem;
          }

          .nav-link {
            font-size: 1rem;
            padding: 0.875rem 1.25rem;
          }

          .logo-text {
            font-size: 1.2rem;
          }

          .logo-icon {
            font-size: 1.5rem;
          }
        }

        /* Dark theme enhancements */
        @media (prefers-color-scheme: dark) {
          .navbar {
            border-bottom-color: rgba(99, 102, 241, 0.15);
          }
        }

        /* Smooth scrolling for better UX */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Navigation;
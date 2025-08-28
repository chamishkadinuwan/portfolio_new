import React, { useState, useEffect } from 'react'

const Hero = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'UI/UX Enthusiast'
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Role rotation
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    // Mouse tracking for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(roleInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'chamishk-dinuwan-cv.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const socialLinks = [
    { name: 'GitHub', icon: '⭐', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Email', icon: '📧', url: 'mailto:chamishkadkulasinghe@gmail.com' }
  ]

  return (
    <>
      <section id="home" className="hero">
        {/* Animated Background */}
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="particles"></div>
        </div>

        <div className="hero-container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for new opportunities
            </div>

            <h1 className="hero-title">
              <span className="title-line">Hello, I'm</span>
              <span className="title-main">Chamishk Dinuwan</span>
            </h1>

            <div className="hero-subtitle-container">
              <span className="subtitle-prefix">A passionate</span>
              <h2 className="hero-subtitle">
                {roles.map((role, index) => (
                  <span 
                    key={role}
                    className={`role ${index === currentRole ? 'active' : ''}`}
                  >
                    {role}
                  </span>
                ))}
              </h2>
            </div>

            <p className="hero-description">
              Creating innovative web solutions with modern technologies and user-centered design. 
              Passionate about crafting beautiful, functional experiences that make a difference.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span className="btn-text">View My Work</span>
                <span className="btn-icon">🚀</span>
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleDownloadCV}
              >
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">📄</span>
              </button>
            </div>

            <div className="hero-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  title={social.name}
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
            <div 
              className="image-container"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            >
              <div className="image-frame">
                <div className="image-glow"></div>
                <img 
                  src="/myimage.jpg" 
                  alt="Chamishk Dinuwan" 
                  className="profile-image"
                />
                <div className="image-overlay">
                  <div className="tech-badge">React</div>
                  <div className="tech-badge">Node.js</div>
                  <div className="tech-badge">TypeScript</div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-icon">💻</div>
                <div className="floating-icon">⚡</div>
                <div className="floating-icon">🎨</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #EC4899, #F59E0B);
          top: 60%;
          right: 20%;
          animation-delay: -2s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #F59E0B, #10B981);
          bottom: 20%;
          left: 60%;
          animation-delay: -4s;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .hero-title {
          margin-bottom: 1rem;
        }

        .title-line {
          display: block;
          font-size: 1.5rem;
          color: #9CA3AF;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        .title-main {
          display: block;
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-subtitle-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          height: 3rem;
        }

        .subtitle-prefix {
          color: #9CA3AF;
          font-size: 1.5rem;
          font-weight: 400;
        }

        .hero-subtitle {
          position: relative;
          font-size: 1.5rem;
          font-weight: 600;
          height: 2rem;
          overflow: hidden;
        }

        .role {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: linear-gradient(135deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .role.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-description {
          font-size: 1.2rem;
          color: #D1D5DB;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 90%;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #9CA3AF;
          font-weight: 500;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border: none;
          cursor: pointer;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          min-width: 160px;
          justify-content: center;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-icon {
          transform: scale(1.2);
        }

        .hero-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.6s ease forwards;
          animation-delay: var(--delay);
        }

        .social-link:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-3px);
        }

        .social-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .social-link:hover .social-icon {
          transform: scale(1.2);
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .hero-image.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .image-container {
          position: relative;
          transition: transform 0.1s ease-out;
        }

        .image-frame {
          position: relative;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(99, 102, 241, 0.3);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .image-glow {
          position: absolute;
          inset: -10px;
          background: linear-gradient(135deg, #6366F1, #EC4899, #F59E0B);
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(20px);
          z-index: -1;
          animation: rotate 10s linear infinite;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(99, 102, 241, 0.1) 100%);
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-frame:hover .image-overlay {
          opacity: 1;
        }

        .tech-badge {
          background: rgba(255, 255, 255, 0.9);
          color: #1F2937;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .floating-icon {
          position: absolute;
          font-size: 2rem;
          filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.5));
          animation: float 3s ease-in-out infinite;
        }

        .floating-icon:nth-child(1) {
          top: 10%;
          right: -10%;
          animation-delay: 0s;
        }

        .floating-icon:nth-child(2) {
          bottom: 20%;
          left: -15%;
          animation-delay: -1s;
        }

        .floating-icon:nth-child(3) {
          top: 60%;
          right: -20%;
          animation-delay: -2s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #9CA3AF;
          font-size: 0.9rem;
          animation: bounce 2s infinite;
        }

        .scroll-arrow {
          width: 2px;
          height: 30px;
          background: linear-gradient(to bottom, transparent, #6366F1);
          margin-bottom: 0.5rem;
          position: relative;
        }

        .scroll-arrow::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 6px solid #6366F1;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-container {
            gap: 3rem;
          }

          .title-main {
            font-size: 3.5rem;
          }

          .image-frame {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 60px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
            padding: 1.5rem;
          }

          .title-main {
            font-size: 2.8rem;
          }

          .hero-subtitle-container {
            justify-content: center;
          }

          .hero-description {
            max-width: 100%;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .image-frame {
            width: 280px;
            height: 280px;
          }

          .floating-icon {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 1rem;
          }

          .title-main {
            font-size: 2.2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            min-width: 200px;
          }

          .hero-stats {
            gap: 1rem;
          }

          .image-frame {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </>
  )
}

export default Hero
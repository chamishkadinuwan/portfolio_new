import React, { useState, useEffect, useRef } from 'react'

const About = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStat, setHoveredStat] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  const stats = [
    { number: '3+', label: 'Years Experience', icon: '🚀', color: '#6366F1' },
    { number: '50+', label: 'Projects Completed', icon: '💼', color: '#EC4899' },
    { number: '25+', label: 'Happy Clients', icon: '😊', color: '#10B981' },
    { number: '15+', label: 'Technologies', icon: '⚡', color: '#F59E0B' }
  ]

  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'GraphQL', 'Next.js'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <section id="about" className="about" ref={sectionRef}>
        {/* Animated Background */}
        <div className="about-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="grid-pattern"></div>
        </div>

        <div className="container">
          <div className={`section-header ${isVisible ? 'visible' : ''}`}>
            <span className="section-badge">
              <span className="badge-icon">👨‍💻</span>
              Get to know me
            </span>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Crafting digital experiences with passion and precision
            </p>
          </div>

          <div className={`about-content ${isVisible ? 'visible' : ''}`}>
            <div className="about-main">
              <div className="about-text">
                <div className="text-block">
                  <div className="text-icon">💡</div>
                  <p>
                    I'm a passionate full-stack developer with <span className="highlight">3+ years</span> of experience creating 
                    innovative web applications. I specialize in JavaScript technologies including React, 
                    Node.js, and TypeScript, with a strong focus on <span className="highlight">responsive design</span> and 
                    exceptional user experience.
                  </p>
                </div>

                <div className="text-block">
                  <div className="text-icon">🎯</div>
                  <p>
                    My approach combines <span className="highlight">technical expertise</span> with creative problem-solving 
                    to deliver solutions that exceed expectations. I thrive on tackling complex challenges 
                    and continuously expanding my skill set to stay ahead of industry trends.
                  </p>
                </div>

                <div className="text-block">
                  <div className="text-icon">🌟</div>
                  <p>
                    When I'm not coding, you can find me contributing to <span className="highlight">open-source projects</span>, 
                    exploring cutting-edge technologies, or sharing knowledge through tech blogs and 
                    community events. I believe in the power of collaboration and continuous learning.
                  </p>
                </div>

                {/* Skills Cloud */}
                <div className="skills-cloud">
                  <h4 className="skills-title">Technologies I Love</h4>
                  <div className="skills-container">
                    {skills.map((skill, index) => (
                      <span 
                        key={skill}
                        className="skill-tag"
                        style={{ '--delay': `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="about-visual">
                <div 
                  className="visual-container"
                  style={{
                    transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                  }}
                >
                  <div className="code-window">
                    <div className="window-header">
                      <div className="window-controls">
                        <span className="control close"></span>
                        <span className="control minimize"></span>
                        <span className="control maximize"></span>
                      </div>
                      <span className="window-title">about-me.js</span>
                    </div>
                    <div className="code-content">
                      <div className="code-line">
                        <span className="keyword">const</span>
                        <span className="variable"> developer</span>
                        <span className="operator"> = </span>
                        <span className="bracket">{'{'}</span>
                      </div>
                      <div className="code-line indent">
                        <span className="property">name:</span>
                        <span className="string"> 'Chamishk'</span>
                        <span className="punctuation">,</span>
                      </div>
                      <div className="code-line indent">
                        <span className="property">role:</span>
                        <span className="string"> 'Full Stack'</span>
                        <span className="punctuation">,</span>
                      </div>
                      <div className="code-line indent">
                        <span className="property">passion:</span>
                        <span className="string"> 'Innovation'</span>
                      </div>
                      <div className="code-line">
                        <span className="bracket">{'}'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
              <h3 className="stats-title">My Journey in Numbers</h3>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`stat-card ${hoveredStat === index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    style={{ '--delay': `${index * 0.1}s`, '--color': stat.color }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <h4 className="stat-number">{stat.number}</h4>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                    <div className="stat-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-shape shape-1">⚡</div>
          <div className="floating-shape shape-2">💻</div>
          <div className="floating-shape shape-3">🚀</div>
          <div className="floating-shape shape-4">🎨</div>
        </div>
      </section>

      <style jsx>{`
        .about {
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .about-background {
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
          filter: blur(80px);
          opacity: 0.2;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: -10%;
          right: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #10B981, #F59E0B);
          bottom: -5%;
          left: -5%;
          animation-delay: -3s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #EC4899, #8B5CF6);
          top: 50%;
          left: 50%;
          animation-delay: -6s;
        }

        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #9CA3AF;
          font-weight: 400;
        }

        .about-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .about-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 6rem;
        }

        .about-text {
          color: #D1D5DB;
        }

        .text-block {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateX(-30px);
          animation: slideInLeft 0.8s ease forwards;
        }

        .text-block:nth-child(1) { animation-delay: 0.3s; }
        .text-block:nth-child(2) { animation-delay: 0.5s; }
        .text-block:nth-child(3) { animation-delay: 0.7s; }

        .text-icon {
          font-size: 1.5rem;
          min-width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-top: 0.2rem;
        }

        .text-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin: 0;
        }

        .highlight {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 600;
        }

        .skills-cloud {
          margin-top: 3rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 0.9s;
        }

        .skills-title {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: scale(0.8);
          animation: popIn 0.5s ease forwards;
          animation-delay: var(--delay);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
          transform: scale(1.05);
        }

        .about-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-container {
          transition: transform 0.1s ease-out;
        }

        .code-window {
          width: 350px;
          background: rgba(17, 24, 39, 0.8);
          border: 1px solid rgba(75, 85, 99, 0.3);
          border-radius: 12px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: scale(0.9);
          animation: scaleIn 0.8s ease forwards 0.4s;
        }

        .window-header {
          background: rgba(31, 41, 55, 0.8);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid rgba(75, 85, 99, 0.3);
        }

        .window-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .close { background: #EF4444; }
        .minimize { background: #F59E0B; }
        .maximize { background: #10B981; }

        .window-title {
          color: #9CA3AF;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .code-content {
          padding: 1.5rem;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .code-line {
          margin-bottom: 0.5rem;
        }

        .indent { padding-left: 1.5rem; }

        .keyword { color: #EC4899; }
        .variable { color: #60A5FA; }
        .operator { color: #F59E0B; }
        .property { color: #10B981; }
        .string { color: #F59E0B; }
        .bracket { color: #D1D5DB; }
        .punctuation { color: #9CA3AF; }

        .stats-section {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards 1.1s;
        }

        .stats-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 3rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.6s ease forwards;
          animation-delay: var(--delay);
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--color);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .stat-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, var(--color), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover .stat-glow {
          opacity: 0.1;
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, var(--color));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
          transition: transform 0.3s ease;
        }

        .stat-card:hover .stat-number {
          transform: scale(1.1);
        }

        .stat-label {
          color: #9CA3AF;
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .floating-shape {
          position: absolute;
          font-size: 2rem;
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          top: 70%;
          right: 15%;
          animation-delay: -2s;
        }

        .shape-3 {
          bottom: 20%;
          left: 80%;
          animation-delay: -4s;
        }

        .shape-4 {
          top: 40%;
          left: 5%;
          animation-delay: -1s;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }

        @keyframes gridMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-main {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .code-window {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1.5rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .about-main {
            gap: 2rem;
            margin-bottom: 4rem;
          }

          .text-block {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stats-title {
            font-size: 2rem;
          }

          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .code-window {
            width: 100%;
          }

          .skills-container {
            justify-content: center;
          }
        }
      `}</style>
    </>
  )
}

export default About
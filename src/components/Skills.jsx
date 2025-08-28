import React, { useState, useEffect, useRef } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [animatedLevels, setAnimatedLevels] = useState({})
  const sectionRef = useRef(null)

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: '⚡' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ]

  const skills = [
    { name: 'HTML/CSS', level: 95, category: 'frontend', icon: '🌐', color: '#E34F26' },
    { name: 'JavaScript', level: 90, category: 'frontend', icon: '⚡', color: '#F7DF1E' },
    { name: 'React', level: 88, category: 'frontend', icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘', color: '#3178C6' },
    { name: 'Node.js', level: 82, category: 'backend', icon: '🟢', color: '#339933' },
    { name: 'Python', level: 78, category: 'backend', icon: '🐍', color: '#3776AB' },
    { name: 'MongoDB', level: 75, category: 'backend', icon: '🍃', color: '#47A248' },
    { name: 'PostgreSQL', level: 72, category: 'backend', icon: '🐘', color: '#336791' },
    { name: 'Git', level: 90, category: 'tools', icon: '📚', color: '#F05032' },
    { name: 'Docker', level: 70, category: 'tools', icon: '🐳', color: '#2496ED' },
    { name: 'AWS', level: 68, category: 'tools', icon: '☁️', color: '#FF9900' },
    { name: 'UI/UX Design', level: 75, category: 'frontend', icon: '🎨', color: '#FF6B6B' }
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill levels
          setTimeout(() => {
            const levels = {}
            skills.forEach((skill, index) => {
              setTimeout(() => {
                levels[skill.name] = skill.level
                setAnimatedLevels(prev => ({ ...prev, [skill.name]: skill.level }))
              }, index * 200)
            })
          }, 500)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getSkillLevel = (skillName) => {
    return animatedLevels[skillName] || 0
  }

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Intermediate'
    return 'Beginner'
  }

  const getSkillLevelColor = (level) => {
    if (level >= 90) return '#10B981'
    if (level >= 80) return '#6366F1'
    if (level >= 70) return '#F59E0B'
    return '#EF4444'
  }

  return (
    <>
      <section id="skills" className="skills" ref={sectionRef}>
        {/* Animated Background */}
        <div className="skills-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="code-rain">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="code-symbol"
                style={{ 
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              >
                {['</>', '{}', '[]', '()', '&&', '||'][Math.floor(Math.random() * 6)]}
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className={`section-header ${isVisible ? 'visible' : ''}`}>
            <span className="section-badge">
              <span className="badge-icon">💪</span>
              What I bring to the table
            </span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Mastering technologies to build exceptional digital experiences
            </p>
          </div>

          {/* Category Filter */}
          <div className={`category-filter ${isVisible ? 'visible' : ''}`}>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-text">{category.name}</span>
                <div className="filter-glow"></div>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`skill-card ${hoveredSkill === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ 
                  '--delay': `${index * 0.1}s`,
                  '--skill-color': skill.color,
                  '--level': `${getSkillLevel(skill.name)}%`
                }}
              >
                {/* Skill Header */}
                <div className="skill-header">
                  <div className="skill-info">
                    <div className="skill-icon">{skill.icon}</div>
                    <div>
                      <h3 className="skill-name">{skill.name}</h3>
                      <span 
                        className="skill-level-text"
                        style={{ color: getSkillLevelColor(skill.level) }}
                      >
                        {getSkillLevelText(skill.level)}
                      </span>
                    </div>
                  </div>
                  <div className="skill-percentage" style={{display: 'none'}}>
                    <span className="percentage-number">{getSkillLevel(skill.name)}</span>
                    <span className="percentage-symbol">%</span>
                  </div>
                </div>

                {/* Circular Progress */}
                <div className="circular-progress">
                  <svg className="progress-ring" width="120" height="120">
                    <circle
                      className="progress-ring-background"
                      cx="60"
                      cy="60"
                      r="50"
                      fill="transparent"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="8"
                    />
                    <circle
                      className="progress-ring-progress"
                      cx="60"
                      cy="60"
                      r="50"
                      fill="transparent"
                      stroke={skill.color}
                      strokeWidth="8"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: `${2 * Math.PI * 50}`,
                        strokeDashoffset: `${2 * Math.PI * 50 * (1 - getSkillLevel(skill.name) / 100)}`,
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                        transition: 'stroke-dashoffset 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    />
                  </svg>
                  <div className="progress-center">
                    <span className="center-icon">{skill.icon}</span>
                  </div>
                </div>

                {/* Linear Progress Bar */}
                <div className="skill-bar">
                  <div className="skill-bar-background">
                    <div 
                      className="skill-bar-fill"
                      style={{ 
                        width: `${getSkillLevel(skill.name)}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                      }}
                    >
                      <div className="skill-bar-glow"></div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="skill-overlay">
                  <div className="overlay-content">
                    <h4>Experience Level</h4>
                    <div className="experience-dots">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`dot ${i < Math.ceil(skill.level / 20) ? 'active' : ''}`}
                        ></div>
                      ))}
                    </div>
                    <p className="skill-description">
                      {skill.level >= 90 ? 'Master level proficiency with extensive project experience' :
                       skill.level >= 80 ? 'Advanced skills with multiple successful implementations' :
                       skill.level >= 70 ? 'Solid understanding with practical application experience' :
                       'Growing expertise with hands-on learning'}
                    </p>
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div className="card-glow" style={{ background: `radial-gradient(circle, ${skill.color}22 0%, transparent 70%)` }}></div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className={`skills-summary ${isVisible ? 'visible' : ''}`}>
            <div className="summary-card">
              <h3>🎯 Primary Focus</h3>
              <p>Full-stack JavaScript development with React and Node.js</p>
            </div>
            <div className="summary-card">
              <h3>🚀 Currently Learning</h3>
              <p>Advanced TypeScript patterns and microservices architecture</p>
            </div>
            <div className="summary-card">
              <h3>💡 Next Goals</h3>
              <p>Machine Learning integration and advanced DevOps practices</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .skills {
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .skills-background {
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
          opacity: 0.15;
          animation: float 10s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #10B981, #F59E0B);
          bottom: 20%;
          right: 10%;
          animation-delay: -3s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #8B5CF6, #06B6D4);
          top: 60%;
          left: 70%;
          animation-delay: -6s;
        }

        .code-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .code-symbol {
          position: absolute;
          color: rgba(99, 102, 241, 0.1);
          font-family: 'Monaco', monospace;
          font-size: 1.2rem;
          animation: codeRain linear infinite;
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
          margin-bottom: 4rem;
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

        .category-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          flex-wrap: wrap;
        }

        .category-filter.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          color: #9CA3AF;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .filter-btn:hover {
          color: #ffffff;
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: rgba(99, 102, 241, 0.2);
          color: #ffffff;
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
        }

        .filter-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .filter-btn.active .filter-glow {
          opacity: 1;
        }

        .filter-icon {
          font-size: 1.2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        }

        .skills-grid.visible {
          opacity: 1;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.6s ease forwards;
          animation-delay: var(--delay);
        }

        .skill-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--skill-color);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .skill-card:hover .card-glow {
          opacity: 1;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .skill-icon {
          font-size: 2rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-name {
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
        }

        .skill-level-text {
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.9;
        }

        .skill-percentage {
          display: none;
        }

        .percentage-number {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
        }

        .percentage-symbol {
          font-size: 1.2rem;
          color: #9CA3AF;
        }

        .circular-progress {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .progress-ring {
          transform: rotate(-90deg);
        }

        .progress-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .center-icon {
          font-size: 2rem;
          filter: drop-shadow(0 0 10px var(--skill-color));
        }

        .skill-bar {
          margin-bottom: 1rem;
        }

        .skill-bar-background {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .skill-bar-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }

        .skill-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-card:hover .skill-overlay {
          opacity: 1;
          transform: scale(1);
        }

        .overlay-content {
          text-align: center;
          color: #ffffff;
        }

        .overlay-content h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--skill-color);
        }

        .experience-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--skill-color);
          box-shadow: 0 0 10px var(--skill-color);
        }

        .skill-description {
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.9;
          margin: 0;
        }

        .skills-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
        }

        .skills-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .summary-card h3 {
          color: #ffffff;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .summary-card p {
          color: #9CA3AF;
          margin: 0;
          line-height: 1.6;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(2deg); }
          66% { transform: translateY(15px) rotate(-1deg); }
        }

        @keyframes codeRain {
          0% { 
            transform: translateY(-100px);
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(calc(100vh + 100px));
            opacity: 0;
          }
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .skills {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1.5rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .skill-card {
            padding: 1.5rem;
          }

          .category-filter {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .skills-summary {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.5rem;
          }

          .skill-card {
            padding: 1.25rem;
          }

          .circular-progress svg {
            width: 100px;
            height: 100px;
          }

          .circular-progress .progress-ring-background,
          .circular-progress .progress-ring-progress {
            r: 40;
          }

          .category-filter {
            flex-direction: column;
            align-items: center;
          }

          .code-symbol {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Skills
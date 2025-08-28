import React, { useState, useEffect, useRef } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredExp, setHoveredExp] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState(null)
  const sectionRef = useRef(null)

  const filterOptions = [
    { id: 'all', name: 'All Experience', icon: '🚀' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'fullstack', name: 'Full Stack', icon: '⚙️' },
    { id: 'leadership', name: 'Leadership', icon: '👨‍💼' }
  ]

  const experiences = [
    {
      id: 1,
      role: 'Intern Software Developer',
      company: 'RTA Labs LLC.',
      duration: 'Jan 2024 - Present',
      type: 'fullstack',
      color: '#6366F1',
      icon: '💼',
      location: 'Remote',
      employmentType: 'Full-time',
      companySize: '1-10 employees',
      achievements: [
        'Led development of company\'s flagship SaaS product using React and TypeScript',
        'Improved application performance by 40% through code optimization and lazy loading',
        'Mentored 5+ junior developers and conducted comprehensive code reviews',
        'Architected micro-frontend architecture reducing deployment time by 60%',
        'Spearheaded adoption of modern testing practices increasing code coverage to 95%'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Jest', 'Cypress'],
      highlights: {
        impact: '40% performance improvement',
        team: '5+ developers mentored',
        coverage: '95% test coverage'
      }
    },
    // {
    //   id: 2,
    //   role: 'Full Stack Developer',
    //   company: 'Digital Solutions LLC',
    //   duration: 'Mar 2018 - Dec 2020',
    //   type: 'fullstack',
    //   color: '#10B981',
    //   icon: '🛠️',
    //   location: 'San Francisco, CA',
    //   employmentType: 'Full-time',
    //   companySize: '50-200 employees',
    //   achievements: [
    //     'Developed 15+ full-stack web applications for diverse client portfolio',
    //     'Implemented scalable RESTful APIs using Node.js, Express, and PostgreSQL',
    //     'Collaborated with UX/UI designers to create responsive and accessible interfaces',
    //     'Reduced server response time by 35% through database optimization',
    //     'Built real-time chat applications using Socket.io and WebRTC'
    //   ],
    //   technologies: ['Node.js', 'React', 'PostgreSQL', 'MongoDB', 'Express', 'Socket.io'],
    //   highlights: {
    //     projects: '15+ applications built',
    //     performance: '35% faster response',
    //     clients: '20+ satisfied clients'
    //   }
    // },
    // {
    //   id: 3,
    //   role: 'Web Developer Intern',
    //   company: 'StartUp Ventures',
    //   duration: 'Jun 2017 - Feb 2018',
    //   type: 'frontend',
    //   color: '#F59E0B',
    //   icon: '🌱',
    //   location: 'New York, NY',
    //   employmentType: 'Internship',
    //   companySize: '10-50 employees',
    //   achievements: [
    //     'Assisted in developing company website using modern JavaScript frameworks',
    //     'Built internal tools that increased team productivity by 25%',
    //     'Gained experience with agile development methodologies and Scrum',
    //     'Contributed to open-source projects and learned version control with Git',
    //     'Participated in daily standups and sprint planning sessions'
    //   ],
    //   technologies: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'Git', 'Webpack'],
    //   highlights: {
    //     productivity: '25% team efficiency gain',
    //     learning: 'Agile methodology',
    //     contribution: 'Open source projects'
    //   }
    // }
  ]

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter)

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getTotalExperience = () => {
    const startDate = new Date('2024-06-01')
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate - startDate)
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365))
    return diffYears
  }

  const getExperienceStats = () => {
    return {
      totalYears: getTotalExperience(),
      totalProjects: experiences.reduce((acc, exp) => acc + (exp.highlights.projects ? parseInt(exp.highlights.projects) : 8), 0),
      totalTechnologies: [...new Set(experiences.flatMap(exp => exp.technologies))].length
    }
  }

  const stats = getExperienceStats()

  return (
    <>
      <section id="experience" className="experience" ref={sectionRef}>
        {/* Animated Background */}
        <div className="experience-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="code-rain">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="code-symbol"
                style={{ 
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              >
                {['💼', '🚀', '⚡', '🎯', '💡', '🔧'][Math.floor(Math.random() * 6)]}
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          {/* Section Header */}
          <div className={`section-header ${isVisible ? 'visible' : ''}`}>
            <span className="section-badge">
              <span className="badge-icon">💼</span>
              My Professional Journey
            </span>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              Building impactful solutions and leading teams across diverse technology stacks
            </p>
          </div>

          {/* Experience Stats */}
          <div className={`experience-stats ${isVisible ? 'visible' : ''}`}>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-value">{stats.totalYears}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-value">{stats.totalProjects}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-value">{stats.totalTechnologies}+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>

          {/* Filter Options */}
          <div className={`experience-filter ${isVisible ? 'visible' : ''}`}>
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span className="filter-icon">{filter.icon}</span>
                <span className="filter-text">{filter.name}</span>
                <div className="filter-glow"></div>
              </button>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className={`experience-timeline ${isVisible ? 'visible' : ''}`}>
            <div className="timeline-line"></div>
            {filteredExperiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`timeline-item ${hoveredExp === index ? 'hovered' : ''} ${selectedExperience === exp.id ? 'selected' : ''}`}
                onMouseEnter={() => setHoveredExp(index)}
                onMouseLeave={() => setHoveredExp(null)}
                onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                style={{ 
                  '--delay': `${index * 0.2}s`,
                  '--exp-color': exp.color
                }}
              >
                <div className="timeline-marker">
                  <div className="marker-icon">{exp.icon}</div>
                  <div className="marker-pulse"></div>
                </div>
                
                <div className="timeline-content">
                  {/* Experience Header */}
                  <div className="experience-header">
                    <div className="experience-main-info">
                      <h3 className="experience-role">{exp.role}</h3>
                      <div className="experience-company">
                        <span className="company-name">{exp.company}</span>
                        <span className="company-details">
                          {exp.location} • {exp.employmentType} • {exp.companySize}
                        </span>
                      </div>
                    </div>
                    <div className="experience-duration">
                      <span className="duration-badge">{exp.duration}</span>
                      <div className="expand-indicator">
                        {selectedExperience === exp.id ? '▼' : '▶'}
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="experience-highlights">
                    {Object.entries(exp.highlights).map(([key, value]) => (
                      <div key={key} className="highlight-item">
                        <span className="highlight-value">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="experience-technologies">
                    {exp.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                    {exp.technologies.length > 4 && (
                      <span className="tech-badge more">+{exp.technologies.length - 4}</span>
                    )}
                  </div>

                  {/* Expanded Content */}
                  <div className={`expanded-content ${selectedExperience === exp.id ? 'open' : ''}`}>
                    <div className="achievements-section">
                      <h4>Key Achievements</h4>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="achievement-item">
                            <span className="achievement-bullet">✦</span>
                            <span className="achievement-text">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="all-technologies">
                      <h4>Technologies & Tools</h4>
                      <div className="tech-grid">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tech-chip">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Glow Effect */}
                  <div className="card-glow" style={{ background: `radial-gradient(circle, ${exp.color}15 0%, transparent 70%)` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className={`experience-summary ${isVisible ? 'visible' : ''}`}>
            <div className="summary-card">
              <h3>🎯 Current Focus</h3>
              <p>Leading frontend architecture and mentoring development teams</p>
            </div>
            <div className="summary-card">
              <h3>🚀 Career Growth</h3>
              <p>Progressed from intern to senior developer in {getTotalExperience()} years</p>
            </div>
            <div className="summary-card">
              <h3>💡 Next Challenge</h3>
              <p>Technical leadership and scaling engineering teams</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .experience {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.experience-background {
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
  opacity: 0.12;
  animation: float 12s ease-in-out infinite;
}

.orb-1 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  top: 15%;
  left: 15%;
  animation-delay: 0s;
}

.orb-2 {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #10B981, #06B6D4);
  bottom: 25%;
  right: 15%;
  animation-delay: -4s;
}

.orb-3 {
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, #F59E0B, #EF4444);
  top: 50%;
  left: 65%;
  animation-delay: -8s;
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
  color: rgba(99, 102, 241, 0.08);
  font-size: 1.5rem;
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

.experience-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.experience-stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.1);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #9CA3AF;
  font-size: 0.95rem;
  font-weight: 500;
}

.experience-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
  flex-wrap: wrap;
}

.experience-filter.visible {
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

.experience-timeline {
  position: relative;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
  margin-bottom: 4rem;
}

.experience-timeline.visible {
  opacity: 1;
}

.timeline-line {
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, 
    rgba(99, 102, 241, 0.5) 0%, 
    rgba(16, 185, 129, 0.5) 50%, 
    rgba(245, 158, 11, 0.5) 100%
  );
  border-radius: 2px;
  filter: blur(1px);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 6rem;
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease forwards;
  animation-delay: var(--delay);
}

.timeline-marker {
  position: absolute;
  left: 0.75rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--exp-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 0 20px var(--exp-color);
  z-index: 2;
  position: relative;
}

.marker-icon {
  position: relative;
  z-index: 3;
}

.marker-pulse {
  position: absolute;
  inset: -10px;
  border: 2px solid var(--exp-color);
  border-radius: 50%;
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.timeline-item:hover .timeline-content {
  transform: translateY(-5px);
  border-color: var(--exp-color);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.timeline-item:hover .card-glow {
  opacity: 1;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.experience-role {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

.company-name {
  color: var(--exp-color);
  font-size: 1.1rem;
  font-weight: 600;
}

.company-details {
  display: block;
  color: #9CA3AF;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.duration-badge {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.expand-indicator {
  margin-left: 1rem;
  color: var(--exp-color);
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.timeline-item.selected .expand-indicator {
  transform: rotate(90deg);
}

.experience-highlights {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.highlight-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  white-space: nowrap;
}

.highlight-value {
  font-weight: 600;
  color: var(--exp-color);
}

.experience-technologies {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-badge.more {
  background: var(--exp-color);
  color: #ffffff;
}

.expanded-content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
}

.expanded-content.open {
  max-height: 800px;
  opacity: 1;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1.5rem;
}

.achievements-section h4,
.all-technologies h4 {
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.achievements-section h4::before {
  content: '🏆';
}

.all-technologies h4::before {
  content: '🛠️';
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  border-left: 3px solid var(--exp-color);
}

.achievement-bullet {
  color: var(--exp-color);
  font-size: 0.8rem;
  margin-top: 0.1rem;
}

.achievement-text {
  color: #E5E7EB;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tech-grid {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-chip {
  background: linear-gradient(135deg, var(--exp-color), var(--exp-color)aa);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 2px 8px var(--exp-color)33;
}

.experience-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
}

.experience-summary.visible {
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
  transition: all 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
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
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  33% { 
    transform: translateY(-30px) rotate(2deg); 
  }
  66% { 
    transform: translateY(15px) rotate(-1deg); 
  }
}

@keyframes codeRain {
  0% { 
    transform: translateY(-100px);
    opacity: 0;
  }
  10% { 
    opacity: 0.8;
  }
  90% { 
    opacity: 0.8;
  }
  100% { 
    transform: translateY(calc(100vh + 100px));
    opacity: 0;
  }
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.1;
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .timeline-item {
    padding-left: 5rem;
  }
  
  .timeline-line {
    left: 1.75rem;
  }
  
  .timeline-marker {
    left: 0.5rem;
  }
}

@media (max-width: 768px) {
  .experience {
    padding: 6rem 0 4rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 3rem;
  }

  .timeline-item {
    padding-left: 4rem;
  }

  .timeline-line {
    left: 1.5rem;
  }

  .timeline-marker {
    left: 0.25rem;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .experience-filter {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .experience-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.5rem;
  }

  .timeline-item {
    padding-left: 0;
    margin-left: 0;
  }

  .timeline-line {
    display: none;
  }

  .timeline-marker {
    position: relative;
    left: auto;
    top: auto;
    margin-bottom: 1rem;
  }

  .experience-filter {
    flex-direction: column;
    align-items: center;
  }

  .code-symbol {
    display: none;
  }

  .experience-highlights {
    flex-direction: column;
    gap: 0.5rem;
  }

  .highlight-item {
    text-align: center;
  }
}
  `}</style>
    </>
  )
}

export default Experience

import React, { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedProject, setExpandedProject] = useState(null)
  const sectionRef = useRef(null)

  const filterCategories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'web', name: 'Web Apps', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'fullstack', name: 'Full Stack', icon: '⚡' }
  ]

  const projects = [
    {
      id: 1,
      title: 'MISP E+',
      description: 'A comprehensive full-stack e-commerce solution featuring modern React frontend, robust Node.js backend, and secure Firebase authentication. Built with scalable architecture and optimized performance.',
      shortDescription: 'Full-stack e-commerce platform with React, Node.js, and Firebase',
      technologies: ['React', 'Node.js', 'Firebase', 'Python Flask'],
      image: '/misp.png',
      github: 'https://github.com/chamishkadinuwan/mispe.git',
      demo: 'https://example.com',
      category: 'fullstack',
      featured: true,
      status: 'completed',
      color: '#6366F1'
    },
    {
      id: 2,
      title: 'TeachMate',
      description: 'An innovative AI-powered mobile e-learning application leveraging the Gemini API to deliver personalized lessons, interactive quizzes, and real-time learning assistance. Optimized for seamless on-the-go education.',
      shortDescription: 'AI-powered mobile e-learning app with Gemini API integration',
      technologies: ['React Native', 'Firebase', 'Material UI', 'Gemini API'],
      image: '/placeholder-project.jpg',
      github: 'https://github.com/chamishkadinuwan/guru.git',
      demo: 'https://example.com',
      category: 'mobile',
      featured: true,
      status: 'completed',
      color: '#10B981'
    },
    {
      id: 3,
      title: 'TechPulse',
      description: 'A cutting-edge mobile news application built with Java and Firebase, delivering real-time technology updates, personalized news feeds, and intelligent content curation for tech enthusiasts.',
      shortDescription: 'Mobile tech news app with real-time updates and personalization',
      technologies: ['Java', 'Firebase', 'Material UI'],
      image: '/techpuls2.jpeg',
      github: 'https://github.com/chamishkadinuwan/techpulse.git',
      demo: 'https://example.com',
      category: 'mobile',
      featured: false,
      status: 'completed',
      color: '#F59E0B'
    },
    {
      id: 4,
      title: 'Attendese',
      description: 'A comprehensive web-based attendance management system built with HTML, CSS, PHP, and SQL database. Features easy tracking, management, and reporting of student or employee attendance with intuitive dashboard.',
      shortDescription: 'Web-based attendance system with comprehensive tracking features',
      technologies: ['HTML', 'CSS', 'PHP', 'SQL database'],
      image: '/placeholder-project.jpg',
      github: 'https://github.com/chamishkadinuwan/attendese.git',
      demo: 'https://example.com',
      category: 'web',
      featured: false,
      status: 'completed',
      color: '#EC4899'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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

  const getTechColor = (tech) => {
    const techColors = {
      'React': '#61DAFB',
      'Node.js': '#339933',
      'Firebase': '#FFCA28',
      'Python Flask': '#000000',
      'React Native': '#61DAFB',
      'Material UI': '#0081CB',
      'Gemini API': '#4285F4',
      'Java': '#F89820',
      'HTML': '#E34F26',
      'CSS': '#1572B6',
      'PHP': '#777BB4',
      'SQL database': '#336791'
    }
    return techColors[tech] || '#6366F1'
  }

  // Fixed click handlers with proper event handling
  const handleGithubClick = (e, githubUrl) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('GitHub clicked:', githubUrl) // Debug log
    window.open(githubUrl, '_blank', 'noopener,noreferrer')
  }

  const handleDemoClick = (e, demoUrl) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Demo clicked:', demoUrl) // Debug log
    window.open(demoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section id="projects" className="projects" ref={sectionRef}>
        {/* Animated Background */}
        <div className="projects-background">
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
                {['<div>', '</>', '{...}', 'API', 'DB', '()=>'][Math.floor(Math.random() * 6)]}
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className={`section-header ${isVisible ? 'visible' : ''}`}>
            <span className="section-badge">
              <span className="badge-icon">💼</span>
              Crafting digital solutions
            </span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing innovative solutions built with modern technologies
            </p>
          </div>

          {/* Filter Categories */}
          <div className={`filter-container ${isVisible ? 'visible' : ''}`}>
            {filterCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-text">{category.name}</span>
                <div className="filter-glow"></div>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-card ${hoveredProject === index ? 'hovered' : ''} ${project.featured ? 'featured' : ''}`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ 
                  '--delay': `${index * 0.15}s`,
                  '--project-color': project.color
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="featured-badge">
                    <span className="badge-star">⭐</span>
                    <span className="badge-text">Featured</span>
                  </div>
                )}

                {/* Status Badge */}
                <div className="status-badge">
                  <div className="status-dot"></div>
                  <span className="status-text">{project.status}</span>
                </div>

                {/* Project Image */}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <div className="project-links">
                        <button
                          className="project-link github"
                          onClick={(e) => handleGithubClick(e, project.github)}
                          type="button"
                        >
                          <span className="link-icon">📚</span>
                          <span>Code</span>
                        </button>
                        <button
                          className="project-link demo"
                          onClick={(e) => handleDemoClick(e, project.demo)}
                          type="button"
                        >
                          <span className="link-icon">🚀</span>
                          <span>Live Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="image-glow" style={{ background: `radial-gradient(circle, ${project.color}33 0%, transparent 70%)` }}></div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <button 
                      className="expand-btn"
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    >
                      <span className={`expand-icon ${expandedProject === project.id ? 'expanded' : ''}`}>
                        {expandedProject === project.id ? '−' : '+'}
                      </span>
                    </button>
                  </div>

                  <p className="project-description">
                    {expandedProject === project.id ? project.description : project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag"
                        style={{ 
                          '--tech-color': getTechColor(tech),
                          '--delay': `${techIndex * 0.1}s`
                        }}
                      >
                        <span className="tech-dot"></span>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="project-stats">
                    <div className="stat-item">
                      <span className="stat-icon">🔧</span>
                      <span className="stat-text">{project.technologies.length} Technologies</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">📂</span>
                      <span className="stat-text">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                    </div>
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div className="card-glow" style={{ background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)` }}></div>

                {/* Animated Border */}
                <div className="animated-border"></div>
              </div>
            ))}
          </div>

          {/* Projects Summary */}
          <div className={`projects-summary ${isVisible ? 'visible' : ''}`}>
            <div className="summary-card">
              <div className="summary-icon">📊</div>
              <h3>Project Stats</h3>
              <div className="stat-grid">
                <div className="stat">
                  <span className="stat-number">{projects.length}</span>
                  <span className="stat-label">Total Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{projects.filter(p => p.featured).length}</span>
                  <span className="stat-label">Featured</span>
                </div>
              </div>
            </div>
            
            <div className="summary-card">
              <div className="summary-icon">🛠️</div>
              <h3>Tech Stack</h3>
              <div className="tech-cloud">
                {[...new Set(projects.flatMap(p => p.technologies))].slice(0, 6).map((tech, index) => (
                  <span key={index} className="cloud-tech" style={{ '--delay': `${index * 0.1}s` }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon">🎯</div>
              <h3>Focus Areas</h3>
              <div className="focus-list">
                <div className="focus-item">Full-Stack Development</div>
                <div className="focus-item">Mobile Applications</div>
                <div className="focus-item">AI Integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
<style jsx>{`
   .projects {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.projects-background {
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
  background: linear-gradient(135deg, #6366F1, #EC4899);
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.orb-2 {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #10B981, #F59E0B);
  bottom: 30%;
  right: 15%;
  animation-delay: -4s;
}

.orb-3 {
  width: 220px;
  height: 220px;
  background: linear-gradient(135deg, #8B5CF6, #06B6D4);
  top: 50%;
  left: 60%;
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
  font-family: 'Monaco', monospace;
  font-size: 1rem;
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

.filter-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
  flex-wrap: wrap;
}

.filter-container.visible {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
}

.projects-grid.visible {
  opacity: 1;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(20px);
  position: relative;
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease forwards;
  animation-delay: var(--delay);
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: var(--project-color);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
}

.project-card.featured {
  border-color: rgba(255, 215, 0, 0.3);
}

.featured-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #10B981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.project-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(236, 72, 153, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  color: #1F2937;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.project-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.project-link.github {
  background: linear-gradient(135deg, #333, #000);
  color: #fff;
}

.project-link.demo {
  background: linear-gradient(135deg, #6366F1, #EC4899);
  color: #fff;
}

.link-icon {
  font-size: 1rem;
}

.image-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.project-card:hover .image-glow {
  opacity: 1;
}

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.expand-btn {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  font-weight: bold;
}

.expand-btn:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.4);
  transform: scale(1.1);
}

.expand-icon {
  transition: transform 0.3s ease;
}

.expand-icon.expanded {
  transform: rotate(180deg);
}

.project-description {
  color: #9CA3AF;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(10px);
  animation: techSlideIn 0.4s ease forwards;
  animation-delay: var(--delay);
}

.tech-tag:hover {
  background: var(--tech-color);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.tech-dot {
  width: 6px;
  height: 6px;
  background: var(--tech-color);
  border-radius: 50%;
}

.project-stats {
  display: flex;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9CA3AF;
  font-size: 0.85rem;
}

.stat-icon {
  font-size: 1rem;
}

.card-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: 20px;
}

.project-card:hover .card-glow {
  opacity: 1;
}

.animated-border {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, var(--project-color), transparent, var(--project-color));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: exclude;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .animated-border {
  opacity: 0.5;
}

.projects-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
}

.projects-summary.visible {
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
}

.summary-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.summary-card h3 {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #6366F1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.85rem;
  color: #9CA3AF;
}

.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.cloud-tech {
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  opacity: 0;
  transform: scale(0.8);
  animation: techCloudIn 0.4s ease forwards;
  animation-delay: var(--delay);
}

.focus-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.focus-item {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  border-left: 3px solid #6366F1;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(1deg); }
  66% { transform: translateY(10px) rotate(-0.5deg); }
}

@keyframes codeRain {
  0% { 
    transform: translateY(-50px);
    opacity: 0;
  }
  10% { 
    opacity: 0.8;
  }
  90% { 
    opacity: 0.8;
  }
  100% { 
    transform: translateY(calc(100vh + 50px));
    opacity: 0;
  }
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
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

@keyframes techSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes techCloudIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 6rem 0 4rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 3rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card {
    margin: 0 auto;
    max-width: 400px;
  }

  .filter-container {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .projects-summary {
    grid-template-columns: 1fr;
  }

  .project-links {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.5rem;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-image {
    height: 200px;
  }

  .filter-container {
    flex-direction: column;
    align-items: center;
  }

  .code-symbol {
    display: none;
  }

  .stat-grid {
    grid-template-columns: 1fr;
  }
}
      `}</style>
    </>
  )
}

export default Projects

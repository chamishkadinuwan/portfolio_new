import React, { useState, useEffect, useRef } from 'react'

const Education = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredEdu, setHoveredEdu] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedEducation, setSelectedEducation] = useState(null)
  const sectionRef = useRef(null)

  const filterOptions = [
    { id: 'all', name: 'All Education', icon: '🎓' },
    { id: 'degree', name: 'Degrees', icon: '🏛️' },
    { id: 'bootcamp', name: 'Bootcamps', icon: '💻' },
    { id: 'certification', name: 'Certifications', icon: '📜' }
  ]

  const education = [
    {
      id: 1,
      degree: 'Bachelor of ICT',
      institution: 'University of Colombo',
      year: '2021 - 2025',
      type: 'degree',
      color: '#6366F1',
      icon: '🎓',
      location: 'Colombo, Sri Lanka',
      gpa: '3.1/4.0',
      status: 'Completed',
      description: 'Specialized in Software Engineering and Web Technologies',
      courses: [
        'Advanced Algorithms & Data Structures',
        'Software Architecture & Design Patterns',
        'Web Technologies & Frameworks',
        'Database Systems & Optimization',
        'Machine Learning Fundamentals',
        'Computer Networks & Security'
      ],
      achievements: [
        'Graduated with Distinction',
        'Published research paper on web optimization',
        'Teaching Assistant for 3 semesters',
        'Winner of Annual Hackathon 2017'
      ],
      skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'Database Design'],
      highlights: {
        duration: '4 Years',
        focus: 'Software Engineering',
        research: '1 Publication'
      }
    },
    {
      id: 2,
      degree: 'AI & ML Certification',
      institution: 'IIT University',
      year: '2025',
      type: 'certification',
      color: '#10B981',
      icon: '🏛️',
      location: 'Colombo, Sri Lanka',
      gpa: 'A+',
      status: 'Reading',
      description: 'Certified in Artificial Intelligence and Machine Learning with strong foundations in data-driven problem solving and model development.',
      courses: [
        'Introduction to Artificial Intelligence',
        'Machine Learning Algorithms (Supervised & Unsupervised)',
        'Deep Learning & Neural Networks',
        'Python for Data Science',
        'Data Preprocessing & Feature Engineering',
        'Model Evaluation & Optimization'
      ],
      achievements: [
        'Built and deployed multiple ML models during certification',
        'Achieved top performance in course projects',
        'Presented research on AI applications in real-world scenarios',
        'Completed capstone project on predictive analytics'
      ],
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Machine Learning', 'Deep Learning', 'AI Concepts'],
      highlights: {
        duration: '6 Months',
        honors: 'Distinction',
        leadership: 'Team Lead'
      }
    },
    {
      id: 3,
      degree: 'Python Programming Bootcamp',
      institution: 'Udemy Academy',
      year: '2023',
      type: 'bootcamp',
      color: '#306998',
      icon: '🐍',
      location: 'Online',
      gpa: '98%',
      status: 'Completed',
      description: 'Comprehensive bootcamp covering Python programming, data analysis, and automation',
      courses: [
        'Python Fundamentals & Syntax',
        'Object-Oriented Programming with Python',
        'Data Analysis with Pandas & NumPy',
        'Web Scraping & Automation',
        'API Integration & Data Handling',
        'Version Control & Deployment'
      ],
      achievements: [
        'Completed 20+ coding exercises and mini-projects',
        'Developed automation scripts for real-world tasks',
        'Ranked in top 2% of global students',
        'Earned Udemy Python Mastery Certificate'
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'APIs', 'OOP', 'Git'],
      highlights: {
        duration: '10 Weeks',
        intensity: 'Self-paced',
        projects: '10+ Projects'
      }
    }
  ]

  const filteredEducation = activeFilter === 'all' 
    ? education 
    : education.filter(edu => edu.type === activeFilter)

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

  const getTotalYears = () => {
    return education.reduce((total, edu) => {
      const years = edu.year.includes('-') 
        ? parseInt(edu.year.split(' - ')[1]) - parseInt(edu.year.split(' - ')[0])
        : 1
      return total + years
    }, 0)
  }

  const getEducationStats = () => {
    return {
      totalYears: getTotalYears(),
      totalDegrees: education.filter(edu => edu.type === 'degree').length,
      totalCertifications: education.filter(edu => edu.type === 'bootcamp').length + education.filter(edu => edu.type === 'certification').length,
      averageGPA: '3.7'
    }
  }

  const stats = getEducationStats()

  return (
    <section id="education" className="education" ref={sectionRef}>
      {/* Animated Background */}
      <div className="education-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="knowledge-particles">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{ 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              {['📚', '🎓', '💡', '🔬', '📖', '✏️'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-badge">
            <span className="badge-icon">🎓</span>
            Academic Journey
          </span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Building knowledge foundations through formal education and continuous learning
          </p>
        </div>

        {/* Education Stats */}
        <div className={`education-stats ${isVisible ? 'visible' : ''}`}>
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-value">{stats.totalYears}</div>
            <div className="stat-label">Years of Study</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏛️</div>
            <div className="stat-value">{stats.totalDegrees}</div>
            <div className="stat-label">Academic Degrees</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📜</div>
            <div className="stat-value">{stats.totalCertifications}</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-value">{stats.averageGPA}</div>
            <div className="stat-label">Average GPA</div>
          </div>
        </div>

        {/* Filter Options */}
        <div className={`education-filter ${isVisible ? 'visible' : ''}`}>
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

        {/* Education Grid */}
        <div className={`education-grid ${isVisible ? 'visible' : ''}`}>
          {filteredEducation.map((edu, index) => (
            <div 
              key={edu.id}
              className={`education-card ${hoveredEdu === index ? 'hovered' : ''} ${selectedEducation === edu.id ? 'selected' : ''}`}
              onMouseEnter={() => setHoveredEdu(index)}
              onMouseLeave={() => setHoveredEdu(null)}
              onClick={() => setSelectedEducation(selectedEducation === edu.id ? null : edu.id)}
              style={{ 
                '--delay': `${index * 0.2}s`,
                '--edu-color': edu.color
              }}
            >
              {/* Card Header */}
              <div className="education-header">
                <div className="education-icon">
                  <span className="icon">{edu.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <div className="status-badge">{edu.status}</div>
              </div>

              {/* Main Info */}
              <div className="education-main">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-institution">
                  <span className="institution-name">{edu.institution}</span>
                  <span className="institution-location">{edu.location}</span>
                </div>
                <div className="education-meta">
                  <span className="year-badge">{edu.year}</span>
                  <span className="gpa-badge">GPA: {edu.gpa}</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="education-highlights">
                {Object.entries(edu.highlights).map(([key, value]) => (
                  <div key={key} className="highlight-item">
                    <span className="highlight-label">{key}:</span>
                    <span className="highlight-value">{value}</span>
                  </div>
                ))}
              </div>

              {/* Skills Preview */}
              <div className="skills-preview">
                {edu.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
                {edu.skills.length > 3 && (
                  <span className="skill-tag more">+{edu.skills.length - 3}</span>
                )}
              </div>

              {/* Expand Indicator */}
              <div className="expand-indicator">
                {selectedEducation === edu.id ? '▼' : '▶'}
              </div>

              {/* Expanded Content */}
              <div className={`expanded-content ${selectedEducation === edu.id ? 'open' : ''}`}>
                <div className="description-section">
                  <p className="education-description">{edu.description}</p>
                </div>

                <div className="courses-section">
                  <h4>📚 Key Courses</h4>
                  <div className="courses-list">
                    {edu.courses.map((course, i) => (
                      <div key={i} className="course-item">
                        <span className="course-bullet">▪</span>
                        <span className="course-name">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="achievements-section">
                  <h4>🏆 Achievements</h4>
                  <div className="achievements-list">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="achievement-item">
                        <span className="achievement-bullet">✦</span>
                        <span className="achievement-text">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skills-section">
                  <h4>⚡ Skills Gained</h4>
                  <div className="skills-grid">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="skill-chip">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>

              {/* Card Glow Effect */}
              <div className="card-glow" style={{ background: `radial-gradient(circle, ${edu.color}15 0%, transparent 70%)` }}></div>
            </div>
          ))}
        </div>

        {/* Education Summary */}
        <div className={`education-summary ${isVisible ? 'visible' : ''}`}>
          <div className="summary-card">
            <h3>🎯 Academic Excellence</h3>
            <p>Maintained strong academic performance across all programs with hands-on project experience</p>
          </div>
          <div className="summary-card">
            <h3>🚀 Continuous Learning</h3>
            <p>Always expanding knowledge through formal education and industry-recognized certifications</p>
          </div>
          <div className="summary-card">
            <h3>💡 Practical Application</h3>
            <p>Combined theoretical knowledge with real-world projects and industry best practices</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Education Section Styles */
        .education {
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .education-background {
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
          animation: float 14s ease-in-out infinite;
        }

        .orb-1 {
          width: 380px;
          height: 380px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #10B981, #06B6D4);
          bottom: 20%;
          left: 10%;
          animation-delay: -5s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #F59E0B, #8B5CF6);
          top: 60%;
          right: 60%;
          animation-delay: -10s;
        }

        .knowledge-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          color: rgba(99, 102, 241, 0.08);
          font-size: 1.5rem;
          animation: particleFloat linear infinite;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
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

        /* Education Stats */
        .education-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .education-stats.visible {
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

        /* Filter Options */
        .education-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
          flex-wrap: wrap;
        }

        .education-filter.visible {
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

        /* Education Grid */
        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
        }

        .education-grid.visible {
          opacity: 1;
        }

        /* Education Cards */
        .education-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.8s ease forwards;
          animation-delay: var(--delay);
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .education-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--edu-color);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .education-card:hover .card-glow {
          opacity: 1;
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .education-icon {
          position: relative;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--edu-color);
          border-radius: 12px;
          font-size: 1.5rem;
        }

        .icon-glow {
          position: absolute;
          inset: -5px;
          background: var(--edu-color);
          border-radius: 16px;
          opacity: 0.2;
          filter: blur(10px);
        }

        .status-badge {
          background: rgba(16, 185, 129, 0.2);
          color: #10B981;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(16, 185, 129, 0.3);
          white-space: nowrap;
        }

        .education-main {
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .education-degree {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          line-height: 1.3;
          word-wrap: break-word;
          hyphens: auto;
        }

        .institution-name {
          color: var(--edu-color);
          font-size: 1.1rem;
          font-weight: 600;
          display: block;
          word-wrap: break-word;
        }

        .institution-location {
          color: #9CA3AF;
          font-size: 0.9rem;
          margin-top: 0.25rem;
          display: block;
        }

        .education-meta {
          display: flex;
          gap: 0.5rem;
          margin: 1rem 0;
          flex-wrap: wrap;
        }

        .year-badge, .gpa-badge {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .gpa-badge {
          background: var(--edu-color);
          border-color: var(--edu-color);
        }

        /* Highlights */
        .education-highlights {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .highlight-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          min-height: 36px;
        }

        .highlight-label {
          color: #9CA3AF;
          text-transform: capitalize;
          flex-shrink: 0;
          margin-right: 0.5rem;
        }

        .highlight-value {
          color: var(--edu-color);
          font-weight: 600;
          text-align: right;
          word-wrap: break-word;
          hyphens: auto;
          line-height: 1.3;
        }

        /* Skills Preview */
        .skills-preview {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .skill-tag.more {
          background: var(--edu-color);
        }

        /* Expand Indicator */
        .expand-indicator {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: var(--edu-color);
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .education-card.selected .expand-indicator {
          transform: rotate(90deg);
        }

        /* Expanded Content */
        .expanded-content {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
        }

        .expanded-content.open {
          max-height: 1000px;
          opacity: 1;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 1.5rem;
        }

        .description-section {
          margin-bottom: 2rem;
        }

        .education-description {
          color: #E5E7EB;
          line-height: 1.6;
          font-size: 0.95rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border-left: 3px solid var(--edu-color);
          margin: 0;
        }

        .courses-section,
        .achievements-section,
        .skills-section {
          margin-bottom: 2rem;
        }

        .courses-section h4,
        .achievements-section h4,
        .skills-section h4 {
          color: #ffffff;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .courses-list,
        .achievements-list {
          display: grid;
          gap: 0.5rem;
        }

        .course-item,
        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 6px;
        }

        .course-bullet,
        .achievement-bullet {
          color: var(--edu-color);
          font-size: 0.8rem;
          margin-top: 0.1rem;
        }

        .course-name,
        .achievement-text {
          color: #E5E7EB;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .skills-grid {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .skill-chip {
          background: linear-gradient(135deg, var(--edu-color), var(--edu-color)aa);
          color: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--edu-color);
        }

        /* Progress Bar */
        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0 0 20px 20px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--edu-color);
          transition: width 0.3s ease;
        }

        /* Education Summary */
        .education-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
        }

        .education-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .summary-card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .summary-card h3 {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .summary-card p {
          color: #9CA3AF;
          line-height: 1.6;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes particleFloat {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          to {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .education {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .education-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .education-filter {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            min-height: 44px;
          }

          .education-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .education-card {
            padding: 1.5rem;
            min-height: 350px;
          }

          .education-degree {
            font-size: 1.2rem;
          }

          .education-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .education-summary {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .highlight-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }

          .highlight-value {
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }

          .education-stats {
            grid-template-columns: 1fr;
          }

          .education-filter {
            flex-direction: column;
            align-items: center;
          }

          .filter-btn {
            width: 100%;
            max-width: 200px;
            justify-content: center;
          }

          .education-card {
            padding: 1rem;
          }

          .education-degree {
            font-size: 1.1rem;
          }

          .skills-preview {
            justify-content: center;
          }
        }

        /* Additional responsive improvements */
        @media (max-width: 360px) {
          .container {
            padding: 0 0.75rem;
          }
          
          .section-title {
            font-size: 1.75rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .education-card {
            padding: 1rem;
          }
          
          .education-degree {
            font-size: 1.1rem;
          }
          
          .education-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .skills-preview {
            justify-content: center;
          }
        }

        /* Landscape mobile phones */
        @media (max-width: 768px) and (orientation: landscape) {
          .education {
            padding: 4rem 0 3rem;
          }
          
          .section-header {
            margin-bottom: 2rem;
          }
          
          .education-stats {
            margin-bottom: 2rem;
          }
        }

        /* Large screens optimization */
        @media (min-width: 1400px) {
          .container {
            max-width: 1400px;
          }
          
          .education-grid {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          }
        }

        /* Height-based media queries for better vertical spacing */
        @media (max-height: 600px) {
          .education {
            padding: 3rem 0 2rem;
          }
          
          .section-header {
            margin-bottom: 2rem;
          }
          
          .education-stats {
            margin-bottom: 2rem;
          }
        }

        /* Improved touch targets for mobile */
        @media (max-width: 768px) {
          .filter-btn {
            min-height: 44px;
            padding: 0.75rem 1rem;
          }
          
          .education-card {
            min-height: auto;
            touch-action: manipulation;
          }
        }

        /* Fix for very wide screens */
        @media (min-width: 1800px) {
          .education-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 1200px;
            margin: 0 auto;
      }
        }`
    }</style>
    </section>
  )
}

export default Education
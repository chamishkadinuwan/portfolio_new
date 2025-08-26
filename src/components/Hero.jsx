import React from 'react'

const Hero = ({ setActiveSection }) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Update this path to your actual CV
    link.download = 'your-name-cv.pdf'
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

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Chamishk Dinuwan</h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Creating innovative web solutions with modern technologies and user-centered design.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img 
              src="/myimage.jpg" 
              alt="Chamishk Dinuwan" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', }} 
            />
          </div>
        </div>
      </section>

      <style jsx>{`
      .hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  flex-wrap: wrap-reverse;
}

.hero-content {
  flex: 1;
  min-width: 300px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.hero-subtitle {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1d4ed8;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 90%;
}

.hero-buttons {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 150px;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background-color: #1d4ed8;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(29, 78, 216, 0.25);
}

.btn-secondary {
  background-color: #ffffff;
  color: #374151;
  border: 1px solid #e5e7eb;
}

.btn-secondary:hover {
  background-color: #f9fafb;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

.hero-image {
  flex: 1;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #6b7280;
  font-size: 1.2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 4rem 1.5rem 3rem;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
    max-width: 100%;
    margin-bottom: 2rem;
  }

  .hero-buttons {
    justify-content: center;

  }
  
  .btn {
    min-width: 140px;
    padding: 0.875rem 1.5rem;
  }

  .hero-image {
    margin-bottom: 1rem;
  }
  
  .image-placeholder {
    width: 250px;
    height: 250px;
  }
}
      `}</style>
    </>
  )
}

export default Hero

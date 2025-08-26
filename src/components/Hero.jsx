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
            <span>Your Photo</span>
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
          gap: 2rem;
          flex-wrap: wrap-reverse;
        }

        .hero-content {
          flex: 1;
          min-width: 300px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .hero-subtitle {
          font-size: 1.75rem;
          font-weight: 500;
          color: #1d4ed8;
          margin-bottom: 1rem;
        }

        .hero-description {
          font-size: 1rem;
          color: #4b5563;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          cursor: pointer;
          border-radius: 6px;
          font-weight: 500;
          transition: all 0.3s;
        }

        .btn-primary {
          background-color: #1d4ed8;
          color: #ffffff;
        }

        .btn-primary:hover {
          background-color: #2563eb;
        }

        .btn-secondary {
          background-color: #e5e7eb;
          color: #111827;
        }

        .btn-secondary:hover {
          background-color: #d1d5db;
        }

        .hero-image {
          flex: 1;
          min-width: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background-color: #e5e7eb;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          color: #6b7280;
          font-size: 1.2rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-image {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Hero

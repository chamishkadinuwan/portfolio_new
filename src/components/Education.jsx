const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      institution: 'University of Technology',
      year: '2016 - 2018',
      description: 'Specialized in Software Engineering and Web Technologies'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in IT',
      institution: 'State University',
      year: '2012 - 2016',
      description: 'Graduated with honors. Minor in Mathematics'
    },
    {
      id: 3,
      degree: 'Web Development Bootcamp',
      institution: 'Coding Academy',
      year: '2015',
      description: 'Intensive 12-week program focused on full-stack development'
    }
  ]

  return (
    <>
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map(edu => (
              <div key={edu.id} className="education-card">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="education-year">{edu.year}</span>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          /* Education.css - Premium Styling */

.education {
  padding: 8rem 2rem 6rem;
  max-width: auto;
  margin: 0 auto;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
}

.education::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border-radius: 50%;
  z-index: -1;
}

.education::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%);
  border-radius: 50%;
  z-index: -1;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  padding-bottom: 1.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 2px;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  position: relative;
}

.education-grid::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  background: linear-gradient(to bottom, #6366F1, #EC4899);
  border-radius: 3px;
  z-index: 0;
}

.education-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.education-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.education-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(99, 102, 241, 0.15);
}

.education-card:hover::before {
  opacity: 1;
}

.education-card::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.2);
}

.education-card:nth-child(even)::after {
  right: auto;
  left: -10px;
}

.education-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.education-card h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 2px;
}

.education-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.education-card h4::before {
  content: '🏫';
  font-size: 1.2rem;
}

.education-year {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  color: #ffffff;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.education-card p {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 10px;
  border-left: 3px solid #6366F1;
}

/* Animation for education cards */
.education-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.education-card:nth-child(1) {
  animation-delay: 0.1s;
}

.education-card:nth-child(2) {
  animation-delay: 0.2s;
}

.education-card:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
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
@media (max-width: 968px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .education-grid::before {
    left: 20px;
  }
  
  .education-card::after {
    left: -10px;
    right: auto;
  }
  
  .education-card:nth-child(even)::after {
    left: -10px;
  }
}

@media (max-width: 768px) {
  .education {
    padding: 6rem 1.5rem 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .education-card {
    padding: 2rem 1.5rem;
    margin-left: 2rem;
  }
  
  .education-card::after {
    left: -32px;
  }
}

@media (max-width: 480px) {
  .education {
    padding: 5rem 1rem 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .education-card {
    padding: 1.5rem;
    margin-left: 1.5rem;
  }
  
  .education-card h3 {
    font-size: 1.3rem;
  }
  
  .education-card h4 {
    font-size: 1rem;
  }
  
  .education-grid::before {
    left: 15px;
  }
  
  .education-card::after {
    left: -25px;
    width: 16px;
    height: 16px;
  }
}
        `}</style>
      </section>
    </>
  )
}

export default Education

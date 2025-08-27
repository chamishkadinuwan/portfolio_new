
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MISP E+',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database.',
      technologies: ['React', 'Node.js', 'Firebase', 'Python Flask'],
      image: 'misp.png',
      github: 'https://github.com/chamishkadinuwan/mispe.git',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'TeachMate',
      description: 'An AI-powered mobile e-learning app that uses the Gemini API to provide personalized lessons, interactive quizzes, and real-time learning assistance, optimized for on-the-go study.',
      technologies: ['React Native', 'Firebase', 'Material UI', 'Gemini API'],
      image: '/placeholder-project.jpg',
      github: 'https://github.com/chamishkadinuwan/guru.git',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'TechPulse',
      description: 'A mobile news application built with Java and Firebase, delivering real-time tech updates and personalized news feeds.',
      technologies: ['Java', 'Firebase','Material UI'],
      image: '/techpuls2.jpeg',
      github: 'https://github.com/chamishkadinuwan/techpulse.git',
      demo: 'https://example.com'
    },
    {
      id: 4,
      title: 'Attendese',
      description: 'A web-based attendance system built with HTML, CSS, PHP, and SQL database, enabling easy tracking and management of student or employee attendance.',
      technologies: ['HTML', 'CSS', 'PHP', 'SQL database'],
      image: '/placeholder-project.jpg',
      github: 'https://github.com/chamishkadinuwan/attendese.git',
      demo: 'https://example.com'
    }
  ]

  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          /* Projects.css - Premium Styling */

.projects {
  padding: 8rem 2rem 6rem;
  max-width: auto;
  margin: 0 auto;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
}

.projects::before {
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

.projects::after {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  z-index: 1;
}

.project-card::before {
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

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
}

.project-card:hover::before {
  opacity: 1;
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 220px;
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

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(236, 72, 153, 0.9) 100%);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  color: #6366F1;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.project-links a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
  transition: width 0.5s ease;
  z-index: -1;
}

.project-links a:hover {
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.project-links a:hover::before {
  width: 100%;
}

.project-content {
  padding: 1.5rem 2rem 2rem;
}

.project-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.project-content h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 2px;
}

.project-content p {
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  color: #ffffff;
  transform: translateY(-2px);
}

/* Animation for project cards */
.project-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.project-card:nth-child(1) {
  animation-delay: 0.1s;
}

.project-card:nth-child(2) {
  animation-delay: 0.2s;
}

.project-card:nth-child(3) {
  animation-delay: 0.3s;
}

.project-card:nth-child(4) {
  animation-delay: 0.4s;
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
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 6rem 1.5rem 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-content {
    padding: 1.25rem 1.5rem 1.5rem;
  }
  
  .project-links {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  
  .project-links a {
    width: 140px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .projects {
    padding: 5rem 1rem 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .project-image {
    height: 180px;
  }
  
  .project-content h3 {
    font-size: 1.3rem;
  }
}
        `}</style>
      </section>
    </>
  )
}

export default Projects

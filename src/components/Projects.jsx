const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/placeholder-project.jpg',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
      image: '/placeholder-project.jpg',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current and forecasted weather data for any location.',
      technologies: ['JavaScript', 'Weather API', 'CSS3', 'HTML5'],
      image: '/placeholder-project.jpg',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'A mobile-friendly fitness application that helps users track workouts and progress.',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'Node.js'],
      image: '/placeholder-project.jpg',
      github: 'https://github.com',
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
          .projects {
            padding: 6rem 2rem 4rem;
            max-width: 1200px;
            margin: 0 auto;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #111827;
            margin-bottom: 3rem;
            text-align: center;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .project-card {
            background-color: #f3f4f6;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .project-image {
            position: relative;
            overflow: hidden;
          }

          .project-image img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.3s;
          }

          .project-card:hover .project-image img {
            transform: scale(1.05);
          }

          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(29, 78, 216, 0.8);
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s;
          }

          .project-card:hover .project-overlay {
            opacity: 1;
          }

          .project-links a {
            margin: 0 0.5rem;
            padding: 0.5rem 1rem;
            background-color: #ffffff;
            color: #1d4ed8;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            transition: background-color 0.3s, color 0.3s;
          }

          .project-links a:hover {
            background-color: #1d4ed8;
            color: #ffffff;
          }

          .project-content {
            padding: 1rem 1.5rem 1.5rem;
          }

          .project-content h3 {
            font-size: 1.25rem;
            color: #111827;
            margin-bottom: 0.5rem;
          }

          .project-content p {
            font-size: 0.95rem;
            color: #4b5563;
            margin-bottom: 0.75rem;
          }

          .project-technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .tech-tag {
            background-color: #e5e7eb;
            color: #111827;
            padding: 0.3rem 0.6rem;
            border-radius: 5px;
            font-size: 0.8rem;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .projects-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Projects

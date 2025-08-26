const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      duration: 'Jan 2021 - Present',
      achievements: [
        'Led development of company\'s flagship SaaS product using React and TypeScript',
        'Improved application performance by 40% through code optimization',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      duration: 'Mar 2018 - Dec 2020',
      achievements: [
        'Developed full-stack web applications for various clients',
        'Implemented RESTful APIs using Node.js and Express',
        'Collaborated with designers to create responsive and accessible UIs'
      ]
    },
    {
      id: 3,
      role: 'Web Developer Intern',
      company: 'StartUp Ventures',
      duration: 'Jun 2017 - Feb 2018',
      achievements: [
        'Assisted in developing company website and internal tools',
        'Gained experience with modern web development workflows',
        'Learned to work in an agile development environment'
      ]
    }
  ]

  return (
    <>
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-timeline">
            {experiences.map(exp => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company} • {exp.duration}</h4>
                  <ul>
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .experience {
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

          .experience-timeline {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-left: 20px;
          }

          .timeline-item {
            position: relative;
            padding-left: 2.5rem;
          }

          .timeline-marker {
            position: absolute;
            left: 0;
            top: 0.5rem;
            width: 14px;
            height: 14px;
            background-color: #1d4ed8;
            border-radius: 50%;
            border: 2px solid #ffffff;
            box-shadow: 0 0 0 2px #1d4ed8;
          }

          .timeline-content {
            background-color: #f3f4f6;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .timeline-content:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .timeline-content h3 {
            font-size: 1.25rem;
            color: #111827;
            margin-bottom: 0.25rem;
          }

          .timeline-content h4 {
            font-size: 1rem;
            color: #4b5563;
            margin-bottom: 0.75rem;
          }

          .timeline-content ul {
            list-style-type: disc;
            padding-left: 1.25rem;
            color: #374151;
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .timeline-content ul li {
            margin-bottom: 0.5rem;
          }

          /* Vertical line for timeline */
          .experience-timeline::before {
            content: '';
            position: absolute;
            left: 6px;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: #e5e7eb;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .experience-timeline {
              margin-left: 10px;
            }

            .timeline-item {
              padding-left: 2rem;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Experience

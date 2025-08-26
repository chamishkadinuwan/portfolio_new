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
          .education {
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

          .education-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .education-card {
            background-color: #f3f4f6;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .education-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .education-card h3 {
            font-size: 1.25rem;
            color: #111827;
            margin-bottom: 0.25rem;
          }

          .education-card h4 {
            font-size: 1rem;
            color: #4b5563;
            margin-bottom: 0.25rem;
          }

          .education-year {
            display: inline-block;
            margin-bottom: 0.75rem;
            color: #1d4ed8;
            font-weight: 500;
          }

          .education-card p {
            font-size: 0.95rem;
            color: #374151;
            line-height: 1.6;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .education-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Education

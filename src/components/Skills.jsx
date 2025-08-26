const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'UI/UX Design', level: 65 },
    { name: 'Git', level: 85 },
    { name: 'SQL', level: 75 }
  ]

  return (
    <>
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  {/* <span>{skill.level}%</span> */}
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .skills {
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

          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .skill-item {
            background-color: #f3f4f6;
            padding: 1.5rem;
            border-radius: 10px;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .skill-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .skill-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.75rem;
            font-weight: 500;
            color: #374151;
          }

          .skill-header h3 {
            font-size: 1.1rem;
            color: #111827;
          }

          .skill-bar {
            width: 100%;
            height: 12px;
            background-color: #e5e7eb;
            border-radius: 6px;
            overflow: hidden;
          }

          .skill-progress {
            height: 100%;
            background-color: #1d4ed8;
            border-radius: 6px;
            transition: width 0.5s ease-in-out;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .skills-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Skills

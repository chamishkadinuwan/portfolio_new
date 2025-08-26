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
         /* Skills.css - Premium Styling */

.skills {
  padding: 8rem 2rem 6rem;
  max-width: auto;
  margin: 0 auto;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
}

.skills::before {
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

.skills::after {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.skill-item {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.skill-item::before {
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

.skill-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.12);
}

.skill-item:hover::before {
  opacity: 1;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.skill-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  position: relative;
  padding-left: 1.75rem;
}

.skill-header h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 50%;
}

.skill-header span {
  font-size: 1rem;
  font-weight: 600;
  color: #6366F1;
  background: rgba(99, 102, 241, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
}

.skill-bar {
  width: 100%;
  height: 10px;
  background: rgba(229, 231, 235, 0.7);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  transition: width 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Animation for skill items */
.skill-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.skill-item:nth-child(1) {
  animation-delay: 0.1s;
}

.skill-item:nth-child(2) {
  animation-delay: 0.2s;
}

.skill-item:nth-child(3) {
  animation-delay: 0.3s;
}

.skill-item:nth-child(4) {
  animation-delay: 0.4s;
}

.skill-item:nth-child(5) {
  animation-delay: 0.5s;
}

.skill-item:nth-child(6) {
  animation-delay: 0.6s;
}

.skill-item:nth-child(7) {
  animation-delay: 0.7s;
}

.skill-item:nth-child(8) {
  animation-delay: 0.8s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 968px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .skills {
    padding: 6rem 1.5rem 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .skill-item {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .skills {
    padding: 5rem 1rem 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .skill-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .skill-header span {
    align-self: flex-end;
  }
}
        `}</style>
      </section>
    </>
  )
}

export default Skills


const About = ({ setActiveSection }) => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with 2+ years of experience creating 
                web applications. I specialize in JavaScript technologies including React, 
                Node.js, and Express, with a strong focus on responsive design and 
                user experience.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving 
                to deliver solutions that meet both business objectives and user needs. 
                I enjoy tackling complex challenges and continuously expanding my skill set.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                exploring new technologies, or sharing knowledge through tech blogs and 
                community events.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
         .about {
  padding: 8rem 2rem 6rem;
  max-width: auto;
  margin: 0 auto;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.about::before {
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

.about::after {
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

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  flex-wrap: wrap;
}

.about-text {
  flex: 2;
  min-width: 280px;
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.8;
  position: relative;
}

.about-text p {
  margin-bottom: 1.8rem;
  position: relative;
  padding-left: 1.5rem;
}

.about-text p::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  height: 8px;
  width: 8px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 50%;
}

.about-stats {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  min-width: 220px;
}

.stat {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.stat::before {
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

.stat:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.1);
}

.stat:hover::before {
  opacity: 1;
}

.stat h3 {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
}

.stat:hover h3 {
  transform: scale(1.1);
}

.stat p {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
  transition: all 0.3s ease;
}

.stat:hover p {
  color: #4b5563;
}

/* Animation keyframes */
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

.about-text p {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.about-text p:nth-child(1) {
  animation-delay: 0.1s;
}

.about-text p:nth-child(2) {
  animation-delay: 0.2s;
}

.about-text p:nth-child(3) {
  animation-delay: 0.3s;
}

.stat {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.stat:nth-child(1) {
  animation-delay: 0.4s;
}

.stat:nth-child(2) {
  animation-delay: 0.5s;
}

.stat:nth-child(3) {
  animation-delay: 0.6s;
}

/* Responsive Design */
@media (max-width: 968px) {
  .about-content {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 6rem 1.5rem 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .about-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
  }
  
  .about-text p::before {
    display: none;
  }
  
  .about-text p {
    padding-left: 0;
  }
  
  .about-stats {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.2rem;
    width: 100%;
  }
  
  .stat {
    flex: 1 1 140px;
    min-width: 140px;
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 5rem 1rem 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-stats {
    flex-direction: column;
  }
  
  .stat {
    width: 100%;
  }
}
        `}</style>
      </section>
    </>
  )
}

export default About

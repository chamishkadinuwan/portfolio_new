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

          .about-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .about-text {
            flex: 2;
            min-width: 280px;
            font-size: 1rem;
            color: #4b5563;
            line-height: 1.7;
          }

          .about-text p {
            margin-bottom: 1.5rem;
          }

          .about-stats {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            min-width: 200px;
          }

          .stat {
            background-color: #f3f4f6;
            padding: 1.5rem;
            border-radius: 10px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .stat:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .stat h3 {
            font-size: 2rem;
            color: #1d4ed8;
            margin-bottom: 0.5rem;
          }

          .stat p {
            font-size: 1rem;
            color: #374151;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .about-content {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .about-stats {
              flex-direction: row;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
            }

            .stat {
              flex: 1 1 120px;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default About

import React, { useState } from 'react'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's talk about your project</h3>
              <p>
                I'm currently available for freelance work and open to full-time opportunities. 
                Feel free to reach out if you want to collaborate on something exciting.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong>
                  <span>john.doe@example.com</span>
                </div>
                <div className="contact-item">
                  <strong>Location:</strong>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>

        <style jsx>{`
/* Contact.css - Premium Styling */

.contact {
  padding: 8rem 2rem 6rem;
  max-width: auto;
  margin: 0 auto;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
}

.contact::before {
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

.contact::after {
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

.contact-content {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.contact-info {
  flex: 1 1 300px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.contact-info:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.contact-info h3 {
  font-size: 1.8rem;
  color: #111827;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.contact-info h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 2px;
}

.contact-info p {
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.7;
  font-size: 1.05rem;
}

.contact-details {
  margin-bottom: 2rem;
}

.contact-item {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-item strong {
  color: #1d4ed8;
  min-width: 70px;
}

.contact-item span {
  color: #4b5563;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  color: #ffffff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.social-links a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, #EC4899 0%, #6366F1 100%);
  transition: width 0.5s ease;
  z-index: -1;
}

.social-links a:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}

.social-links a:hover::before {
  width: 100%;
}

.contact-form {
  flex: 1 1 300px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.contact-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  color: #111827;
  font-weight: 500;
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  font-family: 'Inter', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #6366F1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.btn-primary {
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 100%;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, #EC4899 0%, #6366F1 100%);
  transition: width 0.5s ease;
  z-index: -1;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover::before {
  width: 100%;
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

.contact-info,
.contact-form {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.contact-form {
  animation-delay: 0.2s;
}

/* Responsive */
@media (max-width: 968px) {
  .contact-content {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 6rem 1.5rem 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  .contact-info,
  .contact-form {
    padding: 2rem;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 5rem 1rem 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-info,
  .contact-form {
    padding: 1.5rem;
  }
  
  .social-links {
    flex-direction: column;
  }
  
  .social-links a {
    text-align: center;
  }
}
        `}</style>
      </section>
    </>
  )
}

export default Contact

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
                  <span>Chamishkadkulasinghe@gmail.com</span>
                </div>
                <div className="contact-item">
                  <strong>Location:</strong>
                  <span>Colombo, Sri Lanks</span>
                </div>
                  <div className="contact-item">
                  <strong>Phone:</strong>
                  <span>+94 769963383</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/chamishka-dinuwan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/chamishkadinuwan" target="_blank" rel="noopener noreferrer">GitHub</a>

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

/* Contact Section - Dark Theme Premium Styling */

.contact {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Animated Background Elements */
.contact::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%);
  border-radius: 50%;
  filter: blur(80px);
  animation: float 14s ease-in-out infinite;
  z-index: 0;
}

.contact::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(239, 68, 68, 0.08) 100%);
  border-radius: 50%;
  filter: blur(80px);
  animation: float 14s ease-in-out infinite reverse;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Section Title */
.section-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  padding-bottom: 1.5rem;
  line-height: 1.1;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

/* Contact Content Layout */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Contact Info Section */
.contact-info {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.contact-info::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.contact-info:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  border-color: rgba(99, 102, 241, 0.2);
}

.contact-info:hover::before {
  opacity: 1;
}

.contact-info h3 {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
  font-weight: 700;
}

.contact-info h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
  border-radius: 2px;
}

.contact-info p {
  color: #9CA3AF;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  font-size: 1.1rem;
}

/* Contact Details */
.contact-details {
  margin-bottom: 3rem;
}

.contact-item {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateX(10px);
}

.contact-item strong {
  color: #6366F1;
  min-width: 80px;
  font-weight: 600;
}

.contact-item span {
  color: #E5E7EB;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.social-links a::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.social-links a:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.3);
}

.social-links a:hover::before {
  opacity: 1;
}

/* Contact Form */
.contact-form {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.contact-form::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.05) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.contact-form:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  border-color: rgba(236, 72, 153, 0.2);
}

.contact-form:hover::before {
  opacity: 1;
}

/* Form Groups */
.form-group {
  margin-bottom: 2rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  backdrop-filter: blur(10px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9CA3AF;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #6366F1;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
  font-family: 'Inter', sans-serif;
}

/* Submit Button */
.btn-primary {
  width: 100%;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #EC4899 0%, #6366F1 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary:active {
  transform: translateY(-1px);
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(0) rotate(180deg);
  }
  75% {
    transform: translateY(20px) rotate(270deg);
  }
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

.contact-info,
.contact-form {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

.contact-form {
  animation-delay: 0.2s;
}

/* Responsive Design */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 6rem 0 4rem;
  }

  .container {
    padding: 0 1rem;
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

  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .contact-item strong {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 5rem 0 3rem;
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
    justify-content: center;
  }

  .contact-info h3 {
    font-size: 1.5rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 1rem;
  }
}

        `}</style>
      </section>
    </>
  )
}

export default Contact

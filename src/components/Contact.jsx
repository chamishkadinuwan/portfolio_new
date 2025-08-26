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
          .contact {
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

          .contact-content {
            display: flex;
            gap: 3rem;
            flex-wrap: wrap;
          }

          .contact-info {
            flex: 1 1 300px;
            background-color: #f3f4f6;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          }

          .contact-info h3 {
            font-size: 1.5rem;
            color: #111827;
            margin-bottom: 1rem;
          }

          .contact-info p {
            color: #374151;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }

          .contact-details {
            margin-bottom: 1.5rem;
          }

          .contact-item {
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
            color: #111827;
          }

          .contact-item strong {
            margin-right: 0.5rem;
            color: #1d4ed8;
          }

          .social-links a {
            display: inline-block;
            margin-right: 0.75rem;
            padding: 0.5rem 1rem;
            background-color: #1d4ed8;
            color: #ffffff;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            transition: background-color 0.3s;
          }

          .social-links a:hover {
            background-color: #2563eb;
          }

          .contact-form {
            flex: 1 1 300px;
            background-color: #f3f4f6;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #111827;
            font-weight: 500;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.6rem 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.3s;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            border-color: #1d4ed8;
          }

          .btn-primary {
            padding: 0.75rem 1.5rem;
            background-color: #1d4ed8;
            color: #ffffff;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s;
          }

          .btn-primary:hover {
            background-color: #2563eb;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .contact-content {
              flex-direction: column;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Contact

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; {currentYear} John Doe. All rights reserved.</p>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>

        <style jsx>{`
          .footer {
            background-color: #111827;
            color: #f3f4f6;
            padding: 2rem 1rem;
          }

          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .footer-text p {
            margin: 0;
            font-size: 0.95rem;
            color: #9ca3af;
          }

          .footer-social a {
            color: #f3f4f6;
            margin-left: 1rem;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
          }

          .footer-social a:first-child {
            margin-left: 0;
          }

          .footer-social a:hover {
            color: #1d4ed8;
          }

          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              text-align: center;
              gap: 0.75rem;
            }

            .footer-social a {
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
          }
        `}</style>
      </footer>
    </>
  )
}

export default Footer

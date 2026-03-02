import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Building innovative solutions for businesses worldwide</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} MyBrand. All rights reserved.</p>
          <p>Made with ❤️ using React & Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

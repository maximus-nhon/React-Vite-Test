import './CTA.css';

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Get Started?</h2>
        <p className="cta-subtitle">Join thousands of satisfied customers and transform your business today</p>
        
        <div className="cta-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="cta-input"
          />
          <button className="cta-button">Start Free Trial</button>
        </div>
        
        <p className="cta-note">✓ No credit card required • ✓ Free 14-day trial • ✓ Cancel anytime</p>
      </div>
    </section>
  );
}

export default CTA;

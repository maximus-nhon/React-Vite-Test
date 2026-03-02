import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Your Solution</h1>
          <p className="hero-subtitle">
            Build amazing things with our cutting-edge platform. Start your journey today.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

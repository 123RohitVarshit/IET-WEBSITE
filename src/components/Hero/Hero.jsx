import './Hero.css';

function Hero() {
  return (
    <main className="hero">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className="hero-content">
        <span className="hero-label">IET On Campus Chapter · SIES GST</span>
        <h1>
          Innovate.<br />
          Engineer.<br />
          <span className="tagline-accent">Transform.</span>
        </h1>
        <p className="hero-desc">
          Empowering the next generation of engineers at SIES Graduate School of Technology through technical excellence, innovation, and global networking.
        </p>
        <div className="cta-group">
          <a href="#about" className="btn btn-primary">Discover More →</a>
          <a href="#events" className="btn btn-outline">View Events</a>
        </div>
      </div>
    </main>
  );
}

export default Hero;

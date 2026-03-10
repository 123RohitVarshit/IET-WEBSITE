import './About.css';

const tags = [
  'Research & Innovation',
  'Global Network',
  'Competitions',
  'Tech Talks',
  'Industry Connect',
];

function About() {
  return (
    <div className="section-wrapper" id="about">
      <div className="section">
        <div className="about-grid">
          <div>
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title">Who We Are</h2>
            <p className="section-desc">
              IET On Campus at SIES Graduate School of Technology is a student-led chapter affiliated with the Institution of Engineering and Technology — one of the world's largest engineering organisations.
            </p>
            <p className="section-desc" style={{ marginTop: '16px' }}>
              We bring students, faculty, and industry professionals together through workshops, seminars, competitions, and networking events that bridge academic knowledge with real-world engineering challenges.
            </p>
            <div className="about-tags">
              {tags.map((tag, index) => (
                <span className="about-tag" key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="about-visual-inner">
              <div className="iet-big-letters">IET</div>
              <div className="iet-tagline-small">Innovate · Engineer · Transform</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

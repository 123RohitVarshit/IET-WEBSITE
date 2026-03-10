import './Mission.css';

const missions = [
  {
    icon: '01',
    title: 'Innovate',
    description: 'Foster a culture of creative thinking and problem solving. We challenge students to think beyond textbooks and explore emerging technologies shaping the future.',
  },
  {
    icon: '02',
    title: 'Engineer',
    description: 'Build real technical skills through hands-on workshops, hackathons, and project-based learning. From circuits to code — we engineer solutions that matter.',
  },
  {
    icon: '03',
    title: 'Transform',
    description: 'Transform students into industry-ready professionals. We connect talent with opportunity through mentorship, internships, and a powerful global alumni network.',
  },
];

function Mission() {
  return (
    <div className="section-wrapper alt" id="mission">
      <div className="section">
        <span className="section-eyebrow">Our Mission</span>
        <h2 className="section-title">What Drives Us</h2>
        <p className="section-desc">Three pillars that define the IET On Campus experience at SIES GST.</p>
        <div className="mission-cards">
          {missions.map((mission, index) => (
            <div className="mission-card" key={index}>
              <div className="mission-icon">{mission.icon}</div>
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mission;

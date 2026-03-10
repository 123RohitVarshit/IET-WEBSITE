import './StatsBar.css';

const stats = [
  { number: '50', suffix: '+', label: 'Members & Growing' },
  { number: '2', suffix: '', label: 'Upcoming Events' },
  { number: '10', suffix: '+', label: 'Core Team Members' },
  { number: '1', suffix: 'st', label: 'Year on Campus' },
];

function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <div className="stat-number">
            {stat.number}<span>{stat.suffix}</span>
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;

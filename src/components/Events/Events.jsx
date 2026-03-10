import './Events.css';

const events = [
  {
    abbr: 'AI',
    date: 'FEB 2025',
    type: 'Workshop',
    title: 'AI & Machine Learning Bootcamp',
    meta: 'SIES GST Auditorium · 2 Days',
  },
  {
    abbr: 'DEV',
    date: 'MAR 2025',
    type: 'Competition',
    title: 'TechSprint 24H Hackathon',
    meta: 'Computer Lab Block · 24 Hours',
  },
  {
    abbr: 'TALK',
    date: 'APR 2025',
    type: 'Talk',
    title: 'Industry Leaders Speaker Series',
    meta: 'Seminar Hall · Half Day',
  },
];

function Events() {
  return (
    <div className="section-wrapper" id="events">
      <div className="section">
        <span className="section-eyebrow">Events</span>
        <h2 className="section-title">What's Happening</h2>
        <p className="section-desc">Stay ahead with our upcoming technical events, workshops, and competitions.</p>
        <div className="events-list">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-thumbnail">
                <span className="event-abbr">{event.abbr}</span>
                <span className="event-date-badge">{event.date}</span>
              </div>
              <div className="event-body">
                <div className="event-type">{event.type}</div>
                <div className="event-title">{event.title}</div>
                <div className="event-meta">{event.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;

import { Link } from 'react-router-dom'; // 1. Import Link
import './Events.css';

const events = [
  {
    abbr: 'AI',
    date: 'FEB 2025',
    type: 'Workshop',
    title: 'AI & Machine Learning Bootcamp',
    meta: 'SIES GST Auditorium · 2 Days',
    path: '/events/ai-bootcamp' // Added path
  },
  {
    abbr: 'HUNT', // Updated to match your new event
    date: 'MAR 2026',
    type: 'Competition',
    title: 'Automation Bounty Hunt',
    meta: 'Computer Labs · 2 Rounds',
    path: '/events/automation-bounty-hunt' // 2. Added the specific path here
  },
  {
    abbr: 'TALK',
    date: 'APR 2026',
    type: 'Talk',
    title: 'Industry Leaders Speaker Series',
    meta: 'Seminar Hall · Half Day',
    path: '/events/speaker-series' // Added path
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
            /* 3. Wrap the event-card in the Link component */
            <Link 
              to={event.path} 
              key={index} 
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div className="event-card">
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
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Events;
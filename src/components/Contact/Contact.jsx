import './Contact.css';

function Contact() {
  return (
    <div className="section-wrapper alt" id="contact">
      <div className="section">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's connect and build something great together.</h3>
            <p>
              Whether you're a student looking to join, a faculty member interested in collaboration, or an industry professional wanting to engage — we'd love to hear from you.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">LOC</div>
                <span>SIES Graduate School of Technology, Nerul, Navi Mumbai</span>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">@</div>
                <span>iet@siesgst.ac.in</span>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">IN</div>
                <span>Follow us @ietoncampus_siesgst</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Aarav" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Sharma" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="aarav@siesgst.ac.in" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us how we can help you..."></textarea>
            </div>
            <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';

const AutomationBountyHunt = () => {
  return (
    <div className="event-page" style={{ padding: 'var(--section-pad)', maxWidth: '900px', margin: '0 auto', marginTop: '80px' }}>
      
      <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '10px' }}>
        Automation Bounty Hunt
      </h1>
      <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', marginBottom: '40px' }}>
        A technical event combining hands-on learning with competitive problem-solving in Agentic AI and workflow automation.
      </p>

      {/* Round 1 Section */}
      <section style={{ background: 'var(--color-surface)', padding: '30px', borderRadius: '16px', marginBottom: '30px', border: '1px solid var(--color-glass-border)' }}>
        <h2 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>Round 1: System Prompt Engineering</h2>
        <ul style={{ color: 'var(--color-text-dim)', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li><strong>Type:</strong> Elimination Round (Top 15 teams advance)</li>
          <li><strong>Duration:</strong> 30 - 45 minutes</li>
          <li><strong>The Challenge:</strong> Study a 7-agent AI system architecture on the projector. You must identify each agent's role and write production-quality system prompts for 3 agents of your choice.</li>
        </ul>
      </section>

      {/* Round 2 Section */}
      <section style={{ background: 'var(--color-surface)', padding: '30px', borderRadius: '16px', border: '1px solid var(--color-glass-border)' }}>
        <h2 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>Round 2: n8n Workflow Building</h2>
        <ul style={{ color: 'var(--color-text-dim)', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '20px' }}>
          <li><strong>Type:</strong> Main Competition</li>
          <li><strong>Duration:</strong> 70 minutes</li>
          <li><strong>The Challenge:</strong> Build a real, functional automation workflow using n8n to solve actual college life problems. You will have 3 minutes to demo your live workflow to the judges!</li>
        </ul>

        <h3 style={{ color: 'var(--color-text)', marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }}>Available Tracks:</h3>
        <ul style={{ color: 'var(--color-text-dim)', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>Internship Opportunity Hunter</li>
          <li>AI Study Companion</li>
          <li>Campus Event Intelligence System</li>
          <li>Academic Deadline Command Centre</li>
        </ul>
      </section>

    </div>
  );
};

export default AutomationBountyHunt;
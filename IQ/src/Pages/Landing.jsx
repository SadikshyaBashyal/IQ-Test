import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  const sections = [
    { id: 'verbal', title: 'Verbal Reasoning', desc: 'Test your language comprehension and vocabulary skills', color: '#4a89dc', link: '/verbal-reasoning' },
    { id: 'logical', title: 'Logical Reasoning', desc: 'Challenge your problem-solving and pattern recognition', color: '#e9573f', link: '/logical-reasoning' },
    { id: 'memory', title: 'Memory', desc: 'Assess your working memory and recall abilities', color: '#3baeda', link: '/memory' },
    { id: 'spatial', title: 'Spatial Reasoning', desc: 'Evaluate your visual and spatial manipulation skills', color: '#8cc152', link: '/spatial-reasoning' }
  ];

  return (
    <div className="landing-page">
      <main>
        <div className="home-section">
          <div className="hero">
            <div className="hero-left">
              <h1>Unlock Your <span>Cognitive Potential</span></h1>
              <p>Take our scientifically designed IQ test to measure your intelligence across multiple dimensions</p>
            </div>
            <div className="hero-right">
              <Link to="/test" className="cta-button">Start Free Test</Link>
            </div>
          </div>

          <div className="section-cards">
            {sections.map((section, index) => (
              <div 
                key={section.id}
                className="section-card"
                style={{ '--card-color': section.color }}
              >
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
                <Link 
                  to={section.link}
                  className="card-button"
                  style={{ backgroundColor: section.color }}
                >
                  Try Sample Questions
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <p>© 2023 IQMaster - Measure Your Cognitive Abilities</p>
      </footer>
    </div>
  );
};

export default Landing;
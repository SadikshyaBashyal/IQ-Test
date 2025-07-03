import React, { useState } from 'react';
import './Memory.css';

function Memory() {
    const [showFact, setShowFact] = useState(false);
    return (
        <div className="memory-page">
            <h2>Memory</h2>
            <p className="memory-desc">
                Memory is your ability to store, retain, and recall information. It plays a key role in learning, daily tasks, and forming new experiences.
            </p>
            <button className="fact-toggle-btn" onClick={() => setShowFact(f => !f)}>
                {showFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
            </button>
            {showFact && (
                <div className="memory-fun-fact">
                    <strong>Did you know?</strong> The human brain can store an estimated 2.5 petabytes of information—that's about a million gigabytes!
                </div>
            )}
        </div>
    );
}

export default Memory; 
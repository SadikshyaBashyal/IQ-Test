import React, { useState } from 'react';
import './LogicalReasoning.css';

function LogicalReasoning() {
    const [showFact, setShowFact] = useState(false);
    return (
        <div className="logical-reasoning-page">
            <h2>Logical Reasoning</h2>
            <p className="lr-desc">
                Logical reasoning measures your ability to analyze and solve problems using logic and patterns. It is essential for decision-making, mathematics, and everyday problem-solving.
            </p>
            <button className="fact-toggle-btn" onClick={() => setShowFact(f => !f)}>
                {showFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
            </button>
            {showFact && (
                <div className="lr-fun-fact">
                    <strong>Did you know?</strong> Logical reasoning is used in computer science to create algorithms that power everything from search engines to self-driving cars!
                </div>
            )}
        </div>
    );
}

export default LogicalReasoning; 
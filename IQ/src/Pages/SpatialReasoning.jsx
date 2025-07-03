import React, { useState } from 'react';
import './SpatialReasoning.css';

function SpatialReasoning() {
    const [showFact, setShowFact] = useState(false);
    return (
        <div className="spatial-reasoning-page">
            <h2>Spatial Reasoning</h2>
            <p className="sr-desc">
                Spatial reasoning is the ability to visualize and manipulate objects in your mind. It is vital for activities like navigation, architecture, engineering, and art.
            </p>
            <button className="fact-toggle-btn" onClick={() => setShowFact(f => !f)}>
                {showFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
            </button>
            {showFact && (
                <div className="sr-fun-fact">
                    <strong>Did you know?</strong> Video game designers and pilots rely heavily on spatial reasoning to excel in their fields!
                </div>
            )}
        </div>
    );
}

export default SpatialReasoning; 
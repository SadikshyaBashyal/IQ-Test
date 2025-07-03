import React, { useState } from 'react';
import './VerbalReasoning.css';

function VerbalReasoning() {
    const [showFact, setShowFact] = useState(false);
    return (
        <div className="verbal-reasoning-page">
            <h2>Verbal Reasoning</h2>
            <p className="vr-desc">
                Verbal reasoning tests your understanding and reasoning using concepts framed in words. It is crucial for reading comprehension, communication, and language learning.
            </p>
            <button className="fact-toggle-btn" onClick={() => setShowFact(f => !f)}>
                {showFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
            </button>
            {showFact && (
                <div className="vr-fun-fact">
                    <strong>Did you know?</strong> People with strong verbal reasoning skills often excel in storytelling, debate, and learning new languages!
                </div>
            )}
        </div>
    );
}

export default VerbalReasoning; 
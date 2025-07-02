import React, { useState } from 'react';
import './SpatialReasoning.css';

const questions = Array.from({ length: 20 }, (_, i) => `Spatial Reasoning Question ${i + 1}`);

function SpatialReasoning() {
    const [showQuestions, setShowQuestions] = useState(false);
    return (
        <div className="spatial-reasoning-page">
            <h2>Spatial Reasoning</h2>
            <button onClick={() => setShowQuestions(true)} className="show-questions-btn">Show Questions</button>
            {showQuestions && (
                <ul className="questions-list">
                    {questions.map((q, idx) => (
                        <li key={idx}>{q}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SpatialReasoning; 
import React, { useState } from 'react';
import './LogicalReasoning.css';

const questions = Array.from({ length: 20 }, (_, i) => `Logical Reasoning Question ${i + 1}`);

function LogicalReasoning() {
    const [showQuestions, setShowQuestions] = useState(false);
    return (
        <div className="logical-reasoning-page">
            <h2>Logical Reasoning</h2>
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

export default LogicalReasoning; 
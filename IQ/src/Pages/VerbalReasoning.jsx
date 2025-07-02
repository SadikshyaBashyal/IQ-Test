import React, { useState } from 'react';
import './VerbalReasoning.css';

const questions = Array.from({ length: 20 }, (_, i) => `Verbal Reasoning Question ${i + 1}`);

function VerbalReasoning() {
    const [showQuestions, setShowQuestions] = useState(false);
    return (
        <div className="verbal-reasoning-page">
            <h2>Verbal Reasoning</h2>
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

export default VerbalReasoning; 
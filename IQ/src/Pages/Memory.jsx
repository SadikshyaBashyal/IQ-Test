import React, { useState } from 'react';
import './Memory.css';

const questions = Array.from({ length: 20 }, (_, i) => `Memory Question ${i + 1}`);

function Memory() {
    const [showQuestions, setShowQuestions] = useState(false);
    return (
        <div className="memory-page">
            <h2>Memory</h2>
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

export default Memory; 
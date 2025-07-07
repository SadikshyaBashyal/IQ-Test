import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logicalQuestions } from '../components/Sample-test';
import './LogicalReasoning.css';

function LogicalReasoning() {
    const [showFact, setShowFact] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
      setShowAnswer(false);
      setCurrent((prev) => (prev === 0 ? logicalQuestions.length - 1 : prev - 1));
    };
    const handleNext = () => {
      setShowAnswer(false);
      setCurrent((prev) => (prev === logicalQuestions.length - 1 ? 0 : prev + 1));
    };

    return (
      <>
        <div className="logical-reasoning-flex">
            <div className="logical-reasoning-left">
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
            <div className="logical-reasoning-right">
                <div className="lr-question-block">
                    <h3>Sample Question</h3>
                    <div className="lr-question-nav">
                      <button className="arrow-btn" onClick={handlePrev} aria-label="Previous question">&#8592;</button>
                      <div className="lr-question">
                        <span className="question-text">
                          {logicalQuestions[current].question}
                        </span>
                      </div>
                      <button className="arrow-btn" onClick={handleNext} aria-label="Next question">&#8594;</button>
                    </div>
                    <button className="answer-toggle-btn" onClick={() => setShowAnswer(a => !a)}>
                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {showAnswer && (
                        <div className="lr-answer">
                            <strong>Answer:</strong> <span>{logicalQuestions[current].answer}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <Link to="/sample-test" className="cta-button">Logical Test</Link>
        </div>
      </>
    );
}

export default LogicalReasoning; 
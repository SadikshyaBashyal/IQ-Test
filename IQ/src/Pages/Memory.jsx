import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {memoryQuestions} from '../components/Sample-test'
import './Memory.css';


function Memory() {
    const [showFact, setShowFact] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
      setShowAnswer(false);
      setCurrent((prev) => (prev === 0 ? memoryQuestions.length - 1 : prev - 1));
    };
    const handleNext = () => {
      setShowAnswer(false);
      setCurrent((prev) => (prev === memoryQuestions.length - 1 ? 0 : prev + 1));
    };

    return (
      <>
        <div className="memory-flex">
            <div className="memory-left">
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
            <div className="memory-right">
                <div className="memory-question-block">
                    <h3>Sample Question</h3>
                    <div className="memory-question-nav">
                      <button className="arrow-btn" onClick={handlePrev} aria-label="Previous question">&#8592;</button>
                      <div className="memory-question">
                        <span className="question-text">
                          {memoryQuestions[current].question}
                        </span>
                      </div>
                      <button className="arrow-btn" onClick={handleNext} aria-label="Next question">&#8594;</button>
                    </div>
                    <button className="answer-toggle-btn" onClick={() => setShowAnswer(a => !a)}>
                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {showAnswer && (
                        <div className="memory-answer">
                            <strong>Answer:</strong> <span>{memoryQuestions[current].answer}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <Link to="/sample-test" className="cta-button">Memory Test</Link>
        </div>
      </>  
    );
}

export default Memory; 
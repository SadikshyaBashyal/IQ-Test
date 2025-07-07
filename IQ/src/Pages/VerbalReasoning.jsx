import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VerbalReasoning.css';
import { verbalQuestions } from '../components/Sample-test';

function VerbalReasoning() {
    const [showFact, setShowFact] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
      setShowAnswer(false);
      setCurrent((prev) => (prev === 0 ? verbalQuestions.length - 1 : prev - 1));
    };
    const handleNext = () => {
      setShowAnswer(false);
      setCurrent((prev) => (prev === verbalQuestions.length - 1 ? 0 : prev + 1));
    };

    return (
      <>
        <div className="verbal-reasoning-flex">
            <div className="verbal-reasoning-left">
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
            <div className="verbal-reasoning-right">
                <div className="vr-question-block">
                    <h3>Sample Question</h3>
                    <div className="vr-question-nav">
                      <button className="arrow-btn" onClick={handlePrev} aria-label="Previous question">&#8592;</button>
                      <div className="vr-question">
                        <span className="question-text">
                          {verbalQuestions[current].question}
                        </span>
                      </div>
                      <button className="arrow-btn" onClick={handleNext} aria-label="Next question">&#8594;</button>
                    </div>
                    <button className="answer-toggle-btn" onClick={() => setShowAnswer(a => !a)}>
                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {showAnswer && (
                        <div className="vr-answer">
                            <strong>Answer:</strong> <span>{verbalQuestions[current].answer}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <Link to="/sample-test" className="cta-button">Verbal Test</Link>
        </div>
      </>
    );
}

export default VerbalReasoning; 
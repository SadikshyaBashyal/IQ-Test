import React, { useState } from 'react';
import './Memory.css';

const sampleQuestions = [
  {
    question: 'You are shown a list of 10 words. After 30 seconds, how many can you recall?',
    answer: 'This tests your short-term memory. Most people recall 5-7 words.'
  },
  {
    question: 'You see a sequence: 2, 4, 6, 8, __. What number comes next?',
    answer: '10. This tests your ability to remember and continue a pattern.'
  },
  {
    question: 'You are told a phone number: 555-1234. Can you repeat it backwards?',
    answer: '4321-555. This tests your working memory.'
  }
];

function Memory() {
    const [showFact, setShowFact] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
      setShowAnswer(false);
      setCurrent((prev) => (prev === 0 ? sampleQuestions.length - 1 : prev - 1));
    };
    const handleNext = () => {
      setShowAnswer(false);
      setCurrent((prev) => (prev === sampleQuestions.length - 1 ? 0 : prev + 1));
    };

    return (
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
                          {sampleQuestions[current].question}
                        </span>
                      </div>
                      <button className="arrow-btn" onClick={handleNext} aria-label="Next question">&#8594;</button>
                    </div>
                    <button className="answer-toggle-btn" onClick={() => setShowAnswer(a => !a)}>
                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {showAnswer && (
                        <div className="memory-answer">
                            <strong>Answer:</strong> <span>{sampleQuestions[current].answer}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Memory; 
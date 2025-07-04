import React, { useState } from 'react';
import './VerbalReasoning.css';

const sampleQuestions = [
  {
    question: 'Which word is most similar in meaning to "benevolent"? (A) Kind (B) Angry (C) Tired (D) Sad',
    answer: 'A) Kind'
  },
  {
    question: 'Choose the correctly spelled word: (A) Recieve (B) Receive (C) Recive (D) Receeve',
    answer: 'B) Receive'
  },
  {
    question: 'Fill in the blank: She _____ to the store before it started raining. (A) go (B) gone (C) went (D) going',
    answer: 'C) went'
  }
];

function VerbalReasoning() {
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
                          {sampleQuestions[current].question}
                        </span>
                      </div>
                      <button className="arrow-btn" onClick={handleNext} aria-label="Next question">&#8594;</button>
                    </div>
                    <button className="answer-toggle-btn" onClick={() => setShowAnswer(a => !a)}>
                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {showAnswer && (
                        <div className="vr-answer">
                            <strong>Answer:</strong> <span>{sampleQuestions[current].answer}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VerbalReasoning; 
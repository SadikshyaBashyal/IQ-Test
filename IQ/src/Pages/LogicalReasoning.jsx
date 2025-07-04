import React, { useState } from 'react';
import './LogicalReasoning.css';

const sampleQuestions = [
  {
    question: 'If all roses are flowers and some flowers fade quickly, can we conclude that some roses fade quickly?',
    answer: 'No, we cannot conclude that. While all roses are flowers, and some flowers fade quickly, it does not necessarily mean that any of the roses are among the flowers that fade quickly.'
  },
  {
    question: 'Tom is older than Jim. Jim is older than Harry. Who is the oldest?',
    answer: 'Tom is the oldest.'
  },
  {
    question: 'If the first two statements are true, is the final statement true?\nAll cats are mammals. Some mammals are black. Therefore, some cats are black.',
    answer: 'No, the conclusion does not necessarily follow. Some mammals being black does not mean any cats are black.'
  }
];

function LogicalReasoning() {
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
                          {sampleQuestions[current].question}
                        </span>
                      </div>
                      <button className="arrow-btn" onClick={handleNext} aria-label="Next question">&#8594;</button>
                    </div>
                    <button className="answer-toggle-btn" onClick={() => setShowAnswer(a => !a)}>
                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {showAnswer && (
                        <div className="lr-answer">
                            <strong>Answer:</strong> <span>{sampleQuestions[current].answer}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LogicalReasoning; 
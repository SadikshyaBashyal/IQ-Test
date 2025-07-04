import React, { useState } from 'react';
import './SpatialReasoning.css';

const sampleQuestions = [
  {
    question: 'Which shape comes next in the sequence: ◼ ◻ ◼ ◻ ?',
    answer: '◼. The pattern alternates between filled and empty squares.'
  },
  {
    question: 'If you rotate an "L" shape 90 degrees clockwise, what does it look like?',
    answer: 'It looks like a rotated "L" facing down.'
  },
  {
    question: 'Which object does not belong: Cube, Sphere, Pyramid, Circle?',
    answer: 'Circle. All others are 3D shapes; a circle is 2D.'
  }
];

function SpatialReasoning() {
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
        <div className="spatial-reasoning-flex">
            <div className="spatial-reasoning-left">
                <h2>Spatial Reasoning</h2>
                <p className="sr-desc">
                    Spatial reasoning is the ability to visualize and manipulate objects in your mind. It is vital for activities like navigation, architecture, engineering, and art.
                </p>
                <button className="fact-toggle-btn" onClick={() => setShowFact(f => !f)}>
                    {showFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
                </button>
                {showFact && (
                    <div className="sr-fun-fact">
                        <strong>Did you know?</strong> Video game designers and pilots rely heavily on spatial reasoning to excel in their fields!
                    </div>
                )}
            </div>
            <div className="spatial-reasoning-right">
                <div className="sr-question-block">
                    <h3>Sample Question</h3>
                    <div className="sr-question-nav">
                      <button className="arrow-btn" onClick={handlePrev} aria-label="Previous question">&#8592;</button>
                      <div className="sr-question">
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
                        <div className="sr-answer">
                            <strong>Answer:</strong> <span>{sampleQuestions[current].answer}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SpatialReasoning; 
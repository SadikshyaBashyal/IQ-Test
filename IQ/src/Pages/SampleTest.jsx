import React, { useState, useEffect } from 'react';
import { memorySample, verbalSample, spatialSample, logicalSample } from '../components/Sample-test';
import '../Pages/Test.css';

const categories = [
  { value: 'verbal', label: 'Verbal Reasoning' },
  { value: 'spatial', label: 'Spatial Reasoning' },
  { value: 'memory', label: 'Memory' },
  { value: 'logical', label: 'Logical Reasoning' },
];

const sampleMap = {
  verbal: verbalSample,
  spatial: spatialSample,
  memory: memorySample,
  logical: logicalSample,
};

const SampleTest = () => {
  const [selectedCategory, setSelectedCategory] = useState('verbal');
  const [questions, setQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  // Memory question timer state
  const [showMemoryOptions, setShowMemoryOptions] = useState(false);
  const [memoryTimer, setMemoryTimer] = useState(10);

  useEffect(() => {
    if (started && questions.length && selectedCategory === 'memory') {
      setShowMemoryOptions(false);
      setMemoryTimer(10);
    }
    // eslint-disable-next-line
  }, [started, current, selectedCategory]);

  useEffect(() => {
    let timer;
    if (started && questions.length && selectedCategory === 'memory' && !showMemoryOptions) {
      if (memoryTimer > 0) {
        timer = setTimeout(() => setMemoryTimer(memoryTimer - 1), 1000);
      } else {
        setShowMemoryOptions(true);
      }
    }
    return () => clearTimeout(timer);
  }, [memoryTimer, started, questions.length, selectedCategory, showMemoryOptions]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setStarted(false);
    setCompleted(false);
    setAnswers({});
    setCurrent(0);
  };

  const handleStart = () => {
    setQuestions(sampleMap[selectedCategory]);
    setStarted(true);
    setCompleted(false);
    setAnswers({});
    setCurrent(0);
  };

  const handleAnswer = (idx) => {
    setAnswers(prev => ({ ...prev, [current]: idx }));
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };
  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };
  const handleSubmit = () => {
    setCompleted(true);
  };

  if (!started) {
    return (
      <div className="test-page">
        <div className="test-description">
          <h2>Sample Test</h2>
          <p>Select a category to try 10 random questions:</p>
          <select value={selectedCategory} onChange={handleCategoryChange} style={{ fontSize: '1.1rem', padding: '0.5rem', borderRadius: '8px', margin: '1rem 0' }}>
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
          <div style={{ marginTop: '2rem' }}>
            <button onClick={handleStart} className="submit-btn">Start Sample Test</button>
          </div>
        </div>
      </div>
    );
  }

  if (completed) {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) score++;
    });
    return (
      <div className="test-page">
        <div className="test-results">
          <h2>Sample Test Results</h2>
          <div className="score-summary">
            <h3>Score: {score} / {questions.length}</h3>
          </div>
          <button onClick={() => setStarted(false)} className="submit-btn">Try Another Category</button>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const isMemory = selectedCategory === 'memory';

  return (
    <div className="test-page">
      <div className="test-header">
        <div className="test-info">
          <h2>Question {current + 1} of {questions.length}</h2>
          <div className="category-indicator">
            {categories.find(cat => cat.value === selectedCategory)?.label}
          </div>
        </div>
      </div>
      <div className="question-container">
        <div className="question-text">
          {isMemory ? (
            showMemoryOptions
              ? null
              : q.memorize
                ? <h3>{q.memorize}</h3>
                : <h3>{q.question}</h3>
          ) : (
            <h3>{q.question}</h3>
          )}
        </div>
        <div className="options-container">
          {isMemory ? (
            showMemoryOptions ? (
              <>
                {q.memorize && <div style={{ marginBottom: '1rem', fontWeight: 500 }}>{q.question}</div>}
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={`option-btn ${answers[current] === idx ? 'selected' : ''}`}
                    onClick={() => handleAnswer(idx)}
                  >
                    {String.fromCharCode(65 + idx)}) {opt}
                  </button>
                ))}
              </>
            ) : (
              <div style={{ fontSize: '1.2rem', color: '#667eea', textAlign: 'center', margin: '2rem 0' }}>
                <strong>Memorize the question...</strong>
                <div style={{ marginTop: '1rem', fontSize: '2rem' }}>{memoryTimer}s</div>
              </div>
            )
          ) : (
            q.options.map((opt, idx) => (
              <button
                key={idx}
                className={`option-btn ${answers[current] === idx ? 'selected' : ''}`}
                onClick={() => handleAnswer(idx)}
              >
                {String.fromCharCode(65 + idx)}) {opt}
              </button>
            ))
          )}
        </div>
      </div>
      <div className="test-navigation">
        <button onClick={handlePrev} disabled={current === 0} className="nav-btn">Previous</button>
        <div className="question-progress">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`progress-dot ${idx === current ? 'current' : ''} ${answers[idx] !== undefined ? 'answered' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
        {current === questions.length - 1 ? (
          <button onClick={handleSubmit} className="submit-btn">Submit</button>
        ) : (
          <button onClick={handleNext} className="nav-btn">Next</button>
        )}
      </div>
    </div>
  );
};

export default SampleTest; 
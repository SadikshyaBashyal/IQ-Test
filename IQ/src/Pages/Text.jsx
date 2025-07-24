import React, { useState, useEffect } from 'react';
import './Test.css';
import { allQuestions } from '../components/Sample-test';

const Text = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [score, setScore] = useState(0);
  // Memory question timer state
  const [showMemoryOptions, setShowMemoryOptions] = useState(false);
  const [memoryTimer, setMemoryTimer] = useState(10);

  useEffect(() => {
    let timer;
    if (testStarted && !testCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, testCompleted, timeLeft]);

  // Memory question timer logic
  useEffect(() => {
    const currentQ = allQuestions[currentQuestion];
    if (testStarted && currentQ.category === 'memory') {
      setShowMemoryOptions(false);
      setMemoryTimer(10);
    }
    // eslint-disable-next-line
  }, [currentQuestion, testStarted]);

  useEffect(() => {
    const currentQ = allQuestions[currentQuestion];
    let timer;
    if (testStarted && currentQ.category === 'memory' && !showMemoryOptions) {
      if (memoryTimer > 0) {
        timer = setTimeout(() => setMemoryTimer(memoryTimer - 1), 1000);
      } else {
        setShowMemoryOptions(true);
      }
    }
    return () => clearTimeout(timer);
  }, [memoryTimer, testStarted, currentQuestion, showMemoryOptions]);

  const handleStartTest = () => {
    setTestStarted(true);
    setTimeLeft(1200); // Reset timer
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitTest = () => {
    let correctCount = 0;
    Object.keys(selectedAnswers).forEach(questionIndex => {
      const question = allQuestions[parseInt(questionIndex)];
      if (selectedAnswers[questionIndex] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setTestCompleted(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getCategoryStats = () => {
    const stats = { logical: 0, verbal: 0, spatial: 0, memory: 0 };
    Object.keys(selectedAnswers).forEach(questionIndex => {
      const question = allQuestions[parseInt(questionIndex)];
      if (selectedAnswers[questionIndex] === question.correctAnswer) {
        stats[question.category]++;
      }
    });
    return stats;
  };

  const hasPendingQuestionsBehind = () => {
    for (let i = 0; i < currentQuestion; i++) {
      if (selectedAnswers[i] === undefined) {
        return true;
      }
    }
    return false;
  };

  if (!testStarted) {
    return (
      <div className="test-page">
        <div className='test-description'>
          <h2>Comprehensive IQ Test</h2>
          <p>This test contains 40 questions across 4 categories:</p>
          <ul>
            <li>Logical Reasoning (10 questions)</li>
            <li>Verbal Reasoning (10 questions)</li>
            <li>Spatial Reasoning (10 questions)</li>
            <li>Memory (10 questions)</li>
          </ul>
          <p><strong>Time Limit:</strong> 20 minutes</p>
          <p><strong>Instructions:</strong> Read each question carefully and select the best answer. You can navigate between questions and change your answers before submitting.</p>
        </div>
        <div className='test-start'>
          <button onClick={handleStartTest}>Start Test</button>
        </div>
      </div>
    );
  }

  if (testCompleted) {
    const stats = getCategoryStats();
    const percentage = (score / allQuestions.length) * 100;
    
    return (
      <div className="test-page">
        <div className="test-results">
          <h2>Test Results</h2>
          <div className="score-summary">
            <h3>Overall Score: {score}/{allQuestions.length} ({percentage.toFixed(1)}%)</h3>
            <div className="category-breakdown">
              <h4>Category Breakdown:</h4>
              <p>Logical Reasoning: {stats.logical}/10</p>
              <p>Verbal Reasoning: {stats.verbal}/10</p>
              <p>Spatial Reasoning: {stats.spatial}/10</p>
              <p>Memory: {stats.memory}/10</p>
            </div>
          </div>
          <button onClick={() => window.location.reload()}>Take Test Again</button>
        </div>
      </div>
    );
  }

  const currentQ = allQuestions[currentQuestion];
  const isMemory = currentQ.category === 'memory';
  const categoryColors = {
    logical: '#ff6b6b',
    verbal: '#4ecdc4',
    spatial: '#45b7d1',
    memory: '#96ceb4'
  };

  return (
    <div className="test-page">
      <div className="test-header">
        <div className="test-info">
          <h2>Question {currentQuestion + 1} of {allQuestions.length}</h2>
          <div className="category-indicator" style={{ backgroundColor: categoryColors[currentQ.category] }}>
            {currentQ.category.charAt(0).toUpperCase() + currentQ.category.slice(1)} Reasoning
          </div>
        </div>
        <div className="timer">
          Time Remaining: {formatTime(timeLeft)}
        </div>
      </div>

      <div className="question-container">
        <div className="question-text">
          {isMemory ? (
            showMemoryOptions
              ? null
              : currentQ.memorize
                ? <h3>{currentQ.memorize}</h3>
                : <h3>{currentQ.question}</h3>
          ) : (
            <h3>{currentQ.question}</h3>
          )}
        </div>
        <div className="options-container">
          {isMemory ? (
            showMemoryOptions ? (
              <>
                {currentQ.memorize && <div style={{ marginBottom: '1rem', fontWeight: 500 }}>{currentQ.question}</div>}
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    {String.fromCharCode(65 + index)}) {option}
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
            currentQ.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(index)}
              >
                {String.fromCharCode(65 + index)}) {option}
              </button>
            ))
          )}
        </div>
        {hasPendingQuestionsBehind() && (
          <div className="pending-questions-notify">
            You have pending questions to solve.
          </div>
        )}
      </div>

      <div className="test-navigation">
        <button 
          onClick={handlePrevQuestion} 
          disabled={currentQuestion === 0}
          className="nav-btn"
        >
          Previous
        </button>
        
        <div className="question-progress">
          {allQuestions.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index === currentQuestion ? 'current' : ''} ${selectedAnswers[index] !== undefined ? 'answered' : ''}`}
              onClick={() => setCurrentQuestion(index)}
            />
          ))}
        </div>

        {currentQuestion === allQuestions.length - 1 ? (
          <button onClick={handleSubmitTest} className="submit-btn">
            Submit Test
          </button>
        ) : (
          <button onClick={handleNextQuestion} className="nav-btn">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Text; 
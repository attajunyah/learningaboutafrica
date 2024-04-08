import React, { useState } from 'react';
import questions from './questions.json';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({ isSelected: false, isCorrect: false });

  const handleAnswerButtonClick = (isCorrect, index) => {
    setSelectedAnswer({ isSelected: true, isCorrect, index });

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer({ isSelected: false, isCorrect: false }); // Reset selection for the next question
      } else {
        setShowScore(true);
      }
    }, 1000); // Add a slight delay before moving to the next question
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedAnswer({ isSelected: false, isCorrect: false });
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect, index)}
                style={{
                  backgroundColor: selectedAnswer.isSelected && selectedAnswer.index === index
                    ? answerOption.isCorrect ? 'lightgreen' : 'red'
                    : '',
                  color: selectedAnswer.isSelected && selectedAnswer.index === index ? 'white' : 'black',
                }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;

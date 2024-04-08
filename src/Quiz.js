import React, { useState } from 'react';

const questions = [
  {
    questionText: 'What is the largest gold mine in Africa?',
    answerOptions: [
      { answerText: 'Kibali, Democratic Republic of the Congo', isCorrect: true },
      { answerText: 'Mponeng, South Africa', isCorrect: false },
      { answerText: 'Obuasi, Ghana', isCorrect: false },
      { answerText: 'Loulo-Gounkoto, Mali', isCorrect: false },
    ],
  },
  {
    questionText: 'Which African country is the largest producer of gold?',
    answerOptions: [
      { answerText: 'South Africa', isCorrect: false },
      { answerText: 'Ghana', isCorrect: true },
      { answerText: 'Mali', isCorrect: false },
      { answerText: 'Sudan', isCorrect: false },
    ],
  },
  // Add more questions as needed
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
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
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
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

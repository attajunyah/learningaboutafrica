import React, { useState } from 'react';
import './App.css';
import Quiz from './Quiz'; // Make sure you have this component created as described earlier

function App() {
  const [learningMode, setLearningMode] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the History of Gold in Africa</h1>
        <p>How would you like to learn today?</p>
        <div>
          <button onClick={() => setLearningMode('audio')}>Listen to Audio</button>
          <button onClick={() => setLearningMode('video')}>Watch Video</button>
          <button onClick={() => setLearningMode('read')}>Read Text</button>
          <button onClick={() => setLearningMode('quiz')}>Take a Quiz</button>
        </div>
        {learningMode && learningMode !== 'quiz' && <p>You have selected to {learningMode}.</p>}
        {learningMode === 'quiz' && <Quiz />}
        <h2>Explore the Map</h2>
        {/* Placeholder for the interactive map */}
        <p>Interactive Map of Africa will go here.</p>
        {/* Placeholder for the time slider */}
        <p>Time Slider to explore different eras.</p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "test"
function App() {
  return (
    <div >
      <h1>Guess the word:</h1>      
      <WordCard value={word}/>
    </div>
  );
}

export default App;

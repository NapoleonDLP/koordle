import React, { useState, useEffect } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import './Game.css';

const Game = () => {
  const [currentWord, setCurrentWord] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    loadWord();
  }, [])

  const loadWord = () => {
    fetch('http://localhost:3001/new-word')
    .then(data => data.json())
    .then(word => setAnswer(word.newWord))
    .catch(e => console.log(e))
  }

  return (
    <>
      <Board
        currentWord={ currentWord }
        attemptCount={ attemptCount }
        check={ check }
        setCheck={ setCheck }
        answer={ answer }
        ></Board>
      <Keyboard
        currentWord={ currentWord }
        setCurrentWord={ setCurrentWord }
        attemptCount={ attemptCount }
        setAttemptCount={ setAttemptCount }
        setCheck={ setCheck }
        answer={ answer }
        ></Keyboard>
    </>
  )
};

export default Game;

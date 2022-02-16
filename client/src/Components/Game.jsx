import React, { useState } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import './Game.css';

const Game = () => {
  const [currentWord, setCurrentWord] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);

  console.log("CurrentWord from Game component: ", currentWord);

  return (
    <>
      <Board currentWord={ currentWord } attemptCount={ attemptCount }></Board>
      <Keyboard currentWord={ currentWord } setCurrentWord={ setCurrentWord } attemptCount={ attemptCount } setAttemptCount={ setAttemptCount }></Keyboard>
    </>
  )
};

export default Game;

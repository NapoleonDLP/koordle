import React, { useState } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import './Game.css';

const Game = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [attempt, setAttempt] = useState(0);

  return (
    <>
      <Board currentWord={ currentWord } attempt={ attempt }></Board>
      <Keyboard currentWord={ currentWord } attempt={ attempt }></Keyboard>
    </>
  )
};

export default Game;

import React, { useState } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import './Game.css';

const Game = () => {
  const [currentWord, setCurrentWord] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [correctLetterWrongPlace, setCorrectLetterWrongPlace] = useState([]);
  const [correctLetterRightPlace, setCorrectLetterRightPlace] = useState([]);

  return (
    <>
      <Board
        currentWord={ currentWord }
        attemptCount={ attemptCount }
        correctLetterWrongPlace={ correctLetterWrongPlace }
        correctLetterRightPlace={ correctLetterRightPlace }
        ></Board>
      <Keyboard
        currentWord={ currentWord }
        setCurrentWord={ setCurrentWord }
        attemptCount={ attemptCount }
        setAttemptCount={ setAttemptCount }
        correctLetterRightPlace={ correctLetterRightPlace }
        setCorrectLetterRightPlace={ setCorrectLetterRightPlace }
        correctLetterWrongPlace={ correctLetterWrongPlace }
        setCorrectLetterWrongPlace={ setCorrectLetterWrongPlace }
        ></Keyboard>
    </>
  )
};

export default Game;

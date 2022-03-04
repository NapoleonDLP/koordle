import React, { useState, useEffect } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import Result from './Result';
import './Game.css';

const Game = () => {
  const [currentWord, setCurrentWord] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [didWin, setDidWin] = useState(null);

  useEffect(() => {
    loadWord();
  }, [])

  const loadWord = () => {
    fetch(process.env.REACT_APP_KOORDLE_API_URL + '/new-word')
    .then(data => data.json())
    .then(word => setAnswer(word.newWord))
    .catch(e => console.log(e))
  }

  useEffect(() => {
    checkWin();
  }, [ attemptCount ])

  const checkWin = async () => {
    let currentWordString = await currentWord.join('');
    if (answer === currentWordString && attemptCount <= 6) {
      setDidWin(true);
    } else if ( attemptCount >= 6 && didWin === null) {
      setDidWin(false);
    }
  }

  return (
    <div id='game'>
      <Board
        currentWord={ currentWord }
        attemptCount={ attemptCount }
        check={ check }
        setCheck={ setCheck }
        answer={ answer }
        result={ didWin }
      ></Board>
      <Keyboard
        currentWord={ currentWord }
        setCurrentWord={ setCurrentWord }
        attemptCount={ attemptCount }
        setAttemptCount={ setAttemptCount }
        setCheck={ setCheck }
        answer={ answer }
        result={ didWin }
      ></Keyboard>
      <Result
        result={ didWin }
        answer={ answer }
      ></Result>
    </div>
  )
};

export default Game;

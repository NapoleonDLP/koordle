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
    let stringifiedData = JSON.stringify({
      user_id: process.env.REACT_APP_TEST_USER_ID
    });

    fetch(process.env.REACT_APP_KOORDLE_API_LOCAL + '/new-game', { method: 'POST', headers: {
      'Content-Type': 'application/json',
    }, body: stringifiedData })
    //FOR NOW THE GAME RETURNS WITH THE WORD PROPERTY/ Remove when answer is checkd in DB/
    .then(data => data.json())
    .then(game => setAnswer(game.word))
    .catch(e => console.log(e))
  }

  useEffect(() => {
    checkWin();
  }, [ attemptCount ])

  const checkWin = async () => {
    let currentWordString = currentWord.join('');
    let userId = process.env.REACT_APP_TEST_USER_ID;
    const data = { "user_id": userId, "word": currentWordString }

    fetch(process.env.REACT_APP_KOORDLE_API_LOCAL + '/word-check', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(data => data.json())
      .then(game => {
        const entryResult = game.attempts[attemptCount-1].attemptedResult;
        if (entryResult === true) {
          setDidWin(true);
        }

        if (entryResult === false && attemptCount >= 6) {
          setDidWin(false);
        }
      })
      .catch(e => console.log(e));
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

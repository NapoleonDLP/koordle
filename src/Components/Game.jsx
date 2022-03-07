import React, { useState, useEffect } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import Result from './Result';
import './Game.css';

const Game = () => {
  const [currentWord, setCurrentWord] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [didWin, setDidWin] = useState(null);
  const [game, setGame ] = useState(null);

  //TODO: Change loadWord to startGame
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
    .then(game => {
      setGame(game);
    })
    .catch(e => console.log(e))
  }

  useEffect(() => {
    checkWin();
  }, [ attemptCount ])

  const checkWin = async () => {
    if (currentWord.length > 0) {
      let currentWordString = currentWord.join('');
      let userId = process.env.REACT_APP_TEST_USER_ID;
      const data = { "user_id": userId, "word": currentWordString }

      await fetch(process.env.REACT_APP_KOORDLE_API_LOCAL + '/word-check', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(data => data.json())
        .then(game => {
          //TODO: move this logic to handlers directory
          const entries = game.attempts;
          const entryResult = entries[entries.length-1].attemptedResult;
          if (entryResult === true) {
            setDidWin(true);
          }

          if (entryResult === false && entries.length >= 6) {
            setDidWin(false);
          }

          setGame(game);
        })
        .catch(e => console.log(e));
    }
  }

  return (
    <div id='game'>
      <Board
        currentWord={ currentWord }
        attemptCount={ attemptCount }
        check={ check }
        setCheck={ setCheck }
        result={ didWin }
        game={ game }
      ></Board>
      <Keyboard
        currentWord={ currentWord }
        setCurrentWord={ setCurrentWord }
        attemptCount={ attemptCount }
        setAttemptCount={ setAttemptCount }
        setCheck={ setCheck }
        result={ didWin }
        game={ game }
        checkWin={ checkWin }
      ></Keyboard>
      <Result
        result={ didWin }
        game={ game }
        loadGame={ loadWord }
      ></Result>
    </div>
  )
};

export default Game;

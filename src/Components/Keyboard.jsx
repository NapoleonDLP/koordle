import React, { useState, useEffect } from 'react';
import './Keyboard.css';

const Keyboard = ({ setCurrentWord, currentWord, result, game, checkWin }) => {
  const [keyboard, setKeyboard] = useState([['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                                              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                                              ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete']
                                            ]);
  const [lettersUsed, setLettersUsed] = useState([]);
  const [correctLetterWrongPlace, setCorrectLetterWrongPlace] = useState([]);
  const [correctLetterRightPlace, setCorrectLetterRightPlace] = useState([]);

  useEffect(() => {
    document.addEventListener('keydown', handleEvent);
    return () => {
      document.removeEventListener('keydown', handleEvent);
    }
  }, [ currentWord ]);

  const handleEvent = (e) =>{
    const key = e.key ? e.key : e.target.outerText;
    const lowerCaseKey = key.toLowerCase();
    const isKeyLetter = key.match(/[a-z]/i) && key.length === 1;

    if ((lowerCaseKey === 'enter' || lowerCaseKey === 'delete' || lowerCaseKey === 'backspace') && (result === null)) {
      handleKeyboardEntry(lowerCaseKey);
    }

    if (isKeyLetter && currentWord.length < 5 && result === null) {
      addLetterToWord(lowerCaseKey);
    }
  }

  const addLetterToWord = (entry) => {
    setCurrentWord([...currentWord, entry]);
  }

  const handleKeyboardEntry = async (entry) => {
    if (entry === 'delete' || entry === 'backspace') {
      let lastIndex = currentWord.length-1;

      let shorterWord = currentWord.filter((word, index) => {
        if (index !== lastIndex) {
          return word;
        }
        return null;
      });

      setCurrentWord(shorterWord);
    } else if (currentWord.length === 5 && entry === 'enter') {
      await checkWin();
      await setCurrentWord([]);
    }
  }

  useEffect(() => {
    checkLetters();
  }, [ game ]);

  const checkLetters = () => {
    if (game) {
      if (game.attempts.length > 0) {
        for (let i = 0; i < game.attempts.length; i++) {
          let attempt = game.attempts[i];
          for (let j = 0; j < attempt.score.length; j++) {
            let points = attempt.score[j];
            let letter = attempt.attemptedWord[j];

            if (points === '2') {
              setCorrectLetterRightPlace((oldMatch) => [...oldMatch, letter]);
            } else if (points === '1') {
              setCorrectLetterWrongPlace((oldFound) => [...oldFound, letter]);
            } else {
              setLettersUsed((oldUsed) => [...oldUsed, letter]);
            }
          }
        }
      }
    }
  }

  const setKeyColor = (letter) => {
    if (correctLetterRightPlace.includes(letter)) {
      return 'green';
    } else if (correctLetterWrongPlace.includes(letter)) {
      return 'yellow';
    } else if (lettersUsed.includes(letter)) {
      return 'grey';
    }

    return null;
  }

  return (
    <div className='board'>
      {
        keyboard.map((row, keyBoardRowIndex) => (
          <ul className="row keyRow" key={ keyBoardRowIndex }>
            {
              row.map((keyboardButton, keyboardButtonIndex) => {
                let color = setKeyColor(keyboardButton);
                let classes = 'square button ' + color;

                return (
                  <li id={ (keyboardButton === 'Enter' ? 'Enter' : (keyboardButton === 'Delete' ? 'Delete' : '')) } onClick={ handleEvent } className={ classes } key={ keyboardButtonIndex }>
                    <h3>{ keyboardButton }</h3>
                  </li>
                )
              })
            }
          </ul>
        ))
      }
    </div>
  )
};

export default Keyboard;

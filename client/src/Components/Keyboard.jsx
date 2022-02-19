import React, { useState, useEffect } from 'react';
import './Keyboard.css';

const Keyboard = ({ setCurrentWord, currentWord, setAttemptCount, attemptCount, setCheck, answer}) => {
  const [keyboard, setKeyboard] = useState([['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                                              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                                              ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete']
                                            ]);
  const [lettersUsed, setLettersUsed] = useState([]);
  const [correctLetterWrongPlace, setCorrectLetterWrongPlace] = useState([]);
  const [correctLetterRightPlace, setCorrectLetterRightPlace] = useState([]);

  const handleKeyboardEntry = (e) => {
    let entry = null;

    if (e.type === 'click') {
      entry = e.target.innerText;
    }

    if (currentWord.length < 5 && entry !== 'Enter' && entry !== 'Delete' && entry !== 'Backspace') {
      setCurrentWord(currentWord.concat([entry]));
    } else if (entry === 'Delete' || entry === 'Backspace') {
      let lastIndex = currentWord.length-1;

      let shorterWord = currentWord.filter((word, index) => {
        if (index !== lastIndex) {
          return word;
        }
        return null;
      });

      setCurrentWord(shorterWord);
    } else if (currentWord.length === 5 && entry === 'Enter') {
      checkLetters(currentWord);
      setAttemptCount(attemptCount + 1);
      setCurrentWord([]);
      setCheck(true);
    }
  }

  const checkLetters = (word) => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === answer[i]) {
        setCorrectLetterRightPlace((oldMatch) => [...oldMatch, word[i]]);
      } else if (answer.includes(word[i])) {
        setCorrectLetterWrongPlace((oldFound) => [...oldFound, word[i]]);
      } else {
        setLettersUsed((oldUsed) => [...oldUsed, word[i]]);
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
                  <li id={ (keyboardButton === 'Enter' ? 'Enter' : (keyboardButton === 'Delete' ? 'Delete' : '')) } onClick={ handleKeyboardEntry } className={ classes } key={ keyboardButtonIndex }>
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

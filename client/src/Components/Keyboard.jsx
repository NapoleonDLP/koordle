import React, { useState, useEffect } from 'react';
import './Keyboard.css';

const Keyboard = ({ setCurrentWord, currentWord, setAttemptCount, attemptCount, correctLetterRightPlace, setCorrectLetterRightPlace, correctLetterWrongPlace, setCorrectLetterWrongPlace }) => {
  const [ keyboard, setKeyboard ] = useState([['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                                              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                                              ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete']
                                            ]);
  const [ lettersUsed, setLettersUsed ] = useState([]);

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
      checkLetters(currentWord)
      setAttemptCount(attemptCount + 1);
      setCurrentWord([]);

    }
  }

  const checkLetters = (word, answer = 'biter') => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === answer[i]) {
        setCorrectLetterRightPlace([...correctLetterRightPlace].concat([word[i]]));
      } else if (answer.includes(word[i])) {
        setCorrectLetterWrongPlace([...correctLetterWrongPlace].concat([word[i]]));
      } else {
        let currentWordCopy = [...new Set([...currentWord].concat(lettersUsed))];
        setLettersUsed(currentWordCopy);
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
          <ul className="row" key={ keyBoardRowIndex }>
            {
              row.map((keyboardButton, keyboardButtonIndex) => {
                let color = setKeyColor(keyboardButton, keyboardButtonIndex, 'biter');
                let classes = 'square ' + color;

                return (
                  <li onClick={ handleKeyboardEntry } className={ classes } key={ keyboardButtonIndex }>
                    { keyboardButton }
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

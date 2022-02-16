import React, { useState } from 'react';
import './Keyboard.css';

const Keyboard = ({ setCurrentWord, currentWord, setAttemptCount, attemptCount }) => {


  const [ keyboard, setKeyboard ] = useState([['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                                              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                                              ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete']
                                            ]);

  const handleKeyboardClick = (e) => {
    if (currentWord.length < 5 && e.target.innerText !== 'Enter' && e.target.innerText !== 'Delete') {
      setCurrentWord(currentWord.concat([e.target.innerText]));
    } else if (e.target.innerText === 'Delete') {
      let lastIndex = currentWord.length-1;

      let shorterWord = currentWord.filter((word, index) => {
        if (index !== lastIndex) {
          return word;
        }
        return null;
      });

      setCurrentWord(shorterWord);
    } else if (currentWord.length === 5 && e.target.innerText === 'Enter') {
      setAttemptCount(attemptCount + 1);
      setCurrentWord([]);
      //CHECK results of current word
        //Update keyboard to reflect that
    }
  }

  return (
    <div className='board'>
      {
        keyboard.map((row, keyBoardRowIndex) => (
          <ul className="row" key={ keyBoardRowIndex }>
            {
              row.map((keyboardButton, keyboardButtonIndex) => (
                <li onClick={ handleKeyboardClick } className='square' key={ keyboardButtonIndex }>
                  { keyboardButton }
                </li>
              ))
            }
          </ul>
        ))
      }
    </div>
  )
};

export default Keyboard;

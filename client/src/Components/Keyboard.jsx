import React, { useState } from 'react';
import './Keyboard.css';

const Keyboard = ({ setCurrentWord, currentWord }) => {


  const [ keyboard, setKeyboard ] = useState([['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                                              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                                              ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete']
                                            ]);

  const handleKeyboardClick = (e) => {
    if (currentWord.length < 5 && e.target.innerText !== 'Enter' && e.target.innerText !== 'Delete') {
      setCurrentWord(currentWord.concat([e.target.innerText]));
    } else if (e.target.innerText === 'Delete') {
      let lastRemoved = [...currentWord];
      lastRemoved.pop();
      setCurrentWord(lastRemoved);
    } else if (currentWord.length === 5 && e.target.innerText === 'Enter') {
      console.log('keyboard enter')
        //RUN THE CHECK ON THE ROW TO SEE WHAT IS CORRECT and CHANGE CSS to SHOW THAT
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

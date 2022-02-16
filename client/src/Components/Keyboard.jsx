import React, { useState } from 'react';
import './Keyboard.css';

const Keyboard = ({ currentWord }) => {
    const [ keyboard, setKeyboard ] = useState([['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                                              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                                              ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete']
                                            ]);

  return (
    <div className='board'>
      {
        keyboard.map((row) => (
          <ul className="row">
            {
              row.map((keyboardButton) => (
                <li className='square'>
                  <h3>{ keyboardButton }</h3>
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

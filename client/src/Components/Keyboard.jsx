import React from 'react';
import './Keyboard.css';

const Keyboard = ({ keyboard }) => {

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

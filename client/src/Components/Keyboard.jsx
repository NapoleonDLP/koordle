import React from 'react';
import './Keyboard.css';

const Keyboard = ({ keyboard }) => {

  return (
    <div className='keyboard'>
      {
        keyboard.map((row) => (
          <div className="keyboardRow">
            {
              row.map((keyboardButton) => (
                <div className='key'>{ keyboardButton }</div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
};

export default Keyboard;

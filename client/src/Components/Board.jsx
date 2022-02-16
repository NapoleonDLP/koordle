import React, { useState } from 'react';
import './Board.css';

const Board = (props) => {
  // Do you need attempt here?n
  const [currentWord, setCurrentWord] = useState(props.currentWord);
  const [board, setBoard] = useState([[null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, 'A', null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null]
                                    ]);

  return (
    <div className='board'>
      {board.map((row, rowIndex) => (
        <ul id={ 'row-' + rowIndex } className='row' key={rowIndex}>
          {row.map((square, squareIndex) => {
            console.log(square)
            let location = rowIndex + '-' + squareIndex;
            return (
              <li id={'square-' + location } className='square' key={[rowIndex, squareIndex]}>
                <h2>{ square }</h2>
              </li>
              )
          })}
        </ul>
      ))}
    </div>
  )
};

export default Board;

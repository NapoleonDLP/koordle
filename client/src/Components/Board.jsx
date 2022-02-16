import React from 'react';
import './Board.css';

const Board = ({ board }) => {
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

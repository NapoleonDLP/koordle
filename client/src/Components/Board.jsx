import React from 'react';

const Board = ({ board }) => {
  return (
    <div className='board'>
      {board.map((row, rowIndex) => (
        <ul id={ 'row-' + rowIndex } className='row'>
          {row.map((square, squareIndex) => {
            let location = rowIndex + '-' + squareIndex;
            return <li id={'square-' + location } className='square' key={[rowIndex, squareIndex]}></li>
          })}
        </ul>
      ))}
    </div>
  )
};

export default Board;

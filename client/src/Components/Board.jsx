import React, { useState, useEffect } from 'react';
import './Board.css';

const Board = ({ currentWord, attemptCount }) => {
  // Do you need attempt here?n
  // const [currentWord, setCurrentWord] = useState(props.currentWord);
  const [board, setBoard] = useState([[null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null]
                                    ]);

  useEffect(() => {
    let row = attemptCount;
    let currentSquare = currentWord.length-1;

    let updatedBoard = board.map((boardRow, index) => {
      if(index === row) {
        boardRow[currentSquare] = currentWord[currentSquare];

        if (boardRow[currentSquare+1]) {
          boardRow[currentSquare+1] = null;
        }
      }


      return boardRow;
    });
    setBoard(updatedBoard)
  }, [currentWord])

  return (
    <div className='board'>
      {board.map((row, rowIndex) => (
        <ul id={ 'row-' + rowIndex } className='row' key={rowIndex}>
          {row.map((square, squareIndex) => {
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

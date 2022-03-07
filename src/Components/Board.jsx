import React, { useState, useEffect } from 'react';
import './Board.css';

const Board = ({ currentWord, result, game }) => {
  const [board, setBoard] = useState([[null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null]
                                    ]);

  useEffect(() => {
    if (game) {
      updateBoard();
    }
  }, [ currentWord ]);

  const updateBoard = async () => {
    const currentRow = game.attempts.length;

    const updatedRow = board[currentRow].map((currentSquare, squareIndex) => {
      if (currentWord[squareIndex]) {
        currentSquare = currentWord[squareIndex];
      }
      return currentSquare;
    })

    let boardCopy = [...board];
    boardCopy[currentRow] = updatedRow;
    await setBoard(boardCopy);
  }

  const setColor = (rowIndex, squareIndex) => {
    if (game !== null) {
      if (game.attempts[rowIndex]) {
        if (game.attempts[rowIndex].score[squareIndex]) {
          if (game.attempts[rowIndex].score[squareIndex] === '2') {
            return 'green';
          } else if (game.attempts[rowIndex].score[squareIndex] === '1') {
            return 'yellow';
          }
        }
      }
    }
  }

  return (
    <div className='board'>
      {
        board.map((row, rowIndex) => (
          <ul id={ 'row-' + rowIndex } className='row' key={rowIndex}>
            {
              row.map((square, squareIndex) => {
                let location = rowIndex + '-' + squareIndex;
                let color = setColor(rowIndex, squareIndex);
                return (
                  <li id={'square-' + location } className={ 'square ' + color } key={[rowIndex, squareIndex]}>
                    <h2>{ square }</h2>
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

export default Board;

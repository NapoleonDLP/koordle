import React, { useState, useEffect } from 'react';
import './Board.css';

const Board = ({ currentWord, attemptCount, check, setCheck, answer, result }) => {
  const [board, setBoard] = useState([[null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null],
                                    [null, null, null, null, null]
                                    ]);
  const [ LetterRightPlace, setLetterRightPlace] = useState([]);
  const [ LetterWrongPlace, setLetterWrongPlace] = useState([]);

  useEffect(() => {
    let row = attemptCount;
    let currentSquare = currentWord.length-1;

    if (result === null) {
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
    }
  }, [currentWord]);

  useEffect(() => {
    checkRow();
  }, [check])

  const checkRow = () => {
    let row = board[attemptCount-1];
      if (row) {
        for (let i = 0; i < row.length; i++) {
          let newCount = ((attemptCount-1) * 5) + i;
          if (row[i] === answer[i]) {
            setLetterRightPlace((oldList) => [...new Set([...oldList, newCount])]);
          } else if (answer.includes(row[i])) {
            setLetterWrongPlace((oldList) => [...new Set([...oldList, newCount])]);
          }
        }
      }
      setCheck(false)
  };

  const setColor = (boxNumber) => {
    if (LetterRightPlace.includes(boxNumber)) {
      return 'green';
    } else if (LetterWrongPlace.includes(boxNumber)) {
      return 'yellow';
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
                let squareId = (rowIndex * 5) + squareIndex;
                let color = setColor(squareId);
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

import React, { useState } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import './Game.css';

const Game = () => {
  const [board, setBoard] = useState([[null, null, null, null, null],
                                      [null, null, null, null, null],
                                      [null, null, null, null, null],
                                      [null, 'A', null, null, null],
                                      [null, null, null, null, null],
                                      [null, null, null, null, null]
                                      ]);

  const [ keyboard, setKeyboard ] = useState([['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                                              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                                              ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete']
                                            ]);
  return (
    <>
      <Board board={ board }></Board>
      <Keyboard keyboard={ keyboard }></Keyboard>
    </>
  )
};

export default Game;

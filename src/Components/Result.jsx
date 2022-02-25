import React from 'react';
import './Result.css';
import trophy from './trophy.png';

const Result = ({ result }) => {
  return (
    (result === null ? null : (
      <div className='modal'>
        <div className='trophyContainer'>
          <a className='medalContainer'>
            <img src={trophy} className='medal' alt='trophy'/>
          </a>
        </div>
        { result ? <h1 id='win'>Congratulations!</h1> : <h1 id='lose'>YOU LOSE!</h1> }
        <button id='replay' onClick={() => window.location.reload(false)}> Play Again </button>
      </div>
    ))
  )
}

export default Result;

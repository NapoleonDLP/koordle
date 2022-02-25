import React from 'react';
import './Result.css';

const Result = ({ result }) => {
  return (
    (result === null ? null : (
      <div className='modal'>
        { result ? <h1 id='win'>WINNNAH!</h1> : <h1 id='lose'>YOU LOSE!</h1> }
        <button id='reload' onClick={() => window.location.reload(false)}> Play Again </button>
      </div>
    ))
  )
}

export default Result;

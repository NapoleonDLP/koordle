import React, { useEffect, useState } from 'react';
import './Result.css';
import trophy from './trophy.png';
import sadFace from './sad-face.png'

const Result = ({ result, game }) => {
  let [ answer, setAnswer ] = useState(null);

  useEffect(() => {
    if (result !== null) {
      fetchData();
    }
  }, [ result ])

  const fetchData = async () => {
    await fetch(process.env.REACT_APP_KOORDLE_API_LOCAL + '/get-answer/' + game._id)
    .then(data => data.json())
    .then(res => setAnswer(res.answer))
    .catch(e => console.log(e));
  }

  return (
    (result === null ? null : (
      <div className='modal'>
        <div className='trophyContainer'>
          <a className='medalContainer'>
            {
              result ? <img src={ trophy } className='medal' alt='trophy'/> : <img src={ sadFace } className='medal' alt='sad-face'/>
            }
          </a>
        </div>
        { result ? <h1 id='win'>Congratulations!</h1> : <h1 id='lose'>YOU LOSE!</h1> }
        <button id='replay' onClick={() => window.location.reload(false)}> Play Again </button>
        <h1>{ answer } was the word</h1>
      </div>
    ))
  )
}

export default Result;

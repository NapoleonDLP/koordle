import React from 'react';

const Result = ({ result }) => {
  console.log('RESULT: ', result)
  return (
      (result === null ? null : (result ? <h1>WINNNAH!</h1> : <h1>YOU LOOSE!</h1>))
  )
}

export default Result;

import React, { useState } from 'react';

const Login = () => {
  const [ userEmail, setUserEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.name;

    name === 'userEmail' && setUserEmail(value);
    name === 'password' && setPassword(value);
  }

  const handleSubmit = (event) => {
    console.log('THIS IS THE EVENT FROM SUBMIT: ', event)
  }

  return (
    <div>
      <form>
        <label>
          Email:
          <input type='text' value={ userEmail } onChange={ handleChange } name='userEmail'></input>
        </label>
        <label>
          Password:
          <input type='password' value={ password } onChange={ handleChange } name='password'></input>
        </label>
      </form>
    </div>
  )
}

export default Login;

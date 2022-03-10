import React, { useState } from 'react';

const Login = () => {
  const [ userEmail, setUserEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    name === 'userEmail' && setUserEmail(value);
    name === 'password' && setPassword(value);
  }

  const handleSubmit = (event) => {
    //Make API call here
  }

  return (
    <div>
      <form>
        <label>
          Email:
          <input type='text' value={ userEmail } onChange={ handleChange } name='userEmail' />
        </label>
        <label>
          Password:
          <input type='password' value={ password } onChange={ handleChange } name='password' />
        </label>
        <input type='submit' value='Submit' onClick={ handleSubmit }/>
      </form>
    </div>
  )
}

export default Login;

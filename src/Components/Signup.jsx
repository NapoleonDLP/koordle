import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [ userEmail, setUserEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ username, setUsername ] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    name === 'userEmail' && setUserEmail(value);
    name === 'password' && setPassword(value);
    name === 'username' && setUsername(value);
  }

  const handleSubmit = (event) => {
    const url = process.env.REACT_APP_KOORDLE_API_LOCAL + '/register';
    const data = { username: username, password: password, email: userEmail };
    event.preventDefault();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then(res => console.log('Response from signup: ', res))
    .catch(e => console.log('Error from signup: ', e))
  }

  return (
    <div id='signup'>
      <div className='signupForm'>
        <h1>Sign Up</h1>
        <div className='formContainer'>
          <form>
            <label>Email</label>
            <input type='text' value={ userEmail } onChange={ handleChange } name='userEmail' />
            <label>Password</label>
            <input type='password' value={ password } onChange={ handleChange } name='password' />
            <label>Username</label>
            <input type='username' value={ username } onChange={ handleChange } name='username' />
            <input type='submit' value='Submit' onClick={ handleSubmit }/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;

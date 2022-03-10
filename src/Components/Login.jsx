import React, { useState } from 'react';

const Login = () => {
  const [ userEmail, setUserEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  const handleChange = (event) => {

  }

  const handleSubmit = (event) => {

  }

  return (
    <div>
      <form>
        <label>
          Email:
          <input type='text' value={ userEmail } onChange={ handleChange }></input>
        </label>
        <label>
          Password:
          <input type='password' value={ password } onChange={ handleChange }></input>
        </label>
      </form>
    </div>
  )
}

export default Login;

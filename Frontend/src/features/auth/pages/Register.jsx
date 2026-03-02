import React from 'react'
import { useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <main>
      <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id='email' name='email' />
        </div>
        <div className="input-group">
          <label htmlFor="text">Username</label>
          <input type="username" placeholder='Username' id='username' name='username' />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' id='password' name='password' />
        </div>
        <button className='button primary-button'>Sign up</button>
      </form>
    </div>
    </main>
  )
}

export default Register
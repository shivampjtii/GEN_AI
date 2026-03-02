import React from 'react'
import "../auth.form.scss"

const Login = () => {

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <main>
      <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id='email' name='email' />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' id='password' name='password' />
        </div>
        <button className='button primary-button'>Login</button>
      </form>
    </div>
    </main>
  )
}

export default Login

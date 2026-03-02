import React from 'react'

const Login = () => {
  return (
    <div className="form-container">
      <h1>Login</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id='email' name='email' />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' id='password' name='password' />
        </div>
      </form>
    </div>
  )
}

export default Login

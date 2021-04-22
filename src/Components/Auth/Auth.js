import React, { useState } from 'react';
import axios from 'axios';
import logo from './../../assets/logo.png';
import './Auth.css';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/userReducer';


function Auth(props) {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  function login() {
    axios.post('/api/auth/login', {
      username, password 
    })
      .then(res => {
        props.updateUser(res.data)
        props.history.push('/buckets')
      })
      .catch(err => {
        console.log(err)
        setErrorMsg({ errorMsg: 'Incorrect username or password!' })
      })
  }

  function register() {
    axios.post('/api/auth/register', { username, password })
      .then(res => {
        props.updateUser(res.data)
        console.log(res.data)
        props.history.push('/buckets')
      })
      .catch(err => {
        console.log(err)
        setErrorMsg({ errorMsg: 'Username taken!' })
      })
  }

  function closeErrorMessage() {
    setErrorMsg(false)
    setUsername('')
    setPassword('')
  }

    return (
      <div className='auth'>
        <div className='auth-container'>
          <h1 className='auth-title'>
            <img className='logo' src={logo} alt='logo' /></h1>
          {errorMsg && <h3 className='auth-error-msg'>{errorMsg} <span onClick={closeErrorMessage}>X</span></h3>}
          <div className='auth-input-box'>
            <p>Username:</p>
            <input value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className='auth-input-box'>
            <p>Password:</p>
            <input value={password} type='password' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='auth-button-container'>
            <button className='dark-button' onClick={login}> Login </button>
            <button className='dark-button' onClick={register}> Register </button>
          </div>
        </div>
      </div>
    );
  
}

export default connect(null, { updateUser })(Auth);
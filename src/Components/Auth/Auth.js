import React, { Component } from 'react';
import axios from 'axios';
import logo from './../../assets/logo.png';
import './Auth.css';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/userReducer';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMsg: ''
    }
    this.login = this.login.bind(this);
    // this.register = this.register.bind(this);
  }
  r
  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  login() {
    axios.post('/api/auth/login', this.state)
      .then(res => {
        this.props.updateUser(res.data)
        this.props.history.push('/buckets')
      })
      .catch(err => {
        console.log(err)
        this.setState({ errorMsg: 'Incorrect username or password!' })
      })
  }

  register = () => {
    console.log(this.state)
    axios.post('/api/auth/register', { ...this.state })
      .then(res => {
        this.props.updateUser(res.data)
        console.log(res.data)
        this.props.history.push('/buckets')
      })
      .catch(err => {
        console.log(err)
        this.setState({ errorMsg: 'Username taken!' })
      })
  }

  closeErrorMessage = () => {
    this.setState({
      errorMsg: false,
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div className='auth'>
        <div className='auth-container'>
          <h1 className='auth-title'>
            <img className='logo' src={logo} alt='logo' /></h1>
          {this.state.errorMsg && <h3 className='auth-error-msg'>{this.state.errorMsg} <span onClick={this.closeErrorMessage}>X</span></h3>}
          <div className='auth-input-box'>
            <p>Username:</p>
            <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />
          </div>
          <div className='auth-input-box'>
            <p>Password:</p>
            <input value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)} />
          </div>
          <div className='auth-button-container'>
            <button className='dark-button' onClick={this.login}> Login </button>
            <button className='dark-button' onClick={this.register}> Register </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateUser })(Auth);
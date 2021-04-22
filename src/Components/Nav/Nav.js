import React, { useEffect } from 'react';
import axios from 'axios';
import './Nav.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, logout } from '../../redux/reducer';
// import { getUser } from '../../../server/controllers/userController';


function Nav(props) {
  
  useEffect(() => {
    getUser()
  })
 

  function getUser() {
    axios.get('/api/auth/me')
      .then(res => props.updateUser(res.data))
  }

  function logout() {
    axios.post('/api/auth/logout')
      .then(_ => {
        props.history.push('/')
        // this.props.logout()
      })
      .catch(err => console.log(err))
  }

    console.log(props)
    return props.location.pathname !== '/' &&
      <div className='nav'>
          <h2 onClick={logout}>Logout</h2>
      </div>
}


const mapStateToProps = (stateRedux) => stateRedux;

export default withRouter(connect(mapStateToProps, { updateUser, logout })(Nav));
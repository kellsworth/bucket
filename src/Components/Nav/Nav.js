import React, { Component } from 'react';
import axios from 'axios';
import './Nav.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, logout } from '../../redux/reducer';


class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
      .then(res => this.props.updateUser(res.data))
  }

  logout() {
    axios.post('/api/auth/logout')
      .then(_ => {
        this.props.history.push('/')
        // this.props.logout()
      })
      .catch(err => console.log(err))
  }


  render() {
    console.log(this.props)
    return this.props.location.pathname !== '/' &&
      <div className='nav'>
        <Link to="/" onClick={this.logout}>
          <h2>Logout</h2>
        </Link>
      </div>
  }
}

const mapStateToProps = (stateRedux) => stateRedux;

export default withRouter(connect(mapStateToProps, { updateUser, logout })(Nav));
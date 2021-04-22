import React from 'react';
import './App.css';
import Routes from "./routes";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router'


function App(props) {
  const logout = () => {
    axios.post('/api/auth/logout')
      .then(_ => {
        props.history.push('/')
        // this.props.logout()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <title>Buckets and Moments</title>
      <header className="App-header">
        <link rel="stylesheet" href="/App.css"></link>
        <nav className="header-nav">
          {/* <img src="/assets/small_logo.png"/> */}
          <Link to="/buckets">
            <h3>Buckets</h3>
          </Link>
          <Link to="/moments">
            <h3>Moments</h3>
          </Link>
          <Link to="/contact">
            <h3>Contact Us</h3>
          </Link>
          <Link to="/" onClick={logout}>
            <h3>Logout</h3>
          </Link>
        </nav>

      </header>
      <main>
        {Routes}

      </main>
      <footer class="footer"><p>Buckets and Moments 2021</p></footer>
    </div>
  );
}

export default withRouter(App);

import React, { Component } from 'react';
import './App.css';
// import './components/create_user/create.css';
import './components/Navbar/Navbar.css';
// import Login from './components/login/login.js';
import CamiBookNav from './components/Navbar/Navbar.js';
import Feed from './components/feed/feed.js';



class App extends Component {
  render() {
    return (
      <div>
        <h1 className="banner">Welcome to our App</h1>
          <Login />
      </div>
    );
  }
}

export default App;

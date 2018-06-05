import React, { Component } from 'react';
import './App.css';
import './components/create.css';
import Login from './components/login'



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



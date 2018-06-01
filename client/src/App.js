import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Show from './components/Show';
import Edit from './components/Edit';
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

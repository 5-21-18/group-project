import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Show from './components/Show';
import Edit from './components/Edit';


class App extends Component {
  render() {
    return (
      <div className="App-div">
        <h1 className="App-intro">
          Welcome to our App
        </h1>
      </div>
    );
  }
}

export default App;

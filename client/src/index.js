import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Edit from './components/Edit';
import Create from './components/create/Create.js';
import Login from './components/login/login.js';

//add feed route
ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/login' component={Login} />
      </div>
  </Router>,
  document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Login from './components/login';

ReactDOM.render(
      <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show' component={Show} />
        <Route path='/Login' component={Login} />
      </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

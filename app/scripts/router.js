import {Router, Route, hashHistory} from 'react-router';
import React from 'react';
import config from './config';

import $ from 'jquery';

import session from './store';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import Votes from './components/Votes';

const router = (
<Router history={hashHistory}>
  <Route path='/' component={Login}/>
  <Route path='/signup' component={Signup}/>
  <Route path='/search' component={Search}/>
  <Route path='/votes' component={Votes}/>
</Router>
);




export default router;

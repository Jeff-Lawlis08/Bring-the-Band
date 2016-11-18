import {Router, Route, hashHistory} from 'react-router';
import React from 'react';
import config from './config';

import $ from 'jquery';

import session from './store';
import Login from './components/Login';
import Signup from './components/Signup';
// import Search from './components/Search';
// import Votes from './components/Votes';
$(document).ajaxSend((e, xhr, opts) => {
  console.log('intercepted ajax request');

xhr.setRequestHeader('application-type', 'REST');
xhr.setRequestHeader('application-id', config.appId);
xhr.setRequestHeader('secret-key', config.secret);
// xhr.setRequestHeader('user-token', session.get('user-token'));
});
const router = (
<Router history={hashHistory}>
  <Route path='/' component={Login}/>
  <Route path='/signup' component={Signup}/>
</Router>
);

// <Route path='/search' component={Search}/>
// <Route path='/votes' component={Votes}/>

export default router;

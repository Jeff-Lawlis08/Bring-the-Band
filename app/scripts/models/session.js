import Backbone from 'backbone';
import {hashHistory} from 'react-router';
import config from '../config';
import $ from 'jquery';

export default Backbone.Model.extend({
  initialize(){
    if (window.localStorage.getItem('user-token')){
      this.set({'user-token': window.localStorage.getItem('user-token')});
    }
  },
  idAttribute: 'objectId',
  defaults: {
    username: '',
    email: '',
    'user-token': ''
  },
signup(username, email, password){
  this.save({username, email, password},
    {
      url: 'https://api.backendless.com/v1/users/register',
    success: () => {
      this.login(email, password);
    }
  });
},
login(login, password){
  this.save(
    {login, password},
    {
      url: 'https://api.backendless.com/v1/users/login',
      success: () => {
        this.set({login, password});
        window.localStorage.setItem('user-token', this.get('user-token'));
        hashHistory.push('/search');
      }
    }
  );
},
logout() {
  $.ajax({
    url: 'https://api.backendless.com/v1/users/logout',
    success: () => {
      this.clear();
      window.localStorage.clear();
      hashHistory.push('/login');
    }
  });
}

});

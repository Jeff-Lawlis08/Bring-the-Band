import Backbone from 'backbone';
import {hashHistory} from 'react-router';
import config from '../config';

export default Backbone.Model.extend({
  defaults: {
    username: '',
    email: '',
    'user-token': ''
  },
signup(username, email, password){
  this.save({username, email, password},
    {headers: {
      'application-id': config.appId,
      'secret-key': config.secret,
      'Content-Type':'application/json',
      'application-type': REST
    },
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
      headers: {
        'application-id': config.appId,
        'secret-key': config.secret,
        'Content-Type':'application/json',
        'application-type': REST
      },
      url: 'https://api.backendless.com/v1/users/login',
      success: () => {
        this.set({login, password});
        hashHistory.push('/search');
      }
    }
  );
}

});

import Backbone from 'backbone';
import {hashHistory} from 'react-router';

export default Backbone.Model.extend({
  defaults: {
    username: '',
    email: '',
    'user-token': ''
  },
signup(username, email, password){
  this.save({username, email, password},
    {url: 'https://api.backendless.com/v1/users/register',
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
        hashHistory.push('/search');
      }
    }
  );
}

});

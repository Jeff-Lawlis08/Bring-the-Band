import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    console.log('hello');
      return (
        <div>
          <form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="submit" value="Login"/>
          </form>
          Not a Member?  <Link to="/signup">Signup Here!</Link>
        </div>
      );
  }
});

import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default React.createClass({
  getInitialState(){
    return {
      session: store.session.toJSON()
    }
  },
  componentWillMount(){
    store.session.on('change', ( )=> {
      this.setState({session: store.session.toJSON()})
    });
  },
  render(){
      return (
        <div className="login">
          <form>
            <input className="email-login" ref="email" type="email" placeholder="Email"/>
            <input className="password-login" ref="password" type="password" placeholder="Password"/>
            <input onClick={this.handleSubmit} type="submit" value="Login"/>
          </form>
          Not a Member?  <Link to="/signup">Signup Here!</Link>
        </div>
      );
  },
  handleSubmit(e){
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    store.session.login(email, password);
  }
});

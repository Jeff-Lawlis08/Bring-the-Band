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
    // console.log(this.state);
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input className="username" type="text" placeholder="Username"/>
          <input className="email" type="email" placeholder="Email"/>
          <input className="password" type="password" placeholder="Password"/>
          <input type="submit" value="submit"/>
        </form>
        Already a Member? <Link to="/">Login Here!</Link>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    store.session.signup(username, email, password)
  }
});

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
      <div className="signup">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input className="username" ref="username" type="text" placeholder="Username"/>
          <input className="email" ref="email" type="email" placeholder="Email"/>
          <input className="password" ref="password" type="password" placeholder="Password"/>
          <input type="submit" value="submit"/>
        </form>
        Already a Member? <Link to="/">Login Here!</Link>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    store.session.signup(username, email, password)
  }
});

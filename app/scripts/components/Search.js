import React from 'react';
import Nav from './nav';

export default React.createClass({
  render(){
    return (
      <div>
      <Nav/>
        <input type="text" placeholder="search"/>
        <input type="search" value="search"/>
      </div>
    );
  }
});

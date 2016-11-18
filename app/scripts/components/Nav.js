import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return (
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/votes">See Votes</Link>
      </nav>
    );
  }
});

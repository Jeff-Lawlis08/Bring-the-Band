import React from 'react';

export default React.createClass({
  render(){
    console.log(this.props);
    return (
      <li>
        {this.props.band.name}
      </li>
    );
  }
});

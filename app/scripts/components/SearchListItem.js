import React from 'react';

export default React.createClass({
  render () {
    console.log(this.props.band.name);
    return (
      <li>
      <span>{this.props.band.name}</span>

      </li>
    );
  }
});

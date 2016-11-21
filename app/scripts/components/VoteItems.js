import React from 'react';

export default React.createClass({
  render(){
    return (
      <li>
        <img src={this.props.band.photo}/>
        <div>
          <span>{this.props.band.name}</span>
          <span>Votes: {this.props.band.votes}</span>
        </div>
      </li>
    );
  }
});

import React from 'react';
import store from '../store';

export default React.createClass({
  render () {
    // console.log(this.props.band.images[0].url);
    if(this.props.band.images[0]!==undefined){
    return (
      <li className="search-item">
        <img src={this.props.band.images[0].url}/>
        <span>{this.props.band.name}</span>
        <input onClick={this.handleClick} type="button" value="vote"/>
      </li>
    );
  } else {
    return (
      <li className="search-item">
        <img src='http://www.bandofhorses.com/wp-content/uploads/2013/12/bohbanner-1440x900.jpg'/>
        <span>{this.props.band.name}</span>
        <input onClick={this.handleClick} type="button" value="vote"/>
      </li>
    )
  }
  },
  handleClick(){
    store.bands.addVotes({name: this.props.band.name, photo: this.props.band.images[0].url, votes: 1});
  }
});

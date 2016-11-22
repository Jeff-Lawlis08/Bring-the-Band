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
        <input onClick={this.handleClick} type="button" value="VOTE"/>
      </li>
    );
  } else {
    return (
      <li className="search-item">
        <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIWFzcaKyw2EGkjt2_rjzIMV1WX7An2zvhWb075Z8mMaeWOz8R-Q'/>
        <span>{this.props.band.name}</span>
        <input onClick={this.handleClick} type="button" value="VOTE"/>
      </li>
    )
  }
  },
  handleClick(){
    store.votedBands.addVotes({name: this.props.band.name, photo: this.props.band.images[0].url});
  }
});

import React from 'react';
import Nav from './nav';
import store from '../store';
import SearchList from './SearchList';
import {hashHistory} from 'react-router';

export default React.createClass({
  getInitialState(){
    return {
      bands: [{artists:{items: []}}]
    }
  },
  componentDidMount(){
    store.bands.on('update change', this.updateState);
  },
  componentWillUnmount(){
    store.bands.on('update change', this.updateState);
  },
  render(){
    if(window.localStorage.getItem('user-token')){
    // console.log(this.state.bands[0].artists.items);
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input id="search" ref="search" type="text" placeholder="Search Artists..."/>
          <i onClick={this.handleSubmit} className="fa fa-search fa-2x" aria-hidden="true"></i>
        </form>
        <SearchList bands={this.state.bands[0].artists.items}/>
      </div>
    );
  } else {
    hashHistory.push('/login');
  }
  },
  handleSubmit(e){
    e.preventDefault();
    // console.log(this.state);
    let artist = this.refs.search.value;
    store.bands.getBands(artist);
  },
  updateState(){
    this.setState({bands: store.bands.toJSON()})
  }
});

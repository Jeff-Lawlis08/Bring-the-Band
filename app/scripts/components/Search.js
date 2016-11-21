import React from 'react';
import Nav from './nav';
import store from '../store';
import SearchList from './SearchList';

export default React.createClass({
  getInitialState(){
    return {
      bands: [{artists:{items: []}}]
    }
  },
  componentDidMount(){
    store.bands.on('update change', ()=>{
      this.setState({bands: store.bands.toJSON()})
    });
  },
  render(){
    // console.log(this.state.bands[0].artists.items);
    return (
      <div>
        <Nav/>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input id="search" type="text" placeholder="Search Artists..."/>
          <input type="submit" value="SEARCH"/>
        </form>
        <SearchList bands={this.state.bands[0].artists.items}/>
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    // console.log(this.state);
    let artist = document.getElementById('search').value;
    store.bands.getBands(artist);
  }
});

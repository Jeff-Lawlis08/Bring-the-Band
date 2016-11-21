import React from 'react';
import SearchListItem from './SearchListItem';

export default React.createClass({
  render(){
    // console.log(this.props.bands);
    let allBands = this.props.bands.map((band, i, arr)=>{
      // console.log(band.name);
      return (
        <SearchListItem key={i} band={band}/>
      );
    });
    return (
      <div>
        <ul className="band-list">
        {allBands}
        </ul>
      </div>
    );
  }
});

import React from 'react';
import store from '../store';
import config from '../config';
import VoteItems from './VoteItems';

export default React.createClass({
  getInitialState(){
    return {
      bands: store.bands.toJSON()
    }
  },

    componentDidMount(){
      store.bands.fetch({headers: {
        'application-id': config.appId,
        'secret-key': config.secret,
        'Content-Type':'application/json',
        'application-type': 'REST'
      },
    });
    store.bands.on('update change', ()=>{
      this.setState({bands: store.bands.toJSON()})
      // console.log(this.state);
    });
    },

  render(){
    let bands = this.state.bands.map((band, i, arr)=>{
      return band.data;
    })
    let allBands = bands.map((band, i, arr)=>{
      return band.map((band, i, arr)=>{
        return (
          <li>
          <img src={band.photo}/>
          <div>
            <span>{band.name}</span>
            <span>Votes: {band.votes}</span>
          </div>
          </li>
        );
      });
    });
    return (
      <ul className="voted-bands">
        {allBands}
      </ul>
    );
  }
});

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
    console.log(this.state);
    let allBands = this.state.bands.map((band, i, arr)=>{
      <VoteItems band={band}/>
    });
    // console.log(this.state);

    return (
      <ul className="voted-bands">
        {allBands}
      </ul>
    );
  }
});

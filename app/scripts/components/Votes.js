import React from 'react';
import store from '../store';
import config from '../config';
import VoteItems from './VoteItems';
import Nav from './nav';

export default React.createClass({
  getInitialState(){
    return {
      votedBands: store.votedBands.toJSON()
    }
  },
    componentWillMount(){
      store.votedBands.fetch();
    },
    componentDidMount(){
    store.votedBands.fetch();
    store.votedBands.on('update change', this.updateState);
    },
    componentWillUnmount(){
      store.votedBands.off('update change', this.updateState);
    },
  render(){


    let allBands = this.state.votedBands.map((band, i, arr)=>{
        return (
        <VoteItems key={i} band={band}/>
        );
    });
    return (
      <div>
        <ul className="voted-bands">
          {allBands}
        </ul>
      </div>
    );
  },
  updateState(){
    this.setState({votedBands: store.votedBands.toJSON()})
  }
});

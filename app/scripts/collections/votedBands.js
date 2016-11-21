import Backbone from 'backbone';
import VotedBand from '../models/votedBand';
import {hashHistory} from 'react-router';
import _ from 'underscore';


export default Backbone.Collection.extend({
  model: VotedBand,
  url: 'https://api.backendless.com/v1/data/bands',
  parse(data){
    return data.data;
  },
  addVotes({name, photo}){
      this.fetch({success:()=>{
          let band = this.findWhere({name: name});
      if(band){
          band.save({votes: band.get('votes')+1},
          {
            success: ()=>{
              hashHistory.push('votes');
            }
          });
      } else {
      this.create(
        {name, photo, votes},
        {
        success: ()=>{
          hashHistory.push('/votes');
        }
      });
      }
    }
    });


  },
});

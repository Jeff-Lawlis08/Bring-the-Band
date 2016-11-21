import Backbone from 'backbone';
import VotedBand from '../models/votedBand';

export default Backbone.Collection.extend({
  model: VotedBand,
  url: 'https://api.backendless.com/v1/data/bands',
  parse(data){
    return data.data;
  }
});

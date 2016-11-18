import Backbone from 'backbone';
import Band from '../models/band';
import config from '../config';
import $ from 'jquery';

export default Backbone.Collection.extend({
  model: Band,

  getBands(artist){
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: artist,
      type: 'artist'
    },
    success: (response)=>{
      // console.log(response);
      this.add(response);
    },
  });
},
addVotes({name, photo, votes}){
  this.create(
    {name, photo, votes},
    {headers: {
      'application-id': config.appId,
      'secret-key': config.secret,
      'Content-Type':'application/json',
      'application-type': 'REST'
    },
    url: 'https://api.backendless.com/v1/data/bands'
  });
}

});

import Backbone from 'backbone';
import Band from '../models/band';
import config from '../config';
import $ from 'jquery';
import {hashHistory} from 'react-router';

export default Backbone.Collection.extend({
  model: Band,
  url: 'https://api.backendless.com/v1/data/bands',

  getBands(artist){
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: artist,
      type: 'artist'
    },
    success: (response)=>{
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
    url: 'https://api.backendless.com/v1/data/bands',
    success: ()=>{
      hashHistory.push('/votes');
    }
  });
},
// getVoted(){
//   $.ajax(
//     {
//     url: 'https://api.backendless.com/v1/data/bands',
//     success: ()=>{
//       console.log(response);
//       this.add(response);
//     }
//     }
//   );
// }

});

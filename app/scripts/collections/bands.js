import Backbone from 'backbone';
import Band from '../models/band';
import config from '../config';
import $ from 'jquery';
import {hashHistory} from 'react-router';

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
      this.reset();
      this.add(response);
    },
  });
},
addVotes({name, photo, votes}){
  this.create(
    {name, photo, votes},
    {
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

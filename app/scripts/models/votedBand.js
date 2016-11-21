import Backbone from 'backbone';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/bands',
  idAttribute: 'objectId',
  name: '',
  photo: '',
  votes: ''
});

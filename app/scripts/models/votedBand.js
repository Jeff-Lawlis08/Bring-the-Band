import Backbone from 'backbone';

export default Backbone.Model.extend({
  rootUrl: 'https://api.backendless.com/v1/data/bands',
  idAttribute: 'id',
  name: '',
  photo: '',
  votes: '',
});

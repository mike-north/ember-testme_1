import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function()  {
  this.resource('lists', function ()  {
    this.route('index', {path: '/'});
  });
  this.resource('list', {path: 'list/:id'}, function () {
    this.route('show', {path: '/'});
  });
});

export default Router;

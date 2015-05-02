import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    this._super(...arguments);
    this.transitionTo('lists.index');
  }
});

import DS from 'ember-data';

export default DS.Model.extend({
  list: DS.belongsTo('list'),
  name: DS.attr('string', {async: true})
});

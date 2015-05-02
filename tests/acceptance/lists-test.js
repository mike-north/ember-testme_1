import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'testme/tests/helpers/start-app';
import Pretender from 'pretender';

var application;
var server;


module('Acceptance: Lists', {
  beforeEach() {
    application = startApp();
    server = new Pretender();
  },

  afterEach() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('Drilling into a shopping list from the index page', assert => {

  server.get('/api/lists', function () {
    return [200, {}, '{"lists":[{"id":1,"name":"Fruit","items":[1,2,3]},{"id":2,"name":"Vegetables","items":[4,5,6]}]}'];
  });

  server.get('/api/items', function () {
    return [200, {}, '{"items":[{"id":1,"name":"Apple","list":1},{"id":2,"name":"Pear","list":1},{"id":3,"name":"Grape","list":1}]}'];
  });

  visit('/lists');

  andThen(() => {
    assert.equal(currentPath(), 'lists.index', 'Should be at the index page');
    assert.equal(find('.list-of-lists .list-item').length, 2, 'Two shopping lists are in the index');
  });

  click('.list-of-lists .list-item:nth-child(1)');

  andThen(() => {
    assert.equal(currentURL(), '/list/1', 'Showing the first shopping list');
  });
});

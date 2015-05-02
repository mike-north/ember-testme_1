var ITEMS = [
  {id: 1, name: 'Apple', list: 1},
  {id: 2, name: 'Pear', list: 1},
  {id: 3, name: 'Grape', list: 1},
  {id: 4, name: 'Squash', list: 2},
  {id: 5, name: 'Celery', list: 2},
  {id: 6, name: 'Spinach', list: 2},
];

module.exports = function(app) {
  var express = require('express');
  var itemsRouter = express.Router();

  itemsRouter.get('/', function(req, res) {
    res.send({
      'items': req.query.ids ? ITEMS.filter(function (i) {return req.query.ids.indexOf('' + i.id) >=0; }) : ITEMS
    });
  });

  app.use('/api/items', itemsRouter);
};

var LISTS = [
  {id: 1, name: 'Fruit', items: [1, 2, 3]},
  {id: 2, name: 'Vegetables', items: [4, 5, 6]}
];

module.exports = function(app) {
  var express = require('express');
  var listsRouter = express.Router();

  listsRouter.get('/', function(req, res) {
    res.send({
      'lists': LISTS
    });
  });


  listsRouter.get('/:id', function(req, res) {


    res.send({
      'list': LISTS.filter(function(x) {return ('' + x.id) === req.params.id;})[0]
    });
  });


  app.use('/api/lists', listsRouter);
};

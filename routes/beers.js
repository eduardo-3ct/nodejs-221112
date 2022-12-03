var express = require('express');
var router = express.Router();

const Beer = require('../models/beers');

router
  .get('/', function (req, res, next) {
    Beer.find(function (err, beers) {
      if (err) return next(err);
      res.json(beers);
    });
  })
  .get('/random', function (req, res, next) {
    Beer.findOne({ 'id': getRandomArbitrary(1, 25) }, function (err, beer) {
      if (err) return next(err);
      res.json(beer);
    });
  })
  .get('/:id', function (req, res, next) {
    Beer.findOne({ 'id': req.params.id }, function (err, beer) {
      if (err) return next(err);
      res.json(beer);
    });
  })
  .post('/', (req, res, next) => {
    const beer = new Beer({
      id: req.body.id,
      name: req.body.name,
      price: req.body.price
    });
    beer.save((err) => {
      if (err) return next(err);
      res.status(201).end()
    });
  })
  .put('/:id', function (req, res, next) {
    Beer.findOne({ 'id': req.params.id }, function (err, beer) {
      if (err) return next(err);

      Object.assign(beer, req.body);

      beer.save((err) => {
        if (err) return next(err);
        res.status(204).end()
      });
    });
  })
  .delete('/:id', function (req, res, next) {
    Beer.deleteOne({ 'id': req.params.id }, function (err, beer) {
      if (err) return next(err);
      res.status(204).end()
    });
  });

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = router;

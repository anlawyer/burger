
const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function (req, res) {
  burger.all(function (data) {
    var hbsObj = {
      burger: data
    };
    console.log(hbsObj);
    res.render('index', hbsObj);
  });
});

router.post('/api/burger', function (req, res) {
  burger.create('burger_name', req.body.name, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burger/:id', function (req, res) {
  // var condition = 'id = ' + req.params.id;
  console.log(req.body);
  console.log(req.params.id);
  burger.update(
    'devoured', req.body.devoured,
    req.params.id, function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;

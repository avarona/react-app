const express = require('express');
const router = express.Router();

const Example = require('../../db/models/example');

router.get('/', function(req, res, next) {
  console.log('hello')
  Example.findAll()
  .then(all => {
    console.log(all)
    res.send(all);
  })
});

module.exports = router;

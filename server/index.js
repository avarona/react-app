'use strict';

const express = require('express');
const router = new express.Router();

// routes
router.use('/ex', require('./routes/examples'));
router.use('/auth', require('./routes/auth'));

router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;

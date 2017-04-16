'use strict'

const Sequelize = require('sequelize');
const db = require('../_db.js');

const Example = db.define('examples', {
    column: {
      type: Sequelize.STRING
    }
});

module.exports = Example;

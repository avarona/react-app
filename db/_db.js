'use strict';

const Sequelize = require('sequelize');

// Change dbName
const dbName = 'example';
const url = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`;

const db = new Sequelize(url, {
	logging: false
});

module.exports = db;

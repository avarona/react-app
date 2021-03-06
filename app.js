'use strict';

const express = require('express');
const app = express();
const { resolve } = require('path');
const db = require('./db');
const server = require('./server');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const session = require('express-session');
const passport = require('passport');

// logging middleware
app.use(morgan('dev'));

// authentication middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret here',
  resave: false,
  saveUninitialized: false
}));

app.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

app.use(passport.initialize());
app.use(passport.session());

// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// prepend '/api' to URIs
app.use('/api', server);

// serve static files from public
app.use(express.static(resolve(__dirname, 'public')))

// request any page and receive index.html
app.get('/*', (req, res) => res.sendFile(resolve(__dirname, 'public/index.html')));

// server listening!
app.listen(process.env.PORT || 3000, () => {
  console.log(chalk.cyan('Server is listening'), chalk.yellow('http://localhost:3000'));
  db.sync({force: false})
  .then(() => {
    console.log(chalk.cyan('Database is running'));
  })
  .catch(err => console.error(err));
});

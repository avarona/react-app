'use strict'

const Sequelize = require('sequelize');
const db = require('../_db.js');
const _ = require('lodash');
const crypto = require('crypto');

const User = db.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  }
}, {
  getterMethods: {
    fullName: function() {
      const first = this.firstName[0].toUpperCase() + this.firstName.slice(1, this.firstName.length);
      const last = this.lastName[0].toUpperCase() + this.lastName.slice(1, this.lastName.length);
      return first + ' ' + last;
    }
  },
  instanceMethods: {
    sanitize: function () {
      return _.omit(this.toJSON(), ['password', 'salt']);
    },
    correctPassword: function (candidatePassword) {
      return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
    }
  },
  classMethods: {
    generateSalt: function () {
      return crypto.randomBytes(16).toString('base64');
    },
    encryptPassword: function (plainText, salt) {
      const hash = crypto.createHash('sha1');
      hash.update(plainText);
      hash.update(salt);
      return hash.digest('hex');
    }
  },
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
});

function setSaltAndPassword (user) {
  if (user.changed('password')) {
    user.salt = user.Model.generateSalt();
    user.password = user.Model.encryptPassword(user.password, user.salt);
  }
}

module.exports = User;

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
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
});

// Methods Sequelize v4
User.prototype.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64');
}

User.prototype.encryptPassword = function (plainText, salt) {
  const hash = crypto.createHash('sha1');
  hash.update(plainText);
  hash.update(salt);
  return hash.digest('hex');
}

User.prototype.santize = function () {
  return _.omit(this.toJSON(), ['password', 'salt']);
}

User.prototype.correctPassword = function (candidatePassword) {
  return this.encryptPassword(candidatePassword, this.salt) === this.password;
}

function setSaltAndPassword (user) {
  if (user.changed('password')) {
    user.salt = user.generateSalt();
    user.password = user.encryptPassword(user.password, user.salt);
  }
}

module.exports = User;

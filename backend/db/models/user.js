'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');
const { User, Album } = require('../../db/models');




module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    });
  User.associate = function (models) {
    User.hasMany(models.Comment, { foreignKey: 'userId', onDelete: 'CASCADE' });
    User.hasOne(models.Album, { foreignKey: 'userId', onDelete: 'CASCADE' });
  };

  //return an object with the User instance info that is safe to save a JWT
  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  //returns true if there is a match with the User instance's hashedPassword,
  //otherwise will return false
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  // method that will accept an id and return a User with that id using the currentUser scope
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  //uses login user scope to find a user, validates, returns user in current scope
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  //accept an obj with info, hashes pw, creates user and returns created user in currentUser scope
  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};




// //return an object with the User instance info that is safe to save a JWT
// User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
//   const { id, username, email } = this; // context will be the User instance
//   return { id, username, email };
// };

// //returns true if there is a match with the User instance's hashedPassword,
// //otherwise will return false
// User.prototype.validatePassword = function (password) {
//   return bcrypt.compareSync(password, this.hashedPassword.toString());
// };

// // method that will accept an id and return a User with that id using the currentUser scope
// User.getCurrentUserById = async function (id) {
//   return await User.scope('currentUser').findByPk(id);
// };

// //uses login user scope to find a user, validates, returns user in current scope
// User.login = async function ({ credential, password }) {
//   const { Op } = require('sequelize');
//   const user = await User.scope('loginUser').findOne({
//     where: {
//       [Op.or]: {
//         username: credential,
//         email: credential,
//       },
//     },
//   });
//   if (user && user.validatePassword(password)) {
//     return await User.scope('currentUser').findByPk(user.id);
//   }
// };

// //accept an obj with info, hashes pw, creates user and returns created user in currentUser scope
// User.signup = async function ({ username, email, password }) {
//   const hashedPassword = bcrypt.hashSync(password);
//   const user = await User.create({
//     username,
//     email,
//     hashedPassword,
//   });
//   return await User.scope('currentUser').findByPk(user.id);
// };
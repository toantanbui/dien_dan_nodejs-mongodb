'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    roleId: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.BLOB('long'),
    status: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    token: DataTypes.STRING,
    background: DataTypes.BLOB('long'),
  }, {
    sequelize,
    modelName: 'Users',
    freezeTableName: true
  });
  return Users;
};
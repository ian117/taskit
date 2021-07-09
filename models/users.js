'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Categories, {
        foreignKey: 'created_by'
      })

      Users.hasMany(models.Tasks, {
        foreignKey: 'user_id'
      })

      Users.hasMany(models.Statuses,{
        foreignKey: 'created_by'
      })

      Users.hasMany(models.Social_networks, {
        foreignKey: 'user_id'
      })

      Users.hasMany(models.Reset_tokens,{
        foreignKey: 'user_id'
      })
    }
  };
  Users.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
  });
  return Users;
};
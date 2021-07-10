'use strict';

const bcrypt = require(`bcrypt`);

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
    firstname:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
  });

  Users.beforeCreate(async(user) => {
    try{
      let hash = await bcrypt.hash(user.password, 8);
      user.password = hash;
      return user.password
    }catch(error){
      throw new Error(`No se pudo encriptar la contraseña`);
    }
  });

  return Users;
};
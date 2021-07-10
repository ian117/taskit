'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.belongsTo(models.Users, {
        foreignKey: 'created_by'
      })

      Categories.hasMany(models.Tasks, {
        foreignKey: 'category_id'
      })
    }
  };
  Categories.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false 
      }
    }
  }, {
    sequelize,
    modelName: 'Categories',
    tableName: 'categories'
  });
  return Categories;
};
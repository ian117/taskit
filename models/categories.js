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
    name: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categories',
    tableName: 'categories'
  });
  return Categories;
};
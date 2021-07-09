'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colors extends Model {

    static associate(models) {
      
      Colors.hasMany(models.Statuses,{
        foreignKey: 'color'
      })
    }
  };
  Colors.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Colors',
    tableName: 'colors'
  });
  return Colors;
};
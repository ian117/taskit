'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statuses extends Model {
    static associate(models) {
      Statuses.hasMany(models.Tasks,{
        foreignKey: 'status_id'
      })

      Statuses.belongsTo(models.Users,{
        foreignKey: 'created_by'
      })
    }
  };
  Statuses.init({
    name: DataTypes.STRING,
    color: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Statuses',
    tableName: 'statuses'
  });
  return Statuses;
};
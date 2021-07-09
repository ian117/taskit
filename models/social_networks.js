'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Social_networks extends Model {

    static associate(models) {
     
      Social_networks.belongsTo(models.Users, {
        foreignKey: 'user_id'
      })
    }
  };
  Social_networks.init({
    user_id: DataTypes.INTEGER,
    provider: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Social_networks',
    tableName: 'social_networks'
  });
  return Social_networks;
};
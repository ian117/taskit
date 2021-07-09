'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reset_tokens extends Model {

    static associate(models) {

      Reset_tokens.belongsTo(models.Users,{
        foreignKey: 'user_id'
      })
    }
  };
  Reset_tokens.init({
    expiration: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Reset_tokens',
    tableName: 'reset_tokens'
  });
  return Reset_tokens;
};
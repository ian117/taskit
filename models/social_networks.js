'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Social_networks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
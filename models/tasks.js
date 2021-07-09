'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    static associate(models) {
      Tasks.belongsTo(models.Users, {
        foreignKey: 'user_id'
      })

      Tasks.belongsTo(models.Statuses, {
        foreignKey: 'status_id'
      })

      Tasks.belongsTo(models.Categories, {
        foreignKey: 'category_id'
      })
    }
  };
  Tasks.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    due_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
    tableName: 'tasks'
  });
  return Tasks;
};
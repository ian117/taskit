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
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
    tableName: 'tasks'
  });
  return Tasks;
};
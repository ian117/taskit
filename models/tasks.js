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
        
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      validate: {
        
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      validate: {
        
      }
    },
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
    tableName: 'tasks'
  });
  return Tasks;
};
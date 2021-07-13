'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('social_networks', {
      id: {
        allowNull: false,
        primaryKey: true,
<<<<<<< HEAD
        type: Sequelize.STRING  //¿ STRING ?
=======
        type: Sequelize.STRING
>>>>>>> dc0f4eb935ba5adc3924afe70e214918d0cf2587
      },
      user_id: {
        type: Sequelize.INTEGER, 
        references: {
          model: 'users',
          key: 'id'
        }
      },
      provider: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('social_networks');
  }
};
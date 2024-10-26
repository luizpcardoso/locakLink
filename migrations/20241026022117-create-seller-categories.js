const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('seller_categories', {
      seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'sellers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }, {
      indexes: [
        {
          unique: true,
          fields: ['seller_id', 'category_id'],
        },
      ],
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('seller_categories');
  },
};

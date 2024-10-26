const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('sellers', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      address_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'addresses',
          key: 'id',
        },
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cellphone: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      primary_color: {
        type: DataTypes.STRING(7),
      },
      secondary_color: {
        type: DataTypes.STRING(7),
      },
      cover_photo_url: {
        type: DataTypes.STRING(255),
      },
      profile_photo_url: {
        type: DataTypes.STRING(255),
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('sellers');
  },
};

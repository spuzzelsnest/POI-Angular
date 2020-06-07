'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tblFootages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeId: {
        type: Sequelize.NUMERIC
      },
      name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.TEXT
      },
      lat: {
        type: Sequelize.NUMERIC
      },
      lng: {
        type: Sequelize.NUMERIC
      },
      place: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      source: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tblFootages');
  }
};
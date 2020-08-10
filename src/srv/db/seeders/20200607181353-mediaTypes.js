'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('tblMediaTypes', [
    {
        type: 'Alied Photos'
      },{
        type: 'Axis Photos'  
      },{
        type: 'Alied Film'  
      },{
        type: 'Axis Film'  
      }],{});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('tblMediaTypes', null, {});

  }
};
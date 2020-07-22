'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('tblFootages', [{
        typeId: '1',
        name: 'noville04',
        title: 'After the battle',
        info: 'A StuG 40 is lying in a ditch after the battle. Other wreckages can been seen in the back.',
        lat: '50.06353378',
        lng: '5.76050949',
        place: 'Noville',
        country: 'Belgium',
        date: '1945-01-01',
        source:'US Signal Corps',
        remarks: '',
        published: true
      }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('tblFootages', null, {});

  }
};

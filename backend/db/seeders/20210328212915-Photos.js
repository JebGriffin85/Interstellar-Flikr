'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Photos', [{
        name: 'Photo 1',
        albumId: 1,
        photoURL: 'https//blah.com'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Photos', null, {});
    
  }
};

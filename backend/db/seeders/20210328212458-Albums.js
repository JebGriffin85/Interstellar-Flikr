'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      
      return queryInterface.bulkInsert('Albums', [{
        title: 'Photo album 1',
        userId: 1,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Albums', null, {});
    
  }
};

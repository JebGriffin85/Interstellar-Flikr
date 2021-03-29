'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('PhotoToAlbums', [{
        albumId: 1,
        photoId: 1
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('PhotoToAlbums', null, {});
    
  }
};

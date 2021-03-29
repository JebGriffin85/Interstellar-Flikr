'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Photos', [{
        name: 'First Image Taken by Hubbles Wide Field Planetary Camera',
        // albumId: 1,
        photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/1/full_jpg.jpg'
      },
        {
          name: 'The Resolving Power of the Hubble Space Telescope',
          // albumId: 1,
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/9/full_jpg.jpg'
        },
        {
          name: ' Faint Object Camera First Images',
          // albumId: 1,
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/17/full_jpg.jpg'
        },
        {
          name: 'Gaseous Ring Around Supernova 1987A',
          // albumId: 1,
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/25/full_jpg.jpg'
        },
    
    
    
    
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Photos', null, {});
    
  }
};

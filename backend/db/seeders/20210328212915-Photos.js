'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Photos', [{
             
          name: 'Hubble Observes Infant Stars in Nearby Galaxy',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14581/full_jpg.jpg'
        },
        {
        name: 'First Image Taken by Hubbles Wide Field Planetary Camera',
        photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/1/full_jpg.jpg'
      },
        {
          name: 'The Resolving Power of the Hubble Space Telescope',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/9/full_jpg.jpg'
        },
        {
          name: ' Faint Object Camera First Images',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/17/full_jpg.jpg'
        },
        {
          name: 'Gaseous Ring Around Supernova 1987A',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/25/full_jpg.jpg'
        },
        {
          name: 'Galaxy Cluster IDCS J1426.5+3508',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23078/full_jpg.jpg'
        },
        {
          name: 'Hubble Spots Aurorae on the Planet Uranus',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23216/print.jpg'
        },
        {
          name: 'Massive Star VY Canis Majoris - Polarized Light',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14563/full_jpg.jpg'
        },
        {
          name: '"Infant Mortality" in Spiral Galaxy NGC 1313 ',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14594/print.jpg'
        },
        {
          name: 'Barred Spiral Galaxy NGC 1313 - VLT',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14609/full_jpg.jpg'
        },
        {
          name: 'A Panoramic View of the Sky',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14619/print.jpg'
        },
        {
          name: 'Constellation Ursa Major',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14651/full_jpg.jpg'
        },
        {
          name: 'Extended Groth Strip - Detail of Hubble Image',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14661/full_jpg.jpg'
        },
        {
          name: 'Scale Comparison with Moon',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14671/print.jpg'
        },
        {
          name: 'Hubble Illuminates Cluster of Diverse Galaxies',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14705/full_jpg.jpg'
        },
        {
          name: 'The Colorful Demise of a Sun-like Star',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14742/print.jpg'
        },
        {
          name: 'A String of Cosmic Pearls Surrounds an Exploding Star',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14766/print.jpg'
        },
        {
          name: 'Hubble Follows Jupiter Aurorae',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14828/web_print.jpg'
        },
        {
          name: 'Hubble Images Jupiter in Support of the New Horizons Flyby',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14843/print.jpg'
        },
        {
          name: 'Jupiters Northern Aurora',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14862/full_jpg.jpg'
        },
        {
          name: 'Hubble Sees Comet Galaxy Being Ripped Apart By Galaxy Cluster',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14885/full_jpg.jpg'
        },
        // {
        //   name: '',
        //   photoURL: ''
        // },
        // {
        //   name: '',
        //   photoURL: ''
        // },
        // {
        //   name: '',
        //   photoURL: ''
        // },
        // {
        //   name: '',
        //   photoURL: ''
        // },
        // {
        //   name: '',
        //   photoURL: ''
        // },
        // {
        //   name: '',
        //   photoURL: ''
        // },
        // {
        //   name: '',
        //   photoURL: ''
        // },

    
    
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Photos', null, {});
    
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Photos', [
        {
          name: 'Pillars of Creation',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_1.jpg?mw=600'
        },
        {
          name: 'The Eagle Nebula',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_99b.jpg?mw=600'
        },
        {
          name: 'Able 1689, thousands of Galaxies',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_01.jpg?mw=600'
        },
        {
          name: 'NGC 1300',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_09.jpg?mw=600'
        },
        {
          name: 'The Cone Nebula',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_24.jpg?mw=600'
        },
        {
          name: 'The Horsehead Nebula',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_26.jpg?mw=600'
        },
        {
          name: 'V838 Monocerotis',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_28.jpg?mw=600'
        },
        {
          name: 'Dark Globule and Stellar Jet in the Carina Nebula',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/15165/full_jpg.jpg'
        },
        {
          name: 'The Sombrero Galaxy',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_14.jpg?mw=600'
        },
        {
          name: 'The Antennae',
          photoURL: 'astronomy.com/-/media/Images/News%20and%20Observing/News/2017/04/ASYGI0415_08.jpg?mw=600'
        },
        {
          name: 'Hubbles View of Barred Spiral Galaxy NGC 1672',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/14998/full_jpg.jpg'
        },
      {
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
        {
          name: 'Searching for Dark Matter in a Galaxy Cluster',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/15348/full_jpg.jpg'
        },
        {
          name: 'Globular Cluster with Multiple Stellar Populations',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/15380/full_jpg.jpg'
        },
        {
          name: 'Spiral Galaxy M81 Details 7',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/15400/full_jpg.jpg'
        },
        {
          name: 'Full field HST ACS WFC3 with SN',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/22984/full_jpg.jpg'
        },
        {
          name: 'Galaxy Cluster IDCS J1426.5+3508 and Giant Arc',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23066/print.jpg'
        },
        {
          name: 'Galaxy Cluster IDCS J1426.5+3508',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23078/full_jpg.jpg'
        },
        {
          name: 'Compass and Scale Image of Andromeda',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23140/print.jpg'
        },
        {
          name: 'Background Galaxies in Leo IV Field',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23338/full_jpg.jpg'
        },
        {
          name: 'Leo IV HST/ACS',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23362/full_jpg.jpg'
        },
        {
          name: 'Galaxy Cluster MACS J1149+2223',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23510/full_jpg.jpg'
        },
        {
          name: 'Merging Clusters in 30 Doradus',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23559/print.jpg'
        },
        {
          name: '30 Doradus Nebula and Star Clusters',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23582/print.jpg'
        },
        {
          name: 'Galaxy Cluster MACS J0647',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23604/full_jpg.jpg'
        },
        {
          name: 'Compass and Scale Image of Hercules A',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23783/print.jpg'
        },
        {
          name: 'Hubble Uncovers Most Robust Sample of Distant Galaxies',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23805/print.jpg'
        },
        {
          name: 'Fomalhaut  System',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23911/full_jpg.jpg'
        },
        {
          name: 'Star-forming Region IC 348 Around Protostar LRLL 54361 – Spitzer',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/23979/full_jpg.jpg'
        },
        {
          name: 'M106, Spiral Galaxy in Canes Venatici',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/24017/full_jpg.jpg'
        },
        {
          name: 'Oldest Star in Solar Neighborhood',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/24050/print.jpg'
        },
        {
          name: 'Galaxy Cluster Abell 68',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/24114/full_jpg.jpg'
        },
        {
          name: 'Quasar MC2 1635+119 and Host Galaxy',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/16112/full_jpg.jpg'
        },
        {
          name: 'Spiral Galaxy M74',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/16208/full_jpg.jpg'
        },
        {
          name: 'Circumstellar Disk HD 61005',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/16385/full_jpg.jpg'
        },
        {
          name: 'Abell 902',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/16450/full_jpg.jpg'
        },
        {
          name: 'Elliptical Galaxy NGC 1132',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/16551/full_jpg.jpg'
        },
        {
          name: 'Galaxy Cluster Abell 1689',
          photoURL: 'imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/16621/full_jpg.jpg'
        },
    
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Photos', null, {});
    
  }
};

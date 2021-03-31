'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhotoToAlbum = sequelize.define('PhotoToAlbum', {
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  PhotoToAlbum.associate = function(models) {
    // PhotoToAlbum.belongsToMany(models.Album, {
    //   foreignKey: 'albumId',
    //   through: 'PhotoToAlbum',
    //   otherKey: 'a'
    // });
    // PhotoToAlbum.belongsToMany(models.Photo, {
    //   foreignKey: 'photoId'
    // })

  };
  return PhotoToAlbum;
}
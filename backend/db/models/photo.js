'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    // albumId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    photoURL: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Photo.associate = function(models) {
    Photo.hasMany(models.Comment, { foreignKey: 'photoId' });
    Photo.belongsToMany(models.Album, {
      through: 'PhotoToAlbum',
      otherKey: 'albumId',
      foreignKey: 'photoId'
    });
  };
  return Photo;
};
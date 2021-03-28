'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User, { foreignKey: 'userId' });
    Album.belongsToMany(models.Photo, {
      through: 'PhotoToAlbums',
      otherKey: 'albumId',
      foreignKey: 'photoId'
    });
  };
  return Album;
};
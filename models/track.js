'use strict';
module.exports = (sequelize, DataTypes) => {
  const track = sequelize.define('track', {
    track_name: DataTypes.STRING,
    album_id: DataTypes.INTEGER,
    duration: DataTypes.STRING
  }, {});
  track.associate = function(models) {
    // associations can be defined here
  };
  return track;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const mediaTypes = sequelize.define('tblMediaTypes', {
    type: DataTypes.STRING
  }, {});
  mediaTypes.associate = function(models) {
    mediaTypes.belongsTo(models.footages,{
        foreignKey: 'typeId'
    })
  };
  return mediaTypes;
};
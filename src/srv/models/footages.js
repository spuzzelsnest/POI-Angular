'use strict';
module.exports = (sequelize, DataTypes) => {
  const footages = sequelize.define('tblFootages', {
    typeId: DataTypes.NUMERIC,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    info: DataTypes.TEXT,
    lat: DataTypes.NUMERIC,
    lng: DataTypes.NUMERIC,
    place: DataTypes.STRING,
    country: DataTypes.STRING,
    date: DataTypes.DATE,
    source: DataTypes.STRING,
    remarks: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {});
    
  footages.associate = function(models) {
      
   footages.hasMany (models.mediaType, {
        foreignKey: 'typeId'
    })
};  

return footages;
};
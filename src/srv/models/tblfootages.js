'use strict';
module.exports = (sequelize, DataTypes) => {
  const tblFootages = sequelize.define('tblFootages', {
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
    
  tblFootages.associate = function(models) {
      
   tblFootages.hasMany (models.tblMediaType, {
        foreignKey: 'typeId'
    })
};  

return tblFootages;
};
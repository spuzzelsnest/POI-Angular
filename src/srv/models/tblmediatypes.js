'use strict';
module.exports = (sequelize, DataTypes) => {
  const tblMediaTypes = sequelize.define('tblMediaTypes', {
    type: DataTypes.STRING
  }, {});
  tblMediaTypes.associate = function(models) {
    tblMediaTypes.belongsTo(models.tblFootages,{
        foreignKey: 'typeId'
    })
  };
  return tblMediaTypes;
};
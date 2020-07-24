module.exports = (sequelize, DataTypes) => {
  const mediaTypes = sequelize.define('tblMediaTypes', {
    id:{ type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    type: DataTypes.STRING
  }, {});
    
  mediaTypes.associate = function(models) {

    mediaTypes.hasMany(models.tblFootages,{
        foreignKey: 'typeId'
    })
  };
  return mediaTypes;
};
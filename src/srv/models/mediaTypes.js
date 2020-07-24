module.exports = (sequelize, DataTypes) => {
  const mediaTypes = sequelize.define('MediaTypes', {
    id:{ type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    type: DataTypes.STRING
  }, {});
    
  mediaTypes.associate = function(models) {

    mediaTypes.hasMany(models.Footages,{
        foreignKey: 'typeId'
    })
  };
  return mediaTypes;
};
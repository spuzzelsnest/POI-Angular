module.exports = (sequelize, DataTypes) => {
  const mediaTypes = sequelize.define('tblMediaTypes', {
    id:{ type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    type: DataTypes.STRING
  }, {timestamps: false,});
    
  mediaTypes.associate = function(models) {

    mediaTypes.belongsTo (models.tblFootages,{
        foreignKey: 'typeId',
        source: 'id',
    })
  };
  return mediaTypes;
};
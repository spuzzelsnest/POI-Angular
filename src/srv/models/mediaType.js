module.exports = (sequelize, DataTypes) => {
  const mediaType = sequelize.define('MediaType',{
    
    id: {   type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
    },
    type: DataTypes.STRING
  },{
      timestamps: false,
      tableName: 'tblMediaType'
  });
  
mediaType.associate = function(models) {
   
    mediaType.belongsTo(models.Footage,{
        foreignKey: 'typeId'
    })
  };
  return mediaType;
};
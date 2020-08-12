module.exports = (sequelize, DataTypes) => {
  
    const footage = sequelize.define('tblFootages', {
     id:{ type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
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
    
  footage.associate = function(models) {
      
   footage.belongsTo(models.tblMediaTypes, {
    foreignKey: 'typeId',
    targetKey: 'id'
    })
};  

return footage;
};

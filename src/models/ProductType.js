const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataType) => {

    const ProdutcType = 
    sequelize.define('ProductType',{

        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        tipo_produto: DataType.INTEGER
    },{
        timestamps: false,
        tableName: 'tipo_produto'
     })

     ProdutcType.associate = (modelsList) => {

        ProdutcType.hasMany(modelsList.Product,{
            foreignKey: 'id_categoria',
            as: 'product'
        })
     }

     return ProdutcType
}
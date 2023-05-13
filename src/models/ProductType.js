
module.exports = (sequelize, DataType) => {
    const ProductType = sequelize.define('ProductType', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING(100)

    }, {
        timestamps: false,
        tableName: 'tipo_produto'
    })

    ProductType.associate = (modelsList) => {
      ProductType.hasMany(modelsList.Product, {
        foreignKey: 'id_categoria',
        as: 'product'
      })
    }

    return ProductType
}

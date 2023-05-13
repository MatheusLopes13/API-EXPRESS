module.exports = (sequelize, DataType) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataType.STRING(30),
    valor: DataType.DECIMAL(10, 2),
    cor: DataType.STRING(20),
    descricao: DataType.STRING(100),
    id_categoria: DataType.INTEGER,
    imagem_1: DataType.STRING(),
    imagem_2: DataType.STRING(),
    imagem_3: DataType.STRING(),
    codigo_produto: DataType.STRING(45)

  }, {
    timestamps: false,
    tableName: 'produto'
  })

  Product.associate = (modelsList) => {
    Product.belongsTo(modelsList.ProductType, {
      foreignKey: 'id_categoria',
      as: 'productType'
    })
  }

  return Product
}
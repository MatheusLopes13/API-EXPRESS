// const roupasProduct = require('../database/productRoupas.json')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')
const { Product, ProductType } = require('../models')

const roupasController = {
  roupasPage: async (req, res) => {
    // res.render('roupas', {roupasProduct: roupasProduct, carrinhoProdutos: carrinhoProdutos })

    try {
      const roupasProduct = await Product.findAll({
        include: {
          model: ProductType,
          as: 'productType',
          required: true, // aplica INNER JOIN
          where: {
            id: 2
          }
        }
      })

      res.render('roupas', {
        roupasProduct: roupasProduct,
        carrinhoProdutos: carrinhoProdutos
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = roupasController

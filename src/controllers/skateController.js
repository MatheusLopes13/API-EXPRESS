const skateProduct = require('../database/productSkate.json')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')

const skateController = {
    roupasPage: (req, res) => {
        res.render('roupas', {skateProduct: skateProduct, carrinhoProdutos: carrinhoProdutos })
    }
}
module.exports = skateController
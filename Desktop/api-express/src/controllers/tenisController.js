const tenisProduct = require('../database/productTenis.json')

const tennisController = {
tenis: (req, res) => {
    res.render('tenis' , {tenisProduct} )
    
}
}

module.exports = tennisController
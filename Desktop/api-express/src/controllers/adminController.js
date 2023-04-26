
const { validationResult } = require('express-validator');
// aqui eu criei meu objeto Pagamento que tem um atributo e esse atributo é uma função
const productNovidades = require('../database/productNovidades.json')
// importação do nosso dataBase 
const adminController = {
// aqui é o meu atributo função 
    renderizarAdminPage: (req, res) => {
        res.render('admin')
        
    }, 

    addProduct:(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped())
            res.render('admin', { errors: errors.array() })
        }
        else {         
            const add_product = {
                id: productNovidades.length + 1,
                name: req.body.nameProduct,
                value: req.body.valueProduct,
                color : req.body.colorProduct,
                size: req.body.sizeProduct,
                description: req.body.descriptionProduct,
                picture: []
            }
            productNovidades.push(add_product)

            
            res.render("admin", {products: productNovidades}  )  
        }
    }



}

// aqui eu to exportando o meu objeto
module.exports = adminController

const { validationResult } = require('express-validator');
// aqui eu criei meu objeto Pagamento que tem um atributo e esse atributo é uma função
const adminController = {
// aqui é o meu atributo função 
    renderizarAdminPage: (req, res) => {
        res.render('admin')
        
    }, 

    addProduto:(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped())
            res.render('admin', { errors: errors.array() })
        }
        else {          
            res.send(req.body)
        }
    }

}// aqui eu to exportando o meu objeto
module.exports = adminController
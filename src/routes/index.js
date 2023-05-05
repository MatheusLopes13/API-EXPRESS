const express = require('express')
const detalsController = require('../controllers/detalsController')
const router = express.Router()
const teniscontroller = require('../controllers/tenisController')
const homeController = require('../controllers/homeController')
const adminController = require('../controllers/adminController');
const loginController = require('../controllers/loginController')
const pagamentoController = require('../controllers/pagamentoController')
const roupasController = require('../controllers/roupasControler')
const skateController = require('../controllers/skateController')
const { body } = require('express-validator')


router.get('/',  homeController.home)
router.get('/tenis', teniscontroller.tenis)
router.get('/detals/:id', detalsController.getProduct)
router.get('/search', homeController.search)
router.get('/admin', adminController.renderizarAdminPage)
router.post('/product', 
    body('nameProduct').notEmpty().withMessage('Marca precisa ser preenchido!'),
    body('valueProduct').notEmpty().withMessage('Valor precisa ser preenchido!'),
    body('sizeProduct').notEmpty().withMessage('Tamanho precisa ser preenchido!'),
    body('descriptionProduct').notEmpty().withMessage('Descrição precisa ser preenchido!'),
    body('colorProduct').notEmpty().withMessage('Cor precisa ser preenchido!'),
    adminController.addProduct)
router.delete('admin/delet/:product', adminController.deletProduct)
router.put('/admim/edit/:product', adminController.editProduct)
router.get('/login', loginController.renderizarTelaLogin) 
router.get('/pagamento', pagamentoController.pagamentoPage)
router.get('/roupas', roupasController.roupasPage)
router.get('/skate', skateController.skatePage)
router.post('/logar', loginController.logarUsuario)

module.exports = router




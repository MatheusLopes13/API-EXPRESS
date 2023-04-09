const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');

const homeController = require('../controllers/homeController')
// aqui eu criei minha variavel loginController que recebe o objeto que eu to exportando da loginController.js
const loginController = require('../controllers/loginController')
// aqui eu criei minha variavel pagamentoController que recebe o objeto que eu to exportando da pagamentoController.js
const pagamentoController = require('../controllers/pagamentoController')

router.get('/', homeController.home)
router.get('/pagamento', pagamentoController.pagamentoPage)

// endpoints/rotas da tela de login
router.get('/login', loginController.renderizarTelaLogin)
router.post('/logar', body('email').isEmail(), body('senha').isLength({ min: 8}), loginController.logarUsuario)
router.post('/criarconta', 
    body('email').isEmail().withMessage('Email invalido'), 
    body('senha').isLength({ min: 8}),
    body('nome').notEmpty().withMessage('Campo nome deve ser preenchido'),
    body('sobrenome').notEmpty().withMessage('Campo sobrenome deve ser preenchido'),
    loginController.cadastrarUsuario)

module.exports = router


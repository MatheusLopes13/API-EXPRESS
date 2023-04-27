// eu criei meu objeto Login que tem um atributo e esse atributo é uma função
const loginMock = require("../database/login.json")
const { validationResult } = require('express-validator');
const productNovidades = require('../database/productNovidades.json')

const loginController = {
// aqui é o meu atributo função    
    renderizarTelaLogin: (req, res) => {
        res.render('login')
    },
    
    cadastrarUsuario: (req, res) => {
        //aqui eu fiz uma receitinha de bolo pro meu sistema me retornar caso encontre erros
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped())
            res.render('login', { errors: errors.array() })
        } else {
            res.redirect('/')
        }
    },

    //aqui a mesma coisa, verificando se tem erro
    logarUsuario: (req, res) => { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped())
            res.render('login', { errors: errors.array() })
        } else {

            //req.body é onde o front me envia infos, aqui eu recebo email e senha enviado pelo usuario
            const email = req.body.email
            const senha = req.body.senha
            // aqui estou tentando encontrar alguem que tenha o mesmo email e senha digitados na pg de login
            const usuario = loginMock.find((user) => {
                if(user.email === email && user.senha === senha) {
                    return user
                }
            }) 
            // se caso o usuario nao for cadastrado 
            if(usuario === undefined) {
                res.send("Usuario não encontrado")
            } else {
                const arrayNome = usuario.nome.split(' ')
                let iniciais = ''
                const tamanhoArray = arrayNome.length - 1
                iniciais += arrayNome[0].substring(0, 1)
                iniciais += arrayNome[tamanhoArray].substring(0, 1)
                usuario.iniciais = iniciais
               res.render('home', { usuario, productNovidades });

            }
        }

        
    },   
} 
// aqui eu to exportando o meu objeto
module.exports= loginController

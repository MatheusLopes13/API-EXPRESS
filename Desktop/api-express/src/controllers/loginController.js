// eu criei meu objeto Login que tem um atributo e esse atributo é uma função
const loginMock = require("../database/login.json")
const loginController = {
// aqui é o meu atributo função    
    loginPage: (req, res) => {
        res.render('login')
    },

    logarUsuario: (req, res) => { 
        //req é a requisição, res é a resposta
        const email = req.body.email
        const senha = req.body.senha
        
        const encontrandoUsuario = loginMock.find((user) => {
            if(user.email === email && user.senha === senha) {
                return user
            }
        }) 
        if(encontrandoUsuario === undefined) {
            res.send("Usuario não encontrado")
        } 
        res.send(encontrandoUsuario)

        
},

    
} 
// aqui eu to exportando o meu objeto
module.exports= loginController

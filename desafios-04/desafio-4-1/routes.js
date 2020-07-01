// Importação de funções
const express = require('express')
const routes = express.Router()

//Criação de rotas
routes.get('/', function(req, res) {
    return res.redirect('students')
})

routes.get('/students', function(req, res) {
    return res.render('students')
})

routes.get('/teachers', function(req, res) {
    return res.render('teachers')
})

//Exporta o código
module.exports = routes
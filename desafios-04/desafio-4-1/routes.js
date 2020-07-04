// Importação de funções
const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

//Criação de rotas
routes.get('/', function(req, res) {
    return res.redirect('students')
})

routes.get('/students', function(req, res) {
    return res.render('students')
})

routes.get('/teachers', function(req, res) {
    return res.render('teachers/index')
})

routes.get('/teachers/create', function(req, res) {
    return res.render('teachers/create')
})

//Rota utilizando função externa
routes.post('/teachers', teachers.post ) 


//Exporta o código
module.exports = routes
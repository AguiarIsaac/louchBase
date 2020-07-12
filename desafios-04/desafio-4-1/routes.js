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

routes.get('/teachers', teachers.index )

routes.get('/teachers/create', function(req, res) {
    return res.render('teachers/create')
})

//Rotas utilizando função externa

routes.post('/teachers', teachers.post )

routes.get('/teachers/:id', teachers.show )

routes.get('/teachers/:id/edit', teachers.edit )

routes.put('/teachers', teachers.put)

routes.delete('/teachers', teachers.delete)


//Exporta o código
module.exports = routes
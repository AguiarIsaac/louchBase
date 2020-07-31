const { date, level } = require('../../lib/functions')

module.exports = {
    index(req, res) {
        return res.render('students/index')
    },
    
    create(req, res) {
        return res.render('students/create')
    },

    post(req,res) {
        const keys = Object.keys(req.body) // Irá Retornar um objeto com os names dos inputs
        // Validação do form
        for(key of keys) {
            if(req.body[key] == ''){
                return res.send('Please, fill all fields!')
            }
        }
        return
    },

    show(req, res) {
        return
    },

    edit(req, res) {
        return
    },

    put(req, res) {
        const keys = Object.keys(req.body) // Irá Retornar um objeto com os names dos inputs
        // Validação do form
        for(key of keys) {
            if(req.body[key] == ''){
                return res.send('Please, fill all fields!')
            }
        }
        return
    },

    delete(req, res) {
        return
    }
}

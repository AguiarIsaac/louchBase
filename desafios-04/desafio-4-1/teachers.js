// Importa função de file system do node
const fs = require('fs')
const data = require('./data.json')

exports.post = function(req, res) {
    const keys = Object.keys(req.body) // Irá Retornar um objeto com os names dos inputs
    // Validação do form
    for(key of keys) {
        if(req.body[key] == ''){
            return res.send('Please, fill all fields!')
        }
    }

    let {avatar_url, name, birth, formation, type_class, services} = req.body

    birth = Date.parse(birth)
    const id = Number(data.teachers.length + 1)
    const created_at = Date.now()

    
    data.teachers.push({
        id, 
        avatar_url,
        name,
        birth,
        formation,
        type_class,
        services,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) { return res.send('Write file Error!') }
        return res.redirect('/teachers')
    })
}
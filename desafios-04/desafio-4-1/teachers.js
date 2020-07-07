// Importa função de file system do node
const fs = require('fs')
const data = require('./data.json')
const { age, date } = require('./functions')

// Criação
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

// Visualização
exports.show = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('Teachers Not Found!!!')

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(','),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }

    return res.render('teachers/show', { teacher })
}

// Edição
exports.edit = function(req,res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('Teachers Not Found!!!')

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    console.log(teacher.birth)
    return res.render('teachers/edit', { teacher })
}
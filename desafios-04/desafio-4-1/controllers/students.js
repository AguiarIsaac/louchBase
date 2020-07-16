// Importa função de file system do node
const fs = require('fs')
const data = require('../data.json')
const { date, level } = require('../functions')


exports.index =  function(req, res) {
    const students = data.students
    
    for(student of students) {
        student.school_year = level(student.school_year)
    }

    return res.render('students/index', { students })
}

exports.post = function(req, res) {
    const keys = Object.keys(req.body) // Irá Retornar um objeto com os names dos inputs
    // Validação do form
    for(key of keys) {
        if(req.body[key] == ''){
            return res.send('Please, fill all fields!')
        }
    }

    let {avatar_url, name, email, birth, school_year, workload}  = req.body

    birth = Date.parse(birth)
    
    
    let id = 1
    const lastStudent = data.students[data.students.length - 1]
    if(lastStudent) {
        id = lastStudent.id + 1
    }

    data.students.push({
        id, 
        avatar_url,
        name,
        email,
        birth,
        school_year,
        workload
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) { return res.send('Write file Error!') }
        return res.redirect('/students')
    })
}

exports.create = function(req, res) {
    return res.render('students/create')
}

exports.show = function(req, res) {
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundStudent) return res.send('Students Not Found!!!')

    const student = {
        ...foundStudent,
        age: date(foundStudent.birth).birthDay,
        school_year: level(foundStudent.school_year)
    }

    return res.render('students/show', { student })
}

exports.edit = function(req,res) {
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundStudent) return res.send('Students Not Found!!!')

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth)
    }    
    return res.render('students/edit', { student })
}

exports.put = function(req,res) {
    
    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find(function(student, foundIndex){
        
        if (id == student.id ) {
            index = foundIndex
            return true
        }
    })

    if(!foundStudent) return res.send('Student Not found!')

    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(foundStudent.id)
    }

    data.students[index] = student

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write Error!')

        return res.redirect(`/students/${id}`)
    })
}

exports.delete = function(req,res) {
    const { id } = req.body

    const filterStudent = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filterStudent

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Write file erro!')

        return res.redirect('/students')
    })
}
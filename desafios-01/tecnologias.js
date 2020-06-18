const professional = {
    name: 'Isaac',
    age: 24,
    qualification: [
        { name: 'JavaScript', specialty: 'Web/Mobile'},
        { name: 'Python', specialty: 'Data Science'},
        { name: 'ShellScript', specialty: 'Servers'}
    ]
}

console.log(`The ${professional.name} professional is ${professional.age} years old and uses ${professional.qualification[0].name} with a specialty in the ${professional.qualification[0].specialty} `)
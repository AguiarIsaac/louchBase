const users = [
    {name: 'Fulano', technologies: ['HTML', 'CSS']},
    {name: 'Sicrano', technologies: ['Python', 'Django']},
    {name: 'Beltrano', technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js']}
]

for(let i = 0; i < users.length; i++){
    console.log(`The user ${users[i].name}, works with ${users[i].technologies}`)
}

function checkIfUserCss(user) {
    for (let tecnology of user.technologies) {
        if (tecnology == 'CSS')  return true
    }
    {return false}
}

for (let i = 0; i < users.length; i++) {
    const userWorkCss = checkIfUserCss(users[i])

    if(userWorkCss) {
        console.log(`The user ${users[i].name}, works witch CSS!!`)
    }
}
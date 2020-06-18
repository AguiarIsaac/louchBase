const name = 'Siclano'
const sex = 'F'
const age = 50
const contribution = 45
const rule = age + contribution

if (sex == 'M') {
    if(rule >= 95){
        console.log(`${name}, you are able to retire`)
    } else {
        console.log(`${name}, you are not able to retire`)
    }
} else {
    if (sex == 'F' && rule >= 85) {
        console.log(`${name}, the lady is apt to do retiring`)
    } else {
        console.log(`${name}, the lady is not apt to do retiring`)
    }
}
const name = 'Fulano'
const weight = 89
const height = 1.75
const imc = weight / (height * height)

if (imc >= 30) {
    console.log(`${name} you are overweight!`)
} else {
    console.log(`${name} you are not overweight!`)
}
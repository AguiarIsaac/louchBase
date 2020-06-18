const users = [
    {
        nome:'Isaac',
        revenue:[1000, 250, 110, 1000],
        outgoing: [405, 80, 80, 50]
    },
    {
        nome:'Aguiar',
        revenue:[1169, 200, 50],
        outgoing:[99, 80, 100, 250, 350, 257, 250]
    },
    {
        nome:'Pereira',
        revenue:[1000, 100, 250],
        outgoing:[405, 130, 80, 80, 99, 10, 95, 20, 50, 1000]
    }
]

function calculateBalance(revenue, outgoing) {
    const receitaTotal = somaNumeros(revenue)
    const despesaTotal = somaNumeros(outgoing)

    return receitaTotal - despesaTotal
}

function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

for (let user of users) {
    const saldo = calculateBalance(user.revenue, user.outgoing)

    if (saldo > 0) {
        console.log(`${user.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${user.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}

// function addNumbers() {
//     for (let i = 0 ; i < users.length; i++) {
//         const saldo = users[i].revenue.reduce((total, currentElement) => total + currentElement)
//         console.warn(saldo)
//     }
// }
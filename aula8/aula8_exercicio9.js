// Exercício 9:

const num = 9;

let soma = 0,
    anterior = 0,
    proximo = 1;

for (let i = 0; i < num; i++ ) {
    soma = anterior + proximo
    anterior = proximo
    proximo = soma
}
console.log(`O fibonacci de ${num} é ${anterior}`)

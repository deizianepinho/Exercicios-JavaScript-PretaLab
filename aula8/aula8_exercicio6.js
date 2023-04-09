// Exercício 6:
let nPares = 0,
    nImpares = 0;

for (i = 0; i <= 40; i++) {
    console.log(i)
    if ((i % 2) == 0) {
        nPares++;
    } else {
        nImpares++;
    }
}
console.log(`Foram impressos ${nPares} números pares e ${nImpares} números ímpares.`)

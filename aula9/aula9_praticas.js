/*// Estruturas de repetição - While:
let i = 0;

while (i < 11) {
    console.log(`5 x ${i} = ${5*i}`)
    i++
}
*/

/*// Estruturas de repetição - Do While:
let b = 0;

do {
   console.log(`O contador vale: ${b}`)
   b++
} while (b < 5)
*/

// Prática:
//Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100
let i =1,
    ePar = 0;

while (i <= 100) {
    if ((i % 2) === 0) {
        ePar = i
        console.log(ePar**2)
    }
    i++
}

let notaProva1 = 5
    notaProva2 = 8;

const media = (notaProva1 + notaProva2) / 2

if (media >= 6) {
    console.log('Aprovado')
} else if (media < 6 && media > 5) {
    console.log(`Faça uma pesquisa e traga na segunda. Sua média foi: ${media}.`)
} else {
    console.log(`Reprovado, sua média foi: ${media}.`)
}

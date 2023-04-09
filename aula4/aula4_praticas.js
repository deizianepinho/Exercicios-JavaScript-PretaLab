//Declaração de variáveis:
const nomePais = 'Brasil' , pontosTuristicos = 'Pelourinho e Farol da barra', capitalPais = 'Brasília' , quantidadedeEstados = 26;
console.log(nomePais,pontosTuristicos,capitalPais,quantidadedeEstados)

//Concatenação método tradicional:
console.log('Eu me chamo Deizane e moro no ' + nomePais + ', que tem como capital ' + capitalPais + ' e tem ' + quantidadedeEstados + ' estados. E amo ir nos pontos turísticos ' + pontosTuristicos + '.')

//Concatenação método template string:
console.log(`Eu me chamo Deiziane e moro no ${nomePais}, que tem como capital ${capitalPais} e tem ${quantidadedeEstados}. E amo ir nos pontos turísticos ${pontosTuristicos}.`)

//Concatenação - Prática 3:
const primeiroNome = 'Deiziane' , ultimoNome = 'Pinho' , anoDeNascimento = 1993 , corPreferida = 'Lilás' , passatempo = 'ler notícias e materiais na internet' , sentimento = 'gradidão';
console.log(`Olá, me chamo ${primeiroNome} ${ultimoNome} e nasci no ano de ${anoDeNascimento}. Minha cor preferida é ${corPreferida} e um dos meus passatempos é ${passatempo}. Estou sentindo muita ${sentimento} em participar desse projeto, agregando conhecimentos e conhecendo mulheres incríveis.`)

//Manipulação de strings:


//Operadores aritméticos:
const numero1 = 20 , numero2 = 5;
const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;
const moduloDaDivisao = numero1 % numero2;
console.log(numero1,numero2,soma,subtracao,multiplicacao,divisao,moduloDaDivisao)
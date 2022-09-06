// Module --> Variável oculta que possui informações do arquivo
// exports --> Variável que vamos utilizar para passar informações para outros arquivos


/*
    Criamos um objeto literal para armazenar todas as nossas funções
*/

const calculadora = {
    adicionar,
    subtrair,
    dividir,
    multiplicar,
    PI: 3.14,
    zero: 0
};

// Estou definindo que essas informações dentro de calculadora, vão ser exportadas
module.exports = calculadora;


//dot notation
//console.log(calculadora.adicionar(5, 6));
//console.log(module.exports);
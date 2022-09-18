/* 
Arrow function sem parâmetros.

Requer os parênteses para começar.

Por ter uma única linha de código, e essa é a que queremos retornar, o return é implícito.
*/ let bemVindo = () => 'Olá Mundo!';

/*
Arrow function com um único parâmetro(não precisamos dos parênteses para indicá-lo) e com um return implícito.
*/let dobro = numero => numero * 2;


/*
Arrow function com dois parâmetros.
Necessita dos parênteses e possui um return implícito.
*/let soma = (a, b) => a + b;

/*
Arrow function sem parâmetros e com um return explícito.
Neste caso fazemos uso das chaves e do return, já que a lógica desta função se desenvolve em mais de uma linha de código
*/let horaAtual = () => { 
    let data = new Date();
    return data.getHours() + ':' +
        data.getMinutes();
};

console.log();
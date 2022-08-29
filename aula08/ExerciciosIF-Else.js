/*
Exercicio: "Meu primeiro if"

objetivo: Entender como é a sintaxe de uma estrutura condicional.
*/

// microDesafio

function validacao(booleano) {
    if (booleano == true) {
        console.log('O valor é true - Verdadeiro');
    } else if (booleano != true && booleano != false) {
        console.log('E essa condição não e valida');
    }else {
        console.log('O valor é false - Falso');
    };
};

validacao('Bruno');

/*
function acessar(idade) {

    let acesso = "";

    // Condicional Composta
    // SE pessoa tiver menos de 16anos 'Acesso proibido' SE tiver entre 16 é 18 anos acesso apenas com acompanhante maior de idade;
    if (idade < 16) {
        acesso = 'Acesso proibido';
    } else if (idade >= 16 && idade <= 18) {
        acesso = 'Acesso liberado somente com acompanhante maior de idade';
    } else {
        acesso = 'Acesso liberado';
    };
    return acesso;
};

console.log(acessar(20));


function minhaComida(comida) {
    switch (comida) {
        case 'pizza':
            console.log('Ótima escolha, mas não e a certa!');
            break;
        case 'hotdog':
            console.log('Eu também adoro, mas não e a que eu quero!');
            break;
        case 'Lasanha':
            console.log('É isso ai eu quero essa, Obrigado!');
            break;
        default:
            console.log('Não e nenhuma das opções, tente na próxima!');
            break;
    };
};

minhaComida('pizza');
*/
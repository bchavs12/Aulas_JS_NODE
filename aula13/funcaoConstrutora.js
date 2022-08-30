// - Função Construtora
/* 
    Serve basicamente como um molde a ser construido

    Um modelo que serve para a criação de objetos em massa
*/

// Função constrututora 1
function criarUsuario(nome, idade, rg) {
    // Novo objeto 
    return {
        nome,
        idade,
        rg
    }
}

// Função de execução
criarUsuario('Fulano 1', 22, '0.000.000')

// Funções expressas

let usuario1 = criarUsuario('Fulano 1', 22, '0.000.000');
let usuario2 = criarUsuario('Bruno', 24, '1.000.000.000');

//console.log(usuario1, usuario2);

// Função construtora 2 --> utilizando this

// Para esse tipo de função construtora a primeira letra é sempre Maisucula

function Usuario(nome, idade, rg) {
    // conceito de atribuição e dot notation para criar as propriedades
    // this --> como sendo o objeto pai de todo mundo
    // no momento inicial da função construtora
    // this ele é um objeto vazio {}

    this.nome = nome
    this.idade = idade
    this.rg = rg
    this.contatos = [];
    this.novoContato = function (nome, numero) {
        const novoContato = {
            nome,
            numero
        }
        this.contatos.push(novoContato)
    }
}



// new --> novo --> Criando um novo Objeto através da função construtora

//let usuario3 = new Usuario('ciclano', 20, '3.000.000.000');
//console.log(usuario3);
//console.log(new Usuario('Alessandro', 11 , '4.000.000.000'));

/* Objeto Literal
let usuario1 = {
    nome: 'Fulano 1',
    idade: '22',
    rg: '0.000.000'
};

let usuario2 = {
    nome: 'Fulano 2',
    idade: '20',
    rg: '0.000.000'
};

let usuario3 = {
    nome: 'Fulano 3',
    idade: '21',
    rg: '0.000.000'
};
*/
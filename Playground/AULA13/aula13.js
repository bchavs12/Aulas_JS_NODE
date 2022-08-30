// PG AULA 13 OBJETOS LITERAIS
// This --> referece a propriedade para não repetir e usar dentro do metodo
/*
let tenista = {
    nome: 'Priscila',
    idade: 38,
    ativo: true,
    saudacao: function () {
        return 'Olá, me chamo Roger';   
    }
};

console.log(tenista.saudacao());
*/
let carro = {
    marca: "Fiat",
    modelo: "Uno",
};

function Carro(valorMarca, valorModelo) {
    this.marca = valorMarca;
    this.modelo = valorModelo;
};

console.log(carro);

console.log(new Carro("Renault", "Clio"));

let pais = {
    nome: "Brasil",
    capital: "Brasilia",
    nacionalidade: function () {
       return "Sou do " + this.nome;
    },
};

console.log(pais.nacionalidade());

console.log(pais.nome) // Para acessar uma propriedade

console.log(pais['capital']);
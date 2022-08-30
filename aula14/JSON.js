// JavaScript Object Notation '[{"nome":"Brasil,"capital":"Brasília"}]'

/* JSON.parse()

let dadosEmJson = '[{ "nome" : "Brasil, "capital" : "Brasília" }]'
let dadosConvertidos = JSON.parse(dadosEmJson);

console.log(dadosConvertidos);
*/

/* JSON.stringify()

let dadosNumObjeto = {
    nome: 'Maria',
    sobrenome: 'Quitéria',
    pais: 'Brasil'
}

let dadosConvertidos = JSON.stringify(dadosNumObjeto);

console.log(dadosConvertidos);

'{"nome":"Maria","sobrenome":"Quitéria","pais":"Brasil"}'

*/

let pessoa = {
    nome: "Bruno",
    idade: 22,
    altura: 1.80
};

let json = JSON.stringify(pessoa); // transforma em JSON
console.log(json)

let objetoNovo = JSON.parse(json);
// Exercício “Lista de Compras”

let produtos = ['Arroz', 'feijão', 'batata'];

console.log('array de produtos');
console.table(produtos);

const incluirElemento = produtos.push('salada');

console.log('O metodo push coloca um elemento a mais na array')
console.log(incluirElemento);
console.table(produtos);

const ultimoElemento = produtos.pop();

console.log('O metodo pop elimina o último elemento do array')
console.log(ultimoElemento);
console.table(produtos);

const elimina1elemento = produtos.shift();
console.log('metodo shift elimina o primeiro elemento');
console.log(elimina1elemento);
console.table(produtos);

const adicionar1oumais = produtos.unshift('Arroz');

console.log('metodo unshift adiciona um ou mais elementos ao inicio do array');
console.log(adicionar1oumais);
console.table(produtos);

const separadorArray = produtos.join(" - ");

console.log('metodo join junta os elementos de um array usando um separador que especificamos');
console.log(separadorArray);

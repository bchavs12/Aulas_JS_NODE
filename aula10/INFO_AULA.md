 [X]- IF TERNARIO.
 [X]- STRINGS. 
 [x]- ARRAYS. 

 # Exercicios 
 ## Arrays e Coleções
 [x] Acessar elementos específicos de um array.
 [x] Modificar cada um dos elementos de um array e imprimi-los
 [x] Adicionar elementos a um array.
 [x] Extrair elementos de um array.
 [x] Comparar elementos de um array com os elementos de outro.

 ## Array Invertido
- Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.

[] Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

[] Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

# Arrays
Coleção dados indexadas e sequenciais que pode sem unidimensionais ou bidimensionais

## Bidimensionais --> Matrizes

No javaScript os tipos dentro do array podem ser diferentes --> Array


let listaVeiculos = ['Bmw','Fusca','Uno','Civic','Brasilia','Carroça'];
let frutas = ['Abacaxi', 'laranja', 'melão'];
let notas = [6.7,8.9,10];
let arrayBaguncado = [NaN, Infinity, undefined, null, Math.PI, function () { }];
let matriz = [
    [1, 3, -2, 0],
    [-3, 4, 0, 1],
    [5, 1 - 4, 2],
];

matriz[0][0][0] // abacaxi

Escola --> Turmas --> Alunos --> Materiais --> Professores


let numeros = [];

console.log(numeros.length);

## push --> adicionar elementos no final do array;

- numeros.push(1,2,3,4,5,7);
console.table(numeros);

## unshift --> Adicionar elementos no inicio do array;

numeros.unshift(1000);
console.table(numeros);

## pop --> Remover o ultimo elemento
numeros.pop();

## shift --> Remover o primeiro elemento

# Metodos strings

## .Length
- Saber o comprimento da string

## .indexOf()
- Saber se uma sequencia de caracteres existe

## .slice()
- Para pegar uma parte do texto.

- texto.slice(0,3);

## trim()
- Para remover os espaços em branco.

## split()
- Para gera um Array
- Exemplos:
Sou um programador.split('')

## replace
- Para alterar uma parte do texto.

Exemplo: "Sou programador php".replace('php', 'javaScript');
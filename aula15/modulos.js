/* 
Módulos

- Módulos externos --> readlineSync: Foi desenvolvido por outra pessoa e não existe nativamente no NodeJS. Fazemos a instalação de módulos através do NPM ou de forma manual

- Módulos do NodeJS --> São módulos nativos e disponiveis para podermos utilizar

fileSystem --> Possui metódos que facilitam a manipulação de arquivos

- Como criar nossos módulos

*/

const fs = require('fs');

// Esse método cria um arquivo no caminho que você especificar
fs.writeFileSync('./meuarquivo.txt', 'Oi meu nome e Bruno Chaves', {
    encoding:'utf-8'
})
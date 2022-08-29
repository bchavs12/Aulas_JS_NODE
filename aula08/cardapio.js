switch(opcao) {
  case '01':
    console.log("X-bancon selecionado");
    // break -> encerrando o caso 
    break;
  case '02':
    console.log("X-salada selecionado");
    break;
  case '03':
    console.log("X-egg selecionado"); 
    break;
  // Caso contrário dos cases acima
  default:
    console.log('Opção inválida');
};

console.log(`
  Bem-vindo ao X-podrão 
  Escolhe uma dentre as opções
  01 - X-Bancon
  02 - X-Salada
  03 - X-Egg
`);

const readlineSync = require('readline-sync');

const opcao = readlineSync.question(`Escolha a sua opção: ${opcao}`);
console.log('\n\n');

if(opcao === 1){
  console.log("X-bancon selecionado");
} else if (opcao === 2){
  console.log("X-salada selecionado");
} else if (opcao === 3){
  console.log("X-egg selecionado"); 
} else {
  console.log('Opção inválida');
}
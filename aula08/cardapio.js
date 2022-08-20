
console.log(`
  Bem-vindo ao X-podrão 
  Escolhe uma dentre as opções
  01 - X-Bancon
  02 - X-Salada
  03 - X-Egg
`);

// Escolha uma opção dentre várias 
// caso seja a opçao 01 faca algo
// caso seja a opcao 02 faca algo
// ...
// ...
// caso nao seja nenhuma das opcoes faca algo 

if(opcao === '01' || opcao === 1){
  console.log("X-bancon selecionado");
} else if (opcao === '02' || opcao === 2){
  console.log("X-salada selecionado");
} else if (opcao === '03' || opcao === 3){
  console.log("X-egg selecionado"); 
} else {
  console.log('Opção inválida');
}
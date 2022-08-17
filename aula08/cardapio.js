// SWITCH
const readlineSync = required('readline-sync')

console.log(`
 Bem-Vindo


`);

switch (opcao) {
    case '01':
        console.log("X-Bacon selecionado");
        break // encherrando o caso
    case '02':
        console.log("X-salada selecionado");
        break // encherrando o caso
    case '03':
        console.log("X-egg selecionado");
        break // encherrando o caso
    default:
        console.log('Opção inválida');
}
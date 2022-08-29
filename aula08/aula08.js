// Aula 08 dia 16/08/22 Condicionais

/*
if/else
- Servir para controlar o fluxo da aplicação e para tomada de decisões
if --> true
else --> caso contrário --> false
*/

let media = 4;

if (media >= 7 || (media >= 6.8 && frequencia >= 90)) {
    console.log('Aluno aprovado');  
} else if (media >= 5 && media < 7) {
    console.log('Aluno em recuperação');
}
else {
    console.log('Aluno reprovado');
};
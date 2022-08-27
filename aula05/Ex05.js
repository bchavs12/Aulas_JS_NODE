/*
[X] Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.

Calculos:
8 * 5 = 40
40 * 4 = 160hrs mês || 8 * 22 = 176

*/

let salario = 0;
let horasmes = 0;

function horaDeTrabalho(salario, horasmes) {
    return salario / horasmes;
}

console.log(horaDeTrabalho(2450, 160));

/*Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.*/

function calcularCircunferencia(radius) {
    return 2 * Math.PI * radius;
  }

  console.log(calcularCircunferencia(3));
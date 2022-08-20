## Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

## We need to develop a menu for a super fast microwave, where we will have 5 food options with their respective predefined times.

      1 - Popcorn – 10 seconds (default);
      2 - Noodles – 8 seconds (default);
      3 - Meat – 15 seconds (default);
      4 - Beans – 12 seconds (default);
      5 - Brigadier - 8 seconds (default);

- The user will be able to change the default time, increasing or decreasing according to his will. If the time informed is greater than 2x the necessary, display a message that the food has burned.
- If the time is less than the default, display the message: "insufficient time";
- Options not listed in the menu, should display an error message: "Nonexistent dish";
- If the time is 3x longer than necessary for the dish, the microwave should display the message: “kabumm”;
- At the end of each task, the microwave should display the message: "Dish ready, good appetite!!!".

let comida = readlineSync.question('Qual prato voce gostaria de preparar?\n').toLowerCase();
  let segundos = readlineSync.questionInt('E o tempo?\n');
console.log(microondas(comida, segundos))

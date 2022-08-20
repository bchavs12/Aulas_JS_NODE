const opcoes = {
  1: { nome: 'Pipoca', tempo: 10 },
  2: { nome: 'Espaguete', tempo: 8 },
  3: { nome: 'Bife', tempo: 15 },
  4: { nome: 'Feijão', tempo: 12 },
  5: { nome: 'Brigadeiro', tempo: 8 },
};

function microondas(numeroOpcao, tempo) {
  const prato = opcoes[numeroOpcao];
    
  if (!prato) {
    return console.log("Prato inexistente")
  };

  let mensagem;
  const padraotempo = prato.tempo;

  if (tempo < padraotempo) {
    mensagem = "tempo insuficiente"
  } else if (tempo > padraotempo * 2 && tempo <= padraotempo * 3) {
    mensagem = "A comida queimou"
  } else if (tempo > padraotempo * 3) {
    mensagem = "Kabummm!"
  } else {
    mensagem = "Prato pronto, bom apetite!!"
  };

  return console.log(mensagem);
};

microondas();

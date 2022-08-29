# O que é JSON
- JSON (Javascript Object Notation) é um padrão de texto usado para se comunicar entre sistemas.

- Imagine que cada linguagem seja uma língua diferente, mesmo que elas possuam semelhanças, como strings, booleanos etc, a maneira que cada uma trabalha internamente é diferente.

- Pensando nisso, é necessário que exista uma maneira universal de escrita, que todas as linguagens consigam compreender, para que haja comunicação.

- Um exemplo seria a nossa língua. Caso alguém fale português, provavelmente não entenderá o italiano, porém como o inglês é uma língua universal, ambos devem saber falar e entendê-la, sendo possível se comunicar.

- Qualquer linguagem entende JSON, e devido a isso é possível que os sistemas, mesmo criados com linguagens diferentes, se comuniquem com base nesse padrão textual.

- Resumindo: É um formato de texto simples usado para trocar dados entre diferentes sistemas.

# Objeto literais e JSON - Estrutura

## Objetos literal             

- Admite aspas simples e duplas
- As chaves do objeto não usam aspas.
- Podemos escrever métodos sem poblemas.
- Recomenda-se colocar uma vírgula na última propriedade.

{
    texto: 'Meu texto',
    numero: 16,
    array:['um', 'dois'],
    cooleano: true,
    metodo(): {return 'Olá!'},
}

## JSON

- Apenas aspas duplas podem ser usadas.
- As chaves estão entre aspas.
- Não suporta métodos, apenas propriedades e valores.
- Não podemos colocar uma vírgula no último elemento.

{
    "texto": "Meu texto",
    "numero: 16,
    "array": ["um", "dois"],
    "booleano": true
    JSON não suporta métodos
}

### JSON.parse()

- Converte um texto com formato JSON ao tipo de dado equivalente em JavaScript.

- Recebe --> uma string de texto com formato JSON;
- Devolve --> o mesmo dado que recebeu em formato JavaScript.

{
    let dadosJson = '{"cidade": "São paulo", "bairro": "Morumbi"}';
    let dadosConvertidos = JSON.parse(dadosJson);

    console.log(dadosConvertidos);
    // Será visto no console um objeto literal
    // {cidade: 'São Paulo', bairro: 'Morumbi'}
}

### JSON.stringigy()

- Converte um topo de daod de JavaScript em um texto em formato JSON.

- Recebe um tipo de dado de JavaScript;
- Devolve um string de texto com formato JSON.

{
    let objetoaLiteral = { nome: 'Carla', pais: 'Brasil'};
    let dadosConvertidos = JSON.stringify(objetoLiteral);

    console.log(dadosConvertidos);
    // Será visto no console os dados em um string do tipo JSON
    // '{ "nome": "Carla", "pais": "Brasil"}'
}

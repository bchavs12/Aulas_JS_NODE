# Objetos Literais

- Objetos literais são representações em código de um elemento da vida real.

- Por exemplo, um país poderia ser representado como um Objeto Literal com as seguintes propriedades: nome, número de habitantes, capital, etc.
  Da mesma forma, os objetos em JavaScript podem ter propriedades que definem suas características.

## Estrutura básica

- Um objeto é uma estrutura de dados que pode conter propriedades e métodos.
- Para criá-lo, usamos as chaves de abertura e fechamento {}.

let carro = {
placa: 'ADF1238
};

### Propriedade

- Definimos o nome da propriedade do objeto.
- Neste caso, a propriedade se chama: placa
- Dois pontos: Separa o nome da propriedade de seu valor.
- VALOR: Pode ser qualquer tipo de dado que conhecemos. Neste caso, o valor é: 'ADF1238'

## Propriedades de um objeto

- Um objeto pode ter quantas propriedades quisermos. Se houver mais uma, nós as separamos por vírgulas,.
  Com a notação objeto.propriedade acessamos o valor de cada uma delas.

let tenista = {
nome: 'Roger',
sobrenome: 'Federer'
};

console.log(tenista.nome) // Roger
console.log(tenista.sobrenome) //

## Métodos de um objeto

- Uma propriedade pode armazenar qualquer tipo de dados.
  Se uma propriedade armazena uma função, diremos que é um método do objeto.

let tenista = {
nome: 'Roger',
idade: 38,
ativo:true,
saudacao: function(){
return 'Olá, me chamo Roger';
}
};

## Execução de métodos de um objeto

- Para executar um método de um objeto, usamos a notação objeto.metodo()
  Os parênteses no final, são o que fazem o método executar.

let tenista = {
nome: 'Roger',
idade: 38,
ativo:true,
saudacao: function(){
return 'Olá, me chamo Roger';
    }
};

console.log(tenista.saudacao()); // Olá, me chamo Roger

## Trabalhando dentro de um objeto

- A palavra-chave this se refere ao próprio objeto onde estamos, ou seja, o próprio objeto onde escrevemos a palavra.

- Com a notação this.propriedade acessamos o valor de cada propriedade interna daquele objeto.

let tenista = {
    nome: 'Roger',
    idade: 38,
    ativo:true,
    saudacao: function(){
    return 'Olá, me chamo Roger' + this.nome;}
};

console.log(tenista.saudacao());

# Funções construtoras

- O javaScript nos dá mais uma opção para cria um objeto, por meio do uso de uma função construtora.

- A função construtora nos permite monta um molde, e então criar todos os objetos de que precisamos.

- A função recebe um parâmetro para cada propriedade que queremos atribuir ao objeto.

function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};

## Estrutura de uma função construtora
- function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
};

- Nome: Definimos um nome a função, que será o nome do nosso construtor.

- Por conveção, geralmente nomeamos funções construtoras com a primeira letra maiúscula. Isso é para diferenciá-los das funções normais.

- Parâmetros: Definimos o número de parâmetros que consideramos necessários para criar nosso objeto.

- Todos os parâmetros serão obrigatórios para criar o objeto, a menos que definamos de outra forma.

- Propriedades: Com a notação this.propriedade definimos a propriedade do objeto que estamos criando naquele momento.

- Em geral, os valores das propriedades serão aqueles que vêm por meio dos parâmetros.

## Instanciar um objeto

- A função construtora Carro() espera dois parâmetros: marca e modelo. Para criar um objeto Carrom devemos usar a palavra-chave NEW e chamar a função passando os parâmetros esperados.

let meuCarro = new Carro('Ford', 'Falcon');

- Quando executamos o método NEW para criar um objeto, o que ele retorna é uma instância, ou seja, na variável meuCarro teremos uma instância do objeto Carro armazenada. Usando a mesma função construtora, podemos instanciar quantos carros quisermos.

let outroCarro = new Carro('Chevrolet', 'Corvette');
const lista_clientes = [
    ["Natte Abigael", "F", 1.71],
    ["Connell Ramon", "M", 1.5],
    ["Lafuente Jarret", "F", 1.63],
    ["Ardley Ansel", "F", 1.15],
    ["Shurmer Jacki", "M", 1.89],
    ["Jobi Mawtus", "M", 1.76],
    ["Thomasin Latour", "M", 1.7],
    ["Lonnie Verheijden", "F", 1.94],
    ["Alonso Wannan", "M", 1.6],
    ["Bendite Huggett", "M", 1.96],
    ["Jobi Mawtus", "M", 1.76],
    ["Thomasin Latour", "M", 1.7],
    ["Lonnie Verheijden", "F", 1.94],
    ["Alonso Wannan", "M", 1.5],
    ["Bendite Huggett", "M", 1.96],
]

// A maior e a menor altura do grupo;

function maiorMenor(lista) {
    let maior = menor = lista[0][2]

    for (let i = 1; i < lista.length; i++) {
        if (lista[i][2] > maior) {
            maior = lista[i][2]
        }
        else if (lista[i][2] < menor) {
            menor = lista[i][2]
        };
    };
    return `MaiorAltura: ${maior} \nMenorAltura: ${menor}`
};

console.log(maiorMenor(lista_clientes));

// A média de altura das mulheres;
function mediaAlturaM(lista) {
    let soma = 0;
    let c = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][1] === 'F') {
            soma += lista[i][2]
            c++
        }
    };
    return `Media de altura das mulheres:${soma / c}`
};

console.log(mediaAlturaM(lista_clientes));

// O número de homens na lista.
function numeroHomens(lista) {
    let numeroH = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][1] === 'M') {
            numeroH++
        }
    };
    return `Número de homens: ${numeroH}`
};

console.log(numeroHomens(lista_clientes));

const cliente = {
    listaClientes: [],
    addCliente(lista) {
     this.listaClientes.push(...lista_clientes)   
    }
};
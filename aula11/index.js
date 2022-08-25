// 1) Determine qual seria a maneira ideal de representar cada participante com suas pontuações.
const listaA = [5, 8, 4, 9, 5]; // 31 media 6.2
const listaB = [8, 7, 8, 6, 8]; // 37
const listaC = [7, 5, 10, 8, 3]; // 33

// 2) Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.

/*function pontuacaoMedia(usuario) {
    let soma = 0 ;
    for (let i = 0; i < usuario.length; i++){
        soma += usuario[i];
        media = soma / usuario.length;
    };
    return media;
};
*/


//Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.
function pontuacaoMaxima(lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i + 1] > lista[i]){
            var resultado = lista[i + 1]
        };
    };
    return resultado;
};

console.log(pontuacaoMaxima(listaA));

/*
console.log(pontuacaoMedia(participanteA));
console.log(pontuacaoMedia(participanteB));
console.log(pontuacaoMedia(participanteC));
*/

// Logo nosso líder tecnológico nos pede para criar essas duas funções, geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

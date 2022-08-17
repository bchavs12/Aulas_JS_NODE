// O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura2  (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 

function imc(nome,idade,peso = 0,altura = 0){
    const valorImc = peso/(altura*altura);
    return `${nome} tem ${idade} anos e seu índice de massa corporal é de ${valorImc.toFixed(2)}`; 
  }
  
  const msg = imc("José da Silva",27,83.5,1.7)
  console.log(msg);
  
  const msg2 = imc("Carlos de Souza",28,80.1,1.76)
  console.log(msg2);
  
  const msg3 = imc('Aline Ferreira',33,63.7,1.53);
  console.log(msg3);
  
  const msg4 = imc("Ana Paula",26,55.0,1.62);
  console.log(msg4);

/*

*/

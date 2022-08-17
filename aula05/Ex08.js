/*Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz.
*/

function umNumero(a) {
  console.log(a);
}

umNumero(typeof "Bruno"); //string
umNumero(typeof 3.5); //number
umNumero(typeof false); //boolean
umNumero(typeof [1,2,3,4,5]); //object
umNumero(typeof {name:'Bruno', age:34}); //object
umNumero(typeof new Date()); //object
umNumero(typeof function () { }); //function
umNumero(typeof myCar); //undefined
umNumero(typeof null ); //object

function pairSum(numberIndex){
    let result = 0;
    for(let i = 0; i <= numberIndex; i++){
      if(i % 2 === 0){
        result += i;
      }
    }
    return result;
}
console.log(pairSum(10));
//#1 getRandomInt
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));

//#2 greatRandomInt
function greet(msg, name){
  return msg + ', ' + name;
}
console.log(greet('Hi', 'John'));

//#3 sumBigIntegers
function sumBigIntegers(numStr1, numStr2){
  return BigInt(numStr1) + BigInt(numStr2);
}
console.log(sumBigIntegers('9007199254740991', '9007199254740991'));


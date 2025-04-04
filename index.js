//#1 getRandomInt
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));

//#2 greatRandomInt
function greet(msg, name){
  msg = 'Hi';
  name = 'John';
  return msg + ', ' + name;
}
console.log(greet());

//#3 sumBigIntegers
function sumBigIntegers(numStr1, numStr2){
  numStr1 = BigInt('9007199254740991');
  numStr2 = BigInt('9007199254740991');
  return numStr1 + numStr2;
}
console.log(numStr1 + numStr2);


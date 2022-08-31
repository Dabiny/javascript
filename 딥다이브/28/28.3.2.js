console.log(Number.isInteger(0)); //true
console.log(Number.isInteger(123)); //true
console.log(Number.isInteger(-123)); // true

console.log(Number.isInteger(0.5)); //false
console.log(Number.isInteger('123')); //fasle
console.log(Number.isInteger(false)); // false

console.log(Number.isInteger(Infinity)); //false
console.log(Number.isInteger(-Infinity)); //false
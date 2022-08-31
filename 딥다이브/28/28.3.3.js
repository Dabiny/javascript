console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN('3')); // false
console.log(Number.isNaN(NaN)); // true


console.log(isNaN('3')); // false
// isNaN 빌트인은 인수를 숫자로 암묵적타입변환한다. undefined는 NaN으로 암묵적타입 변환된다. 
console.log(isNaN(undefined)); // true

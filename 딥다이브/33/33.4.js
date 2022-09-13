const obj = {
    [Symbol.for('mySymbol')]: 1,
    name : 'lee'
};

console.log(obj[Symbol.for('mySymbol')]); // 1

for (const key in obj) {
    console.log(key); // name만 출력됨
}

console.log(Object.keys(obj)); // [ 'name' ]
console.log(Object.getOwnPropertyNames(obj)); // [ 'name' ]

console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol(mySymbol) ]

// getOwnPropertySymbols 메서드로 심벌 값도 찾을 수 있다. 
const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey1]); // 1
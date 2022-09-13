const mySymbol = Symbol('hi');
console.log(typeof mySymbol); // symbol

// 심볼 값은 외부로 노출되지 않아 확인할 수 없다. 
console.log(mySymbol); //Symbol(hi)

const mySymbol1 = Symbol('1');
const mySymbol2 = Symbol('1');
console.log(mySymbol1 === mySymbol2); // false

console.log(mySymbol1.description); // 1
console.log(mySymbol1.toString()); //Symbol(1)

const mySymbol3 = Symbol();

//console.log(mySymbol3 + ''); //TypeError: Cannot convert a Symbol value to a string
//console.log(+mySymbol3); //TypeError: Cannot convert a Symbol value to a string

// 불리언 타입으로는 암묵적으로 타입 변환된다.
console.log(!!mySymbol3); // true

if (mySymbol3) console.log('my Simbol is not empty');

// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌값이 없으면 새로운 심벌값을 생성
const s1 = Symbol.for('mySymbol');

// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌값이 있으면 해당 심벌값을 반환
const s2 = Symbol.for('mySymbol');

console.log(s1 === s2); // true

console.log(Symbol.keyFor(s1)); // mySymbol

// Symbol함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않음.
const s3 = Symbol('foo');
console.log(Symbol.keyFor(s3)); // undefined
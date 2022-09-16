console.log(...[1, 2, 3]); // ...[1, 2, 3] -> 개별요소로 분리 1, 2, 3

console.log(...'hello'); // h e l l o

console.log(...new Map([['a', '1'], ['b', '2']])); 
console.log(...new Set([1, 2, 3]));

// TypError 이터러블이 아닌 일반 객체는 스프레드 x
console.log(...{a: 1, b: 2});

// 스프레드 문법의 결과는 값이 아니다. 
//const list = ...[1, 2, 3]; // SyntaxError
const str = 'Hello world';

console.log(str.includes('H')); // true
console.log(str.includes('w')); // true
// 정규 표현식은 타입에러가 뜬ㄷ다. 

// 문자열 str의 인덱스 3부터 'w'가 포함되어있는지?
console.log(str.includes('w', 3)); // true
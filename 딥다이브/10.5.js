// // 예제 10-12
// var person = {
//     name: 'Lee'
// };
// //마침표 표기법 프로퍼티 접근
// console.log(person.name); 

// // 대괄호 표기법 프로퍼티 접근 (꼭 프로퍼티를 ''로 감싸자)
// console.log(person['name']);


// // 예제 10-13
// var person = {
//     name: 'Lee'
// };
// console.log(person[name]); //ReferenceError: name is not defined

// // 예제 10-14
// var person = {
//     name: 'Lee'
// };
// console.group(person.age); // age는 프로퍼티값이 아니기 떄문에 undefined

// // 예제 10-15
// var person = {
//     'last-name': 'Lee',
//     1: 10
// };

// person.'last-name'; // SyntaxError: Unexpected string
// person.last-name; // 브라우저 환경: NaN
//                     // Node.js환경: ReferenceError: name is not defined
// person[last-name]; // ReferenceError: last is not defined
// person['last-name']; // Lee

// // 프로퍼티가 숫자인 경우
// person.1; // SyntaxError: Unexpected number
// person.'1'; // SyntaxError: Unexpected string
// person[1]; // 10
// person['1']; // 10

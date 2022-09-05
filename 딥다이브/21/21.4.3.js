// var x = 10;
// function foo () {
//     y = 20; // window.y = 20;
// }
// foo();

// // 선언되지 않은 식별자 y를 전역에서 참조할 수 있다. 
// console.log(x + y); //30

// 21-38
console.log(x); // undefined
console.log(y); //ReferenceError: y is not defined

var x = 10;

function foo() {
    y = 20;
}
foo();

console.log(x + y);
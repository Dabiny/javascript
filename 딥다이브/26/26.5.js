// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(1)); // 1 + undefined = NaN

// function sum(x, y) {
//     // 인수가 전달되지 않아 매개변수 값이 undefined인 경우 기본값을 할당한다. 
//     x = x || 0;
//     y = y || 0;

//     return x + y;
// }

// console.log(sum(1));  // 1

function sum(x = 0, y = 0){
    return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // 1


function logName(name = 'Lee') {
    console.log(name);
}


logName(); // Lee
logName(undefined); // Lee
logName(null); // null undefined만 인자기본값이 적용된다. 

// function foo(...rest = []){
//     console.log(rest);
// } //SyntaxError: Rest parameter may not have a default initializer


function sum (x, y = 0) {
    console.log(arguments);
}

console.log(sum.length); // 1
sum(1); // [Arguments] { '0': 1 } 1만 들어옴 y는 들어오지 않았다.
sum(1, 3); // [Arguments] { '0': 1, '1': 3 }
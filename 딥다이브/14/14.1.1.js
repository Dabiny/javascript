
// function foo() {
//     var x = 'local';
//     console.log(x); // local
//     return x;
// }

// foo(); 
// console.log(x); // 레퍼런스 에러 !! x is not defined

var x = 'global';
function foo() {
    console.log(x); 
    var x = 'local';
}

foo(); // 'local'(x) undefined 
console.log(x); // 'global'
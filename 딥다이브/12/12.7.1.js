//익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

//기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());
//foo(); // reference error

// ()로 감싸지 않으면 에러
// function () {

// }();

//중괄호 뒤에 암묵적으로 세미콜론이 붙게 된다.  
// function foo() {

// };();

console.log(typeof(function f(){}));
console.log(typeof(function(){}));


// 즉시 실행함수도 반환 가능
var res = (function (){
    var a = 3;
    var b = 5;
    return a * b;
}());
console.log(res); // 15

// 즉시 실행 함수에도 일반 함수 처럼 인수를 전달할 수도 있다. 
res = (function (a, b){
    return a * b;
}(3, 5));

console.log(res); // 15
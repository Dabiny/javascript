// //1. basic recursive funtion
// function recursive(num){
//     if(num == 0)
//         return 0;
//     return num + recursive(num - 1);
// }
// console.log(recursive(3));

// //2. factorial funtion
// function factorial(x){
//     if (x == 0)
//         return 1;
//     return x * factorial(x - 1);
// } //3 + (2 + (1 + 0))

// const num = 10;
// let result = factorial(num);
// console.log(`the factorial of ${num} is ${result}`); 

/* -------------------------------------------------------------------*/

// //1. call back func
// function callback_func(){
//     console.log("i'm callback");
// }

// //2. higher-order func
// function higher_order_func(callback) //call1
// {
//     console.log("i'm higher-order func");
//     callback(); //call2
// }

// higher_order_func(callback_func);


// function add(x, y){
//     return x + y;
// }
// function sub(x, y){
//     return x - y;
// }
// function mul(x, y){
//     return x * y;
// }
// function div(x, y){
//     return x / y;
// }
// function calculater(callback, x, y){ 
//     return callback(x, y);
// }

// console.log(calculater(add, 7, 3));
// console.log(calculater(sub, 7, 3));
// console.log(calculater(mul, 7, 3));
// console.log(calculater(div, 7, 3));



// call by value
// let a = 1;
// let add = function(b) { b = b + 1; };
// add(a);
// console.log(a); 

// // call by reference
// var _a = { v : 1 };
// var _add = function(c) { c.v = c.v + 1; }; 
// _add(_a);
// console.log(_a.v);

//연습문제
// function MAX(x, y){
//     if (x > y)
//         return x;
//     if (x < y)
//         return y;
// }

// console.log(MAX(0, 3));
// console.log(MAX(-1, 5));
// console.log(MAX(100, 7));

// //함수 선언식
// function add_1(x, y){
//     return x + y;
// }

// //함수 표현식
// const add_2 = function (x, y) { return x + y };
 
// //화살표 함수 표현식 위에 두 표현식과 달리 함수생성하는 방식이 다름.
// const add_3 = (x, y) => x + y;

// const add_4 = add_1; //주소값이 저장되어있고 주소를 복사하는 개념

// console.log(add_4(1, 3));
// console.log(add_1 == add_2 ); //서로의 주소영역이 다르니까 false가 나온다.
// console.log(add_1 == add_4 ); //add_1과 4는 주소를 복사해서 주소영역이 같아 true가 나옴
// console.log(Object.getOwnPropertyDescriptors(add_1));
// console.log(Object.getOwnPropertyDescriptors(add_2));
// console.log(Object.getOwnPropertyDescriptors(add_3));
// console.log(Object.getOwnPropertyDescriptors(add_4));


//함수 저장 배열의 요소 혹은 객체의 속성에 함수를 정의하여 저장이 가능하다.

// // 

// function hello_func(){
//     console.log("hello");
// }
// function hi_hunc(){
//     console.log("hi");
// }

// let obj = {
//     name: "john",
//     age: 27,
//     func: hello_func,
// };

// console.log()


// this
// let obj = {
//     name: "john",
//     age: 27,
//     hello_func() {
//         console.log("hello" + this.name);
//     },
// };

// let user = { name : "john" };
// let admin = { name : "admin" };

// //hello_func 내 this 값은 런타임에 결정된다.
// function hello_func(){
//     console.log("hello " + this.name);
// }

// user.func = hello_func; //user.func을 수행할 때, this == user.name으로 결정됨.
// admin.func = hello_func; // 마찬가지임

// user.func();
// admin.func();

// user["func"]();
// admin["func"]();

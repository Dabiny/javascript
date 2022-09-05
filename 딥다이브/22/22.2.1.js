// function foo() {
//     console.log("foo's this: ", this); // window

//     function bar() {
//         console.log("bar's this: ", this); // window
//     }

//     bar();
// }
// foo();


// // var 키워드로 선언한 전역변수 value는 전역 객체의 프로퍼티다. 
// var value = 1;

// // const 키워드로 선언한 전역변수 value는 전역객체의 프로퍼티가 아니다. 
// // const value = 1;

// const obj = {
//     value: 100,
//     foo() {
//         console.log("foo's this: ", this); // {value: 100, foo: f}
//         console.log("foo's this.value: ", this.value); // 100
        
//         // 메서드 내에서 정의한 중첩 함수
//         function bar() {
//             console.log("bar's this: ", this) // window
//             console.log("bar's this.value: ", this.value); // 1 
//         }

//         // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는
//         // 전역 객체가 바인딩된다.
//         bar();
//     }
// };

// obj.foo();

// 22-10
// var value = 1;

// const obj = {
//     value: 100,
//     foo() {
//         console.log("foo's this: ", this); //{ value: 100, foo: [Function: foo] }

//         // callback 함수 내부의 this에는 전역 객체가 바인딩된다. 
//         setTimeout(function() {
//             console.log("callback's this: ", this); //window
//             console.log("callback's this.value: ", this.value); // 1 / undefined
//         }, 100);
//     }
// };

// obj.foo();

// 22-11
// var value = 1;

// const obj = {
//     value: 100,
//     foo() {
//         // this 바인딩(obj)을 변수 that에 할당한다. 
//         const that = this;

//         setTimeout(function() {
//             console.log(that.value); 
//         }, 1000); // 100
//     }
// };

// obj.foo();

// 22-12
// var value = 1;

// const obj = {
//     value: 100,
//     foo() {
//         setTimeout(function() {
//             console.log(this.value);  
//         }.bind(this), 1000); // 100
//     }
// };

// obj.foo();

// 22-13
var value = 1;

const obj = {
    value: 100,
    foo() { 
        // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다. 
        setTimeout(() => console.log(this.value), 100); // 100
    }
};

obj.foo();
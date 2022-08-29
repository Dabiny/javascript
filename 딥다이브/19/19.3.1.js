const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1 obj = { x: 1 };


// 19-07
const person = { name: 'lee' };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__')); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다. 
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
/*
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}*/

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다. 
console.log({}.__proto__ === Object.prototype); //true

//19-08
// const par = {};
// const chi = {};

// //child의 프로토타입을 parent로 설정
// chi.__proto__ = par; 

// //parent의 프로토타입을 chid로 설정
// par.__proto__ = chi;
/*
TypeError: Cyclic __proto__ value
    at Object.set __proto__ [as __proto__] (<anonymous>)
    at Object.<anonymous> 
*/

//19-10
const obj2 = {};
const p = { x: 1 };

console.log("");
// obj2객체의 프로토타입을 취득하기
console.log(Object.getPrototypeOf(obj2));
// [Object: null prototype] {}

// obj2 객체의 프로토타입을 교체하기 
console.log(Object.setPrototypeOf(obj2, p)); //{};

console.log(obj2.x); //1이 나온다.


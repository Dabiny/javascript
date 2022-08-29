// obj 객체를 생성한 생성자 함수는 Object이다.
const obj = new Object();
console.log(obj.constructor === Object); //true

// add함수 객체를 생성한 생성자함수는 Function
const add = new Function('a', 'b', 'return a + b');
console.log(add.constructor === Function);

// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('lee');
console.log(me.constructor === Person); // true


// 19-16

// 객체 리터럴
// obj2 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj2 = {};
// 하지만 obj2 객체의 생성자 함수는 Object 생성자 함수다. 
console.log(obj2.constructor === Object); // true

// 함수 리터럴
const add2 = function (a, b) { return a + b };

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/ig;


// 예제 19-18

// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상연산 OrdinartObjectCreate를 호출하여 빈 객체 생성.
let obj3 = new Object();
console.log(obj3);

// 1. new.target이 undefined나 Object가 아닌경우
// 인스턴스 ->  Foo.prototype -> Object.prototype 순으로 체인생성
class Foo extends Object {}
new Foo();

// 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
obj3 = new Object(123);
console.log(obj3); //[Number: 123]

// String 생성
obj3 = new Object('123');
console.log(obj3); // [String: '123']
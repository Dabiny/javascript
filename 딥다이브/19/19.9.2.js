// // 19-43
// function Person(name) {
//     this.name = name;
// }

// const me = new Person('Lee');

// const parent = {
//     sayHello() {
//         console.log(`Hi! my name is ${this.name}`);
//     }
// };

// // me 객체의 프로토타입을 parent 객체로 교체한다. 
// Object.setPrototypeOf(me, parent);
// // me.__proto__ = parent;

// me.sayHello(); // Hi! my name is Lee


// 19-45
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

const parent = {
    // constructor 프로퍼티와 생성자 함수간의 연결을 설정한다.
    constructor: Person,
    sayHello() {
        console.log(`Hi! my name is ${this.name}`);
    }
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent;

// me 객체의 프로토타입을 parent 객체로 교체한다. 
Object.setPrototypeOf(me, parent);
// == me.__ptoto__ = parent;

console.log(me.constructor === Person); // true
console.log(me.constructor === Object); // false

// 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다. 
console.log(Person.prototype === Object.getPrototypeOf(me)); // true
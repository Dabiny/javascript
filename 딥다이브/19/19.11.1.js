/*
    지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체를 생성하여 반환한다. 
    @param {Object} prototype - 생성할 객체의 프로토타입으로 지정할 객체
    @param {Object} [propertiesObject] - 생성할 객체의 프로퍼티를 갖는 객체 
    @returns {Object} 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체

*/
//Object.create(prototype[, propertiesObject]);

// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다. 
// obj -> null
let obj = Object.create(null);

// Object.prototype을 상속받지 못한다.
console.log(obj.toString()); // TypeError

// obj -> Object.prototype -> null
// obj = {}; 과 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj -> Object.prototype -> null
// obj = { x: 1 }; 과 동일하다.

obj = Object.create(Object.prototype, {
    x: {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj -> myProto -> Object.prototype -> null

obj = Object.create(myProto);
console.log(obj.x); // 10;
console.log(Object.getPrototypeOf(obj) === myProto); //true

// 생성자 함수
function Person(name) {
    this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
obj = Object.create(Person.prototype);
obj.name = 'Lee';

console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); //true

// 19-53
obj = Object.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null); // true
console.log(obj.hasOwnProperty('a')); // TypeError

// 19-54
obj = Object.create(null);
obj.a = 1;

console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // true
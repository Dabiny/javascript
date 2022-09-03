function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

console.log(me instanceof Person); //true
console.log(me instanceof Object); //true

// 19-47
const parent = {};

Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결되어 있지 않다. 
console.log(Person.prototype === parent); // false
console.log(parent.constructor === Person); // false

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기땜에 flase
console.log(me instanceof Person); // false

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object);

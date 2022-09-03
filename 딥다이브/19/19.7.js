function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log('hello');
}

const me = new Person('Lee');
// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty('name')); // true
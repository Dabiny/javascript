function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log('hello');
}

const me = new Person('Lee');
const you = new Person('Kim');
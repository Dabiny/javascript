const person = new Object();

person.name = 'kim';
person.age = 20;
person.sayHello = function () {
    return `hi my name is ${this.name}`;
};

console.log(person); //{ name: 'kim', age: 20, sayHello: [Function (anonymous)] }
console.log(person.sayHello()); //hi my name is kim
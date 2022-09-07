// function Person(name, age) {
//     this.name = name; //public
//     let _age = age; //private

//     this.sayHi = function () {
//         console.log(`Hi my name is ${this.name}. I am ${_age}.`);
//     };
// }

// const me = new Person("Kim", 29);
// me.sayHi(); //Hi my name is Kim. I am 29.
// console.log(me.name); //Kim
// console.log(me._age); //undefined

const Person = (function() {
    let _age = 0;

    function Person(name, age){
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = function() {
        console.log(`Hi my name is ${this.name}. I am ${_age}`);
    };

    return Person;
}());

const me = new Person('Lee', 20);
me.sayHi(); //Hi my name is Lee. I am 20

console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person('Kim', 29); 
you.sayHi(); // Hi my name is Kim. I am 29

console.log(you.name); // Kim
console.log(you._age); // undefined

me.sayHi(); // Hi my name is Lee. I am 29
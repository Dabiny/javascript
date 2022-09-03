// const Person = (function () {
//     function Person(name) {
//         this.name = name;
//     }

//     // 1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
//     Person.prototype = {
//         sayHello() {
//             console.log(`hi my name is ${this.name}`);
//         }
//     };
    
//     return Person;
// }());

// const me = new Person('Lee');

// console.log(me.constructor === Person); // false
// console.log(me.constructor === Object); // true


// 19-42
const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를통해 프로토타입을 교체
    Person.prototype = {
        // constructor 프로퍼티와 생성자 함수간의 연결을 설정
        constructor: Person,
        sayHello() {
            console.log(`hi my name is ${this.name}`);
        }
    };
    
    return Person;
}());



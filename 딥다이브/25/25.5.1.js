// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const me = new Person('Lee');


// class Person {
//     constructor(name) {
//         this.name = name;
        
//         // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시됨.
//         return {};
//     }

// }

// const me = new Person('Lee');


class Person {
    constructor(name) {
        this.name = name;
        
        // 명시적으로 원시값 반환시 무시되고 암묵적으로 this가 반환됨.
        return 100;
    }

}

const me = new Person('Lee');
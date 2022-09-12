// class Person {
//     name = 'Lee'; // 클래스 필드도 기본적으로 public이다. 
// }

// const me = new Person();
// console.log(me.name);


// class Person {
//     #name = '';

//     constructor(name) {
//         this.#name = name;
//     }
// }

// const me = new Person('Lee');

// // private 필드 #name은 클래스 외부에서 참조할 수 없다. 
// console.log(me.#name);
// //SyntaxError: Private field '#name' must be declared in an enclosing class

class Person {
    // private 필드 정의
    //#name = '';

    constructor(name) { // private 필드는 클래스 몸체에서 정의해야한다.
        this.#name = name;
    } // SyntaxError: Private field '#name' must be declared in an enclosing class

    // 접근자 프로퍼티 name
    get name() {
        // pricate 필드를 참조하여 trim한 다음 반환한다.
        return this.#name.trim();
    }
}

const me = new Person(' lee ');
console.log(me.name); // lee
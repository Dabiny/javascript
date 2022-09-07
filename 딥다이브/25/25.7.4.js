// class Person {
//     name = 'Lee'; // 클래스 필드도 기본적으로 public이다. 
// }

// const me = new Person();
// console.log(me.name);


class Person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }
}

const me = new Person('Lee');

// private 필드 #name은 클래스 외부에서 참조할 수 없다. 
console.log(me.#name);
//SyntaxError: Private field '#name' must be declared in an enclosing class
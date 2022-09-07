// // 클래스 선언문
// class Person {}


// // 익명 클래스 표현식
// const Person = class {};

// // 기명 클래스 표현식
// const Person = class MyClass {};

class Person {
    constructor(name){
        this.name = name; //name은 public
    }

    // 프로토타입 메서드
    sayHi() {
        console.log(`Hi My name is ${this.name}`);
    }

    // 정적 메서드
    static sayHello() {
        console.log('Hello');
    }
}

// 인스턴스 생성
const me = new Person('lee');

console.log(me.name); // lee

me.sayHi(); // Hi My name is lee

Person.sayHello(); // Hello

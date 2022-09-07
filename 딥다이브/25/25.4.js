// class Person {}

// const me = new Person();
// console.log(me); // Person {}

const Person = class MyClass {};

// 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다. 
const me = new Person();

console.log(MyClass); //ReferenceError: MyClass is not defined

const you = new MyClass(); //ReferenceError: MyClass is not defined
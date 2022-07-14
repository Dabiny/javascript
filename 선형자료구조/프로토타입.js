// /* 프로토타입 (prototype)
//  - 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형이다.
//  - 자바스크립트는 일반적인 객체지향 언어와는 다르게, 프로토타입을 이용한 복사(cloning)을 통해서 새로운 객체를 생성한다.
//  - 일반적인 객체 생성 방식: 속성은 생성자, 메서드는 프로토타입에서 정의.
//  */

// //생성자 속성 정의
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// //prototype을 이용한 Person 메서드 정의
// Person.prototype.isAdult = function(){
//     return this.age > 18;
// };

// //객체 생성
// const p1 = new Person("bob", 26);
// const p2 = new Person("Ann", 17);

// //객체 메서드 호출
// console.log(p1.isAdult());
// console.log(p2.isAdult());
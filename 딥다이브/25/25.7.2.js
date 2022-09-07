// const person = {
//     firstName: 'Ungmo',
//     lastName: 'lee',

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     set fullName(name) {
//         // 배열 디스트럭처링 할당 36.1 참고
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// };

// // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
// console.log(`${person.firstName} ${person.lastName}`); //Ungmo lee

// // 접근자 프로퍼티를 통한 프로퍼티 값의 저장.
// // 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다. 
// person.fullName = 'Dabin Kim';
// console.log(person); // { firstName: 'Dabin', lastName: 'Kim', fullName: [Getter/Setter] }

// // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// // 접근자 프로퍼티 fullName에 접근하면 getter함수가 호출된다. 
// console.log(person.fullName); //Dabin Kim

// // fullName은 접근자 프로퍼티다. 
// // 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다. 
// console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
// /*
// {
//   get: [Function: get fullName],
//   set: [Function: set fullName],
//   enumerable: true,
//   configurable: true
// }
// */


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다. 
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('Ungmo', 'Lee');

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${me.firstName} ${me.lastName}`); // Ungmo Lee


// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출됨.
me.fullName = 'Dabin Kim';


// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter함수가 호출된다. 
console.log(me.fullName); // Dabin Kim

// fullName은 접근자 프로퍼티다. 
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다. 
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));

/*
{
  get: [Function: get fullName],
  set: [Function: set fullName],
  enumerable: false, <- 객체 리터럴과 다른점
  configurable: true
}
*/

console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(me)));
const person = {
    firstName: 'ungmo',
    lastName: 'Lee',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName + ' ' + person.lastName); //ungmo Lee

person.fullName = 'dabin kim';
console.log(person); 
//{ firstName: 'dabin', lastName: 'kim', fullName: [Getter/Setter] }
console.log(person.fullName); //dabin kim

// fullName()이렇게 함수형태로하면 오류난다. 

//일반 객체의 __proto__는 접근자 프로퍼티다. 
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
/*
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}
*/

// 함수 객체의 prototype은 데이터 프로포티다. 
console.log(Object.getOwnPropertyDescriptor(function(){}, 'prototype'));
// { value: {}, writable: true, enumerable: false, configurable: false }

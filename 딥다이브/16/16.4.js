const person = {};

Object.defineProperty(person, 'firstName', {
    value: 'dabin',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Kim'
});

let descriper = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriper);
/* 
firstName {
  value: 'dabin',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다. 
descriper = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriper);
/*
lastName {
  value: 'Kim',
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// [[enumerable]]의 값이 false인 경우 for...in문이나 Object.keys 등으로 열거할 수 없다.
console.log(Object.keys(person)); // [ 'firstName' ]

// [[Writable]]값이 false인 경우 해당 프로퍼티의 값을 변경할 수 없다. 
person.lastName = 'Kiki';
console.log(person.lastName); // Kim

// [[Configurable]]값이 false인 경우 해당 프로퍼티를 삭제할 수 없다. 
// 이때 프로퍼티를 삭제히면 에러는 발생하지않고 무시된다. 
delete person.lastName;
console.log(person.lastName); // Kim

// [[Configurable]]값이 false인 경우 해당 프로퍼티를 재정의할 수 없다. 
//Object.defineProperty(person, 'lastName', { enumerable: true });
//console.log('lastName', descriper); // TypeError: Cannot redefine property: lastName


// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {

    // getter
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set(_name) {
        [this.firstName, this.lastName] = _name.split(' ');
    },

    enumerable: true,
    configurable: true
});

descriper = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriper);
/*
fullName {
  get: [Function: get],
  set: [Function: set],
  enumerable: true,
  configurable: true
}
*/

person.fullName = 'Kiki dabiny';
console.log(person); // { firstName: 'Kiki', fullName: [Getter/Setter] }


Object.defineProperties(person, {

    //데이터 프로퍼티 정의
    firstName: {
        value: 'dabiny',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'kiki',
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(_name) {
            [this.firstName, this.lastName] = _name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = 'dabin kim';
console.log(person);
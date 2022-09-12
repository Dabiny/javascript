// class Prefixer {
//     constructor(perfix) {
//         this.perfix = prefix;
//     }

//     add(arr) {
//         // (1) 
//         return arr.map(function (item) {
//             return this.perfix + item; // (2)
//             // typeError this를 못읽음.
//         });
//     }
// }

// const perfixer = new Prefixer('-webkit-');
// console.log(perfixer.ad['transition', 'user-select']);

class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const prefixer = new Prefixer('-dabin-');
console.log(prefixer.add(['transition', 'user-select']));
// [ '-dabin-transition', '-dabin-user-select' ]


// // 화살표 함수는 상위 스코프의 this를 참조한다. 
// () => this.x;

// // 익명 함수에 상위 스코프의 this를 주입한다. 위 화살표 함수와 동일하게 동작한다. 
// (function() { return this.x; }).bind(this);


// 중첩함수 foo의 상위 스코프는 즉시 실행함수이다. 
// 따라서 화살표 함수 foo의 this는 상위 스코프인 즉시 실행 함수의 this를 가리킨다. 
(function() {
    const foo = () => console.log(this);
    foo();
}).call({ a: 1 }); // { a: 1 } 

// bar 함수는 화살표함수를 반환한다. 
// bar 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar다. 
// 하지만 화살표 함수는 함수 자체의 this 바인딩을 갖지 않으므로 bar 함수가 반환한
// 화살표 함수 내부에서 참조하는 this는 화살표함수가 아닌 즉시 실행함수의 this를 가리킨다. 
(function () {
    const bar = () => () => console.log(this);
    bar()();
}).call({a: 1}); // { a: 1 }


// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역이다. 
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킨다. 
const counter = {
    num: 1, 
    increase: () => ++this.num
};

console.log(counter.increase()); // NaN


// window.x = 1;

// const normal = function() {
//     return this.x;
// }

// const arrow = () => this.x;

// console.log(normal.call({ x: 10 })); // 10
// console.log(arrow.call({ x: 10 })); // 1


const add = (a, b) => a + b;

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
console.log(add.bind(null, 1, 2)()); // 3


// // bad
// const person = {
//     name: 'lee',
//     sayHi: () => console.log(`Hi ${this.name}`)
// }

// // sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는
// // 전역객체를 가리키므로 이 예제를 브라우저에서 실해앟면 this.name == 빈 문자열 window.name과 같다. 
// // 전역 객체 window에는 빌트인 프로퍼티 name이 존재한다. 
// person.sayHi(); // Hi undefined

// good
const person = {
    name: 'lee',
    sayHi () {
        console.log(`Hi ${this.name}`);
    }
};

person.sayHi(); // Hi lee

// bad
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);
// const per = new Person('lee')
// per.sayHi(); // Hi undefined

// // good
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHi = function (){
//     console.log(`Hi ${this.name}`);
// };
// const per = new Person('lee')
// per.sayHi(); // Hi lee

// good
// function Person(name) {
//     this.name = name;
// }

// Person.prototype = {
//     constructor : Person,
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     }
// };
// const per = new Person('lee')
// per.sayHi(); // Hi lee


// bad
// class Person {
//    name = 'Lee';
//    sayHi = () => console.log(`Hi ${this.name}`); 
// }

// const per = new Person();
// per.sayHi();

// class Person {
//     constructor() {
//         this.name = 'lee';
//         // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다. 
//         // 따라서 sayHi 프로퍼티는 인스턴스 프로퍼티다. 
//         this.sayHi = () => console.log(`Hi ${this.name}`);
//     }
// }

// good
class Person {
    name = 'lee';
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

const per = new Person();
person.sayHi(); // Hi Lee
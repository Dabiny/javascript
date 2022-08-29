// 함수객체는 protoype을 소유
console.log((function() {}).hasOwnProperty('prototype')); //true

// 일반객체는 prototype을 소유하지 않음.
console.log(({}).hasOwnProperty('prototype')); //false

//19-12
const person = name => { //화살표 함수
    this.name = name;
};

console.log(person.hasOwnProperty('prototype')); //false
console.log(person.prototype); //undefined

const obj = {
    foo() {} //메서드
};

console.log(obj.foo.hasOwnProperty('prototype')); //false
console.log(obj.foo.prototype);// undefined

//19-13
function Person(name) { //생성자 함수
    this.name = name;
}

const me = new Person('Kim');

// 결국 Person.prototype과 me.__proto__는 동일한 프로토타입을 가리킨다. 
console.log(Person.prototype === me.__proto__); //true



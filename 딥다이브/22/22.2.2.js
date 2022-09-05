const person = {
    name: 'lee',
    getName() {
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다. 
        return this.name;
    }
};
// 메서드 getName을 호출한 객체는 person이다. 
console.log(person.getName()); //lee


// 22-15
const anotherPerosn = {
    name: 'Kim'
};

anotherPerosn.getName = person.getName;

console.log(anotherPerosn.getName()); // Kim

const getName = person.getName;
console.log(getName()); // undefined
// 일반 함수로 호출된 getName 함수 내부의 this.name은 window.name과 같다. 

// 22-16
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('Lee');

// getName 메서드를 호출한 객체는 me이다. 
console.log(me.getName()); // Lee

Person.prototype.name = 'Kim';
// getName 메서드를 호출한 객체는 Person.prototype이다 
console.log(Person.prototype.getName()); // Kim
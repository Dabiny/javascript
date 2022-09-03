function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`hi my name is ${this.name}`);
};

Person.staticProp = 'static prop';

Person.staticMethod = function () {
    console.log('staticMthod');
};

const me = new Person('lee');

// 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다.
Person.staticMethod(); // 'staticMthod'

// 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다. 
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인상에 존재해야 한다. 
me.staticMethod(); // TypeError: me.staticMetod is not a function


// 19-57
// Object.create는 정적 메서드다. 
const obj = Object.create({
    name: 'Lee',
});
// Ojbect.prototpye.hasOwnproperty는 프로토타입 메서드다. 
obj.hasOwnProperty('name'); // false



// 19-58
function Foo () {}

// 프로토타입 메서드
// this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있음.
Foo.prototype.x = function () {
    console.log('x');
}

const foo = new Foo();
// 프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다.
foo.x(); // x

// 정적 메서드 
Foo.x = function () {
    console.log('x');
}

//정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.
Foo.x();

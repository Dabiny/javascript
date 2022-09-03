const Person = (function () {
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHello = function () {
        console.log(`hi my name is ${this.name}`);
    };

    return Person;
}());

const me = new Person('lee');
me.sayHello = function () {
    console.log(`hey! my name is ${this.name}`);
};

// 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다. 
me.sayHello(); //hey! my name is lee

delete Person.prototype.sayHello;
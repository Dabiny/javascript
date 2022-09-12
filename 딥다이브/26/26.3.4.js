class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi ${this.name}`;
    }
}

class Derived extends Base {
    // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다. 
    sayHi = () => `${super.sayHi()} how are u doing?`;
}

const der = new Derived('kim');
console.log(der.sayHi()); // Hi kim how are u doing?
// class Base {
//     constructor(a, b) { // 4.
//         this.a = a;
//         this.b = b;
//     }
// }

// class Derived extends Base {
//     constructor(a, b, c) { // 2
//         super(a, b); // 3
//         this.c = c;
//     }
// }

// const derived = new Derived(1, 2, 3); // 1
// console.log(derived); // Derived { a: 1, b: 2, c: 3 }


// class Base {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         return `Hi ${this.name}`;
//     }
// }

// class Derived extends Base {
//     // sayHi() {
//     //     // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다. 
//     //     return `${super.sayHi()}. how are u doing?`;
//     // }

//     sayHi() {
//         // __super는 Base.prototype을 가리킨다. 
//         const __super = Object.getPrototypeOf(Derived.prototype);
//         return `${__super.sayHi.call(this)} how are u doing?`;
//     }
// }

// const derived = new Derived('lee');
// console.log(derived.sayHi()); // Hi lee. how are u doing?

/*
    [[HomeObject]]는 메서드 자신을 바인딩하고 있는 개체를 가리킨다. 
    [[HomeObject]]를 통해 메서드 자신을 바인딩하고 있는 객체의 프로토타입을 찾을 수 있다.
    예를 들어, Derived 클래스의 sayHi 메서드는 Derived.prototype에 바인딩되어 있다.
    따라서 Derived 클래스의 sayHi 메서드의 [[HomeObject]]는 Derived.prototype이고
    이를 통해 Derived 클래스의 sayHi메서드 내부의 super참조가 Base.prototype으로 결정된다.
    따라서 super.sayHi는 Base.prototype.sayHi를 가리키게된다. 
*/
//super = Object.getPrototypeOf([[HomeObject]]);

const obj = {
    // foo는 ES6의 메서드 축약표현으로 [[HomeObject]]를 갖는다.
    foo () {},

    // 일반함수라서 [[HomeObject]]를 갖지 않는다.
    bar: function() {}
}

const base = {
    name: 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const der = {
    __proto__: base,

    sayHi() {
        return `${super.sayHi()}. how are u doing?`;
    }
};

console.log(der.sayHi()); //Hi! Lee. how are u doing?

class Base {
    static sayHi() {
        return  'Hi!';
    }
}

class Derived extends Base {
    static sayHi() {
        return `${super.sayHi()} What are u doing here?`;
    }
}

console.log(Derived.sayHi()); //Hi! What are u doing here?
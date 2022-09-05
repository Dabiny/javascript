// const circle = {
//     radius: 5,
//     getDiameter() {
//         // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
//         // 자신이 속한 객체인 circle을 참조할 수 있어야한다. 
//         return 2 * circle.radius;
//     }
// };

// console.log(circle.getDiameter()); // 10

// 22-02
// function Circle(radius) {
//     // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다. 
//     ????.radius = radius;
// }

// Circle.prototype.getDiameter = function () {
//     // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다. 
//     return 2 * ????.radius;
// };

// // 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다. 
// const cir = new Circle(5);

// 22-03
// const circle = {
//     radius: 5,
//     getDiameter() {
//         // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
//         // 자신이 속한 객체인 circle을 참조할 수 있어야한다. 
//         // this는 메서드를 호출한 객체를 가리킨다. 
//         return 2 * this.radius;
//     }
// };

// // 메서드를 호출한 객체 circle
// console.log(circle.getDiameter()); // 10

// 22-04
// function Circle(radius) {
    
//     // this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
//     this.radius = radius;
// }

// Circle.prototype.getDiameter = function () {
//     // this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
//     return 2 * this.radius;
// };

// // 인스턴스 생성 
// const cir = new Circle(5);
// console.log(cir.getDiameter()); // 10

// 22-05
// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다. 
console.log(this); //window

function square(number) {
    // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다. 
    console.log(this); // window
    return number * number;
}
square(2);

const person = {
    name: 'lee',
    getName() {
        // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다. 
        console.log(this); // { name: 'lee', getName: [Function: getName] }
        return this.name;
    }
};

console.log(person.getName()); //lee

function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
    console.log(this); // Person { name: 'lee' }
}

const me = new Person('lee'); 
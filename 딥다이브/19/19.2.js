// function Circle(radius) {
//     this.radus = radius;
//     this.getArea = function () {
//         return Math.PI * this.radus ** 2;
//     };
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea); //false

// console.log(circle1.getArea()); //3.14158265...
// console.log(circle2.getArea()); //12.5663370....

// 19-04
function Circle(radius) {
    this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록
// 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함ㅅ의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea == circle2.getArea); // true
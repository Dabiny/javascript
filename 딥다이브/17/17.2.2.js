function Circle(radius) {
    // 1. 암묵적으로 인스턴스 생성 후 this에 바인딩된다. 

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    // 명시적으로 원시값을 반환하면 원시값이 무시되고 this가 반환된다.
    return 100;
}

const circle1 = new Circle(5);
const circle2 = Circle(10);

console.log(circle2); // undefinec

// 일반 함수로서 호출된 circle 내의 this는 전역 객체를 가리킨다. 
console.log(radius); // 10
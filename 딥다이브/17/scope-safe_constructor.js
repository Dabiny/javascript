function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않는다면 이 시점에 this는 전역객체 window를 가리킨다. 
    // 즉, this와 Circle은 프로토타입에 의해 연결되지 않는다. 
    if (!(this instanceof Circle)) {
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}


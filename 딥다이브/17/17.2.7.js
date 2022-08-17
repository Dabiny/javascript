function Circle(radius) {
    if (!new.target){
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const str = String(123);
console.log(str, typeof str); //123 string

const num = Number('123');
console.log(num, typeof num); //123 number

const bool = Boolean('true');
console.log(bool, typeof bool); //true boolean
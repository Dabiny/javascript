// 이름과 주소 속성을 갖는 객체
const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log(person); //{ name: 'Lee', address: 'Seoul' }

const circle = {
    radius: 5, //반지름
    
    getDiameter() { // 원의 지름
        return 2 * this.radius; 
    },

    getPerimeter() { //원의 둘레
        return 2 * Math.PI * this.radius;
    },

    getArea() { //원의 넓이
        return Math.PI * this.radius ** 2;
    }
};

console.log(circle.getDiameter()); //10
console.log(circle.getPerimeter()); // 31.415767...
console.log(circle.getArea()); // 78.53981....
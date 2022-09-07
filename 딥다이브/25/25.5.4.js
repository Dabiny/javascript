// class Square {
//     static area(width, height) {
//         return width * height;
//     }
// }

// console.log(Square.area(10, 10));


class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const square = new Square(10, 10);
console.log(square.area()); // 100
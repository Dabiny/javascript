class Ractangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this); //ColorRactangle { width: 10, height: 10 }
        console.log(new.target); //[class ColorRactangle extends Ractangle]
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `width = ${this.width}, height = ${this.height}`;
    }
}

class ColorRactangle extends Ractangle {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }
    
    // 메서드 오버라이딩
    toString() {
        return super.toString() + `, color = ${this.color}`;
    }
}

const colorRec = new ColorRactangle(10, 10, 'red');
console.log(colorRec); //ColorRactangle { width: 10, height: 10, color: 'red' }

console.log(colorRec.getArea()); //100

// 오버라이딩된 toString메서드를 호출
console.log(colorRec.toString()); // width = 10, height = 10, color = red


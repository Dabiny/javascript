// // Array 생성자 함수를 상속받아 확장한 MyArray
// class MyArray extends Array {

//     uniq() {
//         return this.filter((v, i, arr) => arr.indexOf(v) === i);
//     }

//     average() {
//         return this.reduce((pre, cur) => pre + cur, 0) / this.length;
//     }
// }

// const myArray = new MyArray(1, 1, 2, 3);
// console.log(myArray); // MyArray(4) [ 1, 1, 2, 3 ]

// console.log(myArray.uniq()); // 1, 2, 3
// console.log(myArray.average()); // 1.75


// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
    // 모든 메서드가 Array타입의 인스턴스를 반환하도록 한다. 
    static get [Symbol.species]() { return Array; }

    uniq() {
        return this.filter((v, i, arr) => arr.indexOf(v) === i);
    }

    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);

console.log(myArray.uniq() instanceof MyArray); // false
console.log(myArray.uniq() instanceof Array); //true

// 메서드 체이닝
// uniq메서드는 Array 인스턴스를 반환하므로 average메서드를 호출할 수 없다. 
console.log(myArray.uniq().average());
//TypeError: myArray.uniq(...).average is not a function
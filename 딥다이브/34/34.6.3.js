// // 이터러블이면서 이터레이터인 객체
// // 이터레이터를 반환하는 Symbol.iterator 메서드와 이터레이션 리절트 객체를 반환하는 next 메서드를 송유.
// {
//     [Symbol.iterator]() { return this; },
//     next() {
//         return { value: any, done: boolean };
//     }
// }

const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    
    return {
        [Symbol.iterator]() { return this; },
        next() {
            [pre, cur] = [cur, cur + pre];
            return { value: cur, done: cur >= max };
        }
    };
};

let iter = fibonacciFunc(10);

for (const num of iter) {
    console.log(num); // 1 2 3 5 8
}

// iter는 이터러블이면서 이터레이터다. 
iter = fibonacciFunc(10);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/* 
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 5, done: false }
{ value: 8, done: false }
{ value: 13, done: true }
*/
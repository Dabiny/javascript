const fibonacci = function (max) {
    let[pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return {
                        value: cur,
                        done: cur >= max
                    };
                }
            };
        }
    };
};

for (const num of fibonacci(100)) {
    console.log(num); // 1 2 3 5 8 13 21 34 55 89
}

const iterable = fibonacci(4);

const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 5, done: true }
console.log(iterator.next()); // { value: 8, done: true }

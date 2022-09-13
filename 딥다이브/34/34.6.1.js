const fibonacci = {
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1]; // 36.1 절 참고
        const max = 10;

        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
        // next 메서드는 이터레이터 리절트 객체를 반환해야 한다. 
        return {
            next() {
                [pre, cur] = [cur, pre + cur]; 
                // 리절트 객체
                return { value: cur, done: cur >= max };
            }
        };
    }
};

for (const num of fibonacci) {
    console.log(num); // 1 2 3 5 8
}

// 이터러블은 스프레드 문법의 대상이 될 수 있다. 
const arr = [...fibonacci];
console.log(arr); //[ 1, 2, 3, 5, 8 ]

const [first, second, ...rest] = fibonacci;
console.log(first, second, rest); // 1 2 [ 3, 5, 8 ]
const fibonacciFunc = function () {
    let [pre, cur] = [0, 1];

    
    return {
        [Symbol.iterator]() { return this; },
        next() {
            [pre, cur] = [cur, cur + pre];
            // 무한을 구현해야 하므로 done 프로퍼티 생략
            return { value: cur };
        }
    };
};

for (const num of fibonacciFunc()) {
    if (num > 1000) break;
    console.log(num); // 1 2 3 5 7 ... 987
}

// 배열 디스트럭처링 할당을 통해 무한 이터러블에서 3개만 요소 획득
const [f1, f2, f3] = fibonacciFunc();
console.log(f1, f2, f3); // 1 2 3
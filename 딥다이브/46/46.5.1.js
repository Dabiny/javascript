// 무한 이터러블을 생성하는 함수
const infiniteFibonacci = (function() {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() { return this; },
        next() {
            [pre, cur] = [cur, pre + cur];

            // 무한 이터러블이므로 done 프로퍼티를 생략한다. 
            return { value: cur };
        }
    };
}());

for (let x of infiniteFibonacci) {
    if (x > 10000) break;
    console.log(x);
}

// 무한 이터러블을 생성하는 제너레이터 함수
const infiniteGenFibonacci = (function* () {
    let [pre, cur] = [0, 1];

    while(true) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
}());

for (let x of infiniteGenFibonacci) {
    if (x > 10000) break;
    console.log(x);
}
function solution(lotteries) {
    const arr = [];
    for (let i = 0; i < lotteries.length; i++) {
        let num = (lotteries[i][0] / (lotteries[i][1] + 1)) * 100;
        arr.push([ Number(num.toFixed(4)), lotteries[i][2], i + 1]);
    }
    // arr.sort((a, b) => b[0] - a[0]); // 당첨 확률순
    arr.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        else {
            return b[0] - a[0];
        }
    })
    return arr[0][2];
}

console.log(
    solution(
        [
            [100, 100, 500],
            [1000, 1000, 100],
        ],
    )
);

console.log(
    solution(
        [
            [10, 19, 800],
            [20, 39, 200],
            [100, 199, 500],
        ],
    )
);

console.log(
    solution([
        [50, 1, 50],
        [100, 199, 100],
        [1, 1, 500],
    ])
);
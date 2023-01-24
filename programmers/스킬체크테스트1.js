function solution(n) {
    const str = n.toString().split('');
    const answer = str.reduce((p, c) => p + Number(c), 0);
    return answer;
}
console.log(solution(123));

function solution(arr1, arr2) {
    const arr3 = Array.from({length: arr1.length }, () => Array.from({length: arr1[0].length}, () => 0));
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
            arr3[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return arr3;
}
console.log(
    solution(
        [
            [1, 2],
            [2, 3],
        ],
        [
            [3, 4],
            [5, 6],
        ]
    )
);
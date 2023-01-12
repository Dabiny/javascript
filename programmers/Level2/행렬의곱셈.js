function solution(arr1, arr2) {
    const arr3 = Array.from({length: arr1.length}, () => Array.from({length: arr2[0].length}, () => 0));
    for (let i = 0; i < arr1.length; i++) { // 3
        for (let j = 0; j < arr2[0].length; j++) { // 2
            let ans = 0;
            for (let k = 0; k < arr2.length; k++) { // 2
                ans += arr1[i][k] * arr2[k][j];
            }   
            arr3[i][j] = ans;
        }
    }
    return arr3;
}

console.log(
    solution(
        [
            [1, 4],
            [3, 2],
            [4, 1],
        ],
        [
            [3, 3],
            [3, 3],
        ]
    )
);
// 행렬의 곱셈 개념 파악하기
// https://mathbang.net/562
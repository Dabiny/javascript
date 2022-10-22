function solution(arr1, arr2) {
    var answer = Array.from(Array(arr1.length), () => Array(arr1[0].length));
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            let sum = arr1[i][j] + arr2[i][j];
            answer[i][j] = sum;
        }
    }
    return answer;
}
console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]));
console.log(solution([[1], [2]], [[3], [4]]));
console.log(solution([[1, 2, 3, 4], [4, 5, 6, 7], [1, 2, 3, 3]], [[3, 2, 1, 5], [6, 5, 4, 9], [4, 5, 6, 7]]));




function solution(arr1, arr2) {
    return arr1.map((v, i) => v.map((m, j) => m + arr2[i][j])); // 2차원배열 map으로 돌기 
}
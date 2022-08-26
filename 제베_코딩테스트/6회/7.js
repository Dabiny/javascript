function solution(arr, Num) {
    let count = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
            if (count == Num) {
                return arr[j][i];
            }
        }
    }
}

console.log(solution([[1, 2, 22], [3, 4, 23], [8, 9, 33]], 7));
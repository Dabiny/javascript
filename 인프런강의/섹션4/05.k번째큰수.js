function solution(arr, k) {
    let answer = 0;
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++){
            for (let m = j; m < arr.length; m++) {
                if (i == j || j == m || i == m) continue;
                let sum = arr[i] + arr[j] + arr[m];
                ans.push(sum);
            }
        }
    }

    ans.sort((a, b) => b - a);
    return ans[k - 1];
}

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
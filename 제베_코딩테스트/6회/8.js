function solution(arr) {
    let jew = arr[0][0]; //꼭대기
    for (let i = 1; i < arr.length; i++) {
        let mx = Math.max(...arr[i]);
        jew += mx;
    }
    return parseInt(jew);
}

console.log(solution([[3], [5, 10], [4, 8, 6]]));
console.log(solution([[3], [10, 10], [7, 7, 7]]));
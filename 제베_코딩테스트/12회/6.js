function solution(arr, fee) {
    var answer = 0;
    for (let x of arr) {
        if (x < 5) answer += (fee * x);
        if (x >= 5) {
            let free = parseInt(x / 5)
            answer += (x - free) * fee;
        }
    }
    return answer;
}
console.log(solution([3, 1, 5], 10));
// 1.0 비행기요금문제
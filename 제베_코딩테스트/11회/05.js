// 보석 훔치기 0.8
function solution(A, K) {
    A.sort((a, b) => a - b);
    let sum = 0;
    let answer = 0;
    for (let x of A) {
        if (sum === K) break;
        sum += x;
        answer++;
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5], 15));
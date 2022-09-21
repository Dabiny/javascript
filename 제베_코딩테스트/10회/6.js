function solution(prices) {
    var answer = Number.MAX_SAFE_INTEGER;
    const par = prices[0]; // 구매
    for (let i = 1; i < prices.length; i++) { // 다음년도부터
        let sum = par - prices[i];
        if (sum > 0) answer = Math.min(sum, answer);
    }
    return answer;
}
console.log(solution([100, 10, 3, 4, 5, 6, 1, 2]));
// 0.4
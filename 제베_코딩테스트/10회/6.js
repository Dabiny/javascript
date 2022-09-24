// function solution(prices) {
//     var answer = Number.MAX_SAFE_INTEGER;
//     const par = prices[0]; // 구매
//     for (let i = 1; i < prices.length; i++) { // 다음년도부터
//         let sum = par - prices[i];
//         if (sum > 0) answer = Math.min(sum, answer);
//     }
//     return answer;
// }
// console.log(solution([100, 10, 3, 4, 5, 6, 1, 2]));
// // 0.4


// 정답
/**
 * @param prices {Array}
 */
 function solution(prices) {
    const indexes = {};
    let minLoss = Infinity;

    for (let i = 0; i < prices.length; i++) {
        indexes[prices[i]] = i;
    }
    console.log(indexes);
    const sortedPrices = Object.keys(indexes).sort((a, b) => a - b);
    console.log(sortedPrices);
    
    for (let i = 0; i < sortedPrices.length - 1; i++) {
        if (indexes[sortedPrices[i]] > indexes[sortedPrices[i + 1]]) {
            minLoss = Math.min(minLoss, prices[indexes[sortedPrices[i + 1]]] - prices[indexes[sortedPrices[i]]]);
        }
    }
    return minLoss;
}

console.log(solution([5, 10, 3]));
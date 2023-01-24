function solution(n) {
    var answer = 0;
    let arr = Array.from({length: n + 1}, (_, i) => i);
    for (let i = 1; i <= n; i++) {
        let sum = i;
        for (let j = i + 1; j <= n; j++) {
            if (sum === n) {
                answer++;
                break;
            } else if (sum < n) {
                sum += j;
            } else {
                break;
            }
        }
    }
    return answer + 1;
}

console.log(solution(15));
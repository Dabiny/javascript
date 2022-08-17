function solution(n) {
    let num = 0;
    count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            num += j;
            if (num == n) {
                count++;
            }
            if (num > n) {
                num = 0;
                break;
            }
        }
    }
    return count;
}

console.log (solution(15));
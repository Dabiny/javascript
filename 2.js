function solution(n) {
    let answer,
        max = Number.MIN_SAFE_INTEGER;

    for (let x of n) {
        let sum = 0,
            tmp = x;
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        }
        if (sum === max) {
            if (x > answer) answer = x;
        }
    }
    return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

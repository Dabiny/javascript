function solution(n, a, b) {
    let num = 1;
    let cnt = 0;
    while(true) {
        num = cnt ** 2;
        cnt++;
        if (num === n) break;
    }
    return num;
}

console.log(solution(8, 4, 7));
console.log(solution(12, 4, 7));
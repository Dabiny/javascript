function solution(num) {
    var answer = 0, n = num;
    if (num === 1) return 0;
    while(true) {
        n = n % 2 === 0 ? n / 2 : n * 3 + 1;
        answer++;
        if (n === 1 || answer >= 500) break;
    } 
    return answer >= 500 ? -1 : answer;
}

console.log(solution(6));
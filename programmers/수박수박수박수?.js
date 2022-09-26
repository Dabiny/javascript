function solution(n) {
    var answer = '';
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) answer += '수';
        else answer += '박';
    }
    return answer;
}
console.log(solution(3));

// 다른 예시
function solution(n) {
    const watermelon = n => {
        return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
    };
    return watermelon(n);
}
console.log(solution(3));
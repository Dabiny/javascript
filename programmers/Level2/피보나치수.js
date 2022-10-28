function solution(n) {
    var answer = 0;
    function fibo(n) {
        if (n === 2 || n === 1) {
            return 1;
        }
        else {
            return fibo(n - 1) + fibo(n - 2);
        }
    }
    answer = fibo(n) % 1234567;

    return answer;
} // 시간초과

console.log(solution(5));
console.log(solution(3));

// 변수로만 풀다가 실패
function solution(n) {
    var answer = 0;
    let after = 1;
    answer += after;
    for (let i = 2; i <= n; i++) {
        answer = after + (i - 2);
        answer
    }
    
    return answer;
}

console.log(solution(5));
console.log(solution(3));

// 해답 (다시 풀기)
function solution(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            result.push(0)
        }
        if (i == 1) {
            result.push(1)
        }
        if (i >= 2) {
            let sum = result[i - 2] + result[i - 1];
            result.push(sum % 1234567);
        }
    }
    
    let answer = result[n] % 1234567;
    return answer;
} 

// 재귀를 쓰지않고 배열로 푸는 법. 모든 수열을 배열에 넣고 n번째 수열을 고르면된다. 
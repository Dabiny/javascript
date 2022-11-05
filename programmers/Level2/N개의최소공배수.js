function calc(num1, num2) {
    const gcd = (a, b) => {
        return a % b === 0 ? b : gcd(b, a % b);
    };
    const lcm = (a, b) => {
        return (a * b) / gcd(a, b);
    };

    return lcm(num1, num2);
}

function solution(arr) {
    let answer = calc(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        answer = calc(answer, arr[i]);
    }
    return answer;
}
console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));

// 재귀, reduce를 활용한 예제
function nlcm(num) {
    return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
}

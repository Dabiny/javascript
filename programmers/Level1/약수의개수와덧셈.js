function solution(left, right) {
    let arr = [];
    let answer = 0;
    for (let i = left; i <= right; i++) arr.push(i);
    for (let x of arr){
        let f = 1, sum = 0;
        while (f <= x) {
            if (x % f === 0) sum++;
            f++;
        }
        if (sum % 2 == 0) answer += x;
        else answer -= x;
    }
    return answer;
}
console.log(solution(13, 17));
console.log(solution(24, 27));


// 제곱근이 정수이면 약수의 개수가 홀수이다... 
function solution(left, right){
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))){
            answer -= i;
        }
        else {
            answer += i;
        }
    }
    return answer;
}
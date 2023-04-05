// 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면?
function solution(a, b, c){
    let answer = 0;
    for (let i = 1; i < c; i++) {
        if(i % a === 0 || i % b === 0) {
            console.log(i);
            answer += i;
        }
    }
    return answer;
}

console.log(solution(3, 5, 1000));
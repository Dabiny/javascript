function solution(a, b){
    let answer = [...a, ...b];
    return answer.sort((a, b) => a - b);
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
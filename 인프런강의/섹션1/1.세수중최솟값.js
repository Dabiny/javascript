function solution(a, b, c){
    let n = a < b ? a : b;
    let answer = n < c ? n : c;
    return answer;
}

console.log(solution(2, 5, 1));
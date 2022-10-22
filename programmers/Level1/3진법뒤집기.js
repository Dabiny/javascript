function solution(n) {
    let binary = parseInt(n.toString(3).split('').reverse().join(''), 3);
    return binary;
}
console.log(solution(45));
console.log(solution(125));
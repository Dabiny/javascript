function solution(a, b) {
    var answer = a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
    return answer;
}
console.log(solution([1,2,3,4], [-3,-1,0,2]))
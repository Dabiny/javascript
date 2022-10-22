function solution(arr) {
    let answer = arr.filter((v) => Math.min(...arr) !== v);
    return answer.length === 0 ? [-1] : answer;
}
console.log(solution([4, 3, 2, 1]));
function solution(arr, divisor) {
    var answer = [];
    for (let x of arr) {
        if (x % divisor === 0) answer.push(x);
    }
    if (answer.length === 0) answer.push(-1);
    return answer.sort((a, b) => a - b);
}
console.log(solution([5, 9, 7, 10], 5));



function solution(arr, divisor) {
    let answer = arr.filter((v) => v % divisor === 0 );
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
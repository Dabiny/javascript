function solution(a, b) {
    let answer = [];
    for (let x of a) {
        if (b.includes(x)) answer.push(x);
    }
    return answer.sort((a, b) => a - b);
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
function solution(arr1, arr2) {
    var answer = [];
    let first = new Set(arr1);
    let second = new Set(arr2);

    for (let x of first) {
        if (!second.has(x)) answer.push(x);
    }
    for (let x of second) {
        if (!first.has(x)) answer.push(x);
    }
    return answer.sort((a, b) => a - b);
}
console.log(solution([1, 3, 6, 9, 12], [2, 4, 6, 8, 10, 12]));
// 차집합 문제 1.0
function solution(useageArr, fee) {
    let answer = [...useageArr].reduce(function(acc, val) {
        return acc + (val * fee);
    }, 0)
    return answer;
}

console.log(solution([1, 3, 5], 5));
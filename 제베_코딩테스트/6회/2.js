function solution(n) {
    let sum = [];
    for (let i = n; i > 0; i--){
        sum.push(i);
    }
    return sum.reduce(function(acc, val){
        return acc + val;
    }, 0);
}

console.log(solution(4));
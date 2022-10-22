function solution(d, budget) {
    if (d.reduce((a, b) => a + b) === budget) return d.length;
    else {
        let sum = d.reduce((a, b, i) => a + b);
        let arr = d.filter((a, i) => {
           sum -= a;
           if (sum >= budget) {
            return a;
           }
        })
        return arr.length;    
    }
}
console.log(solution([1,3,2,5,4], 9))
console.log(solution([2,2,3,3], 10))

// 해설 오름차순으로 설정해야 한다.
function solution(d, budget) {
    d.sort((a, b) => a - b);
    // d누적값이 버짓보다 클때까지 계쏙 팝해주기 
    while (d.reduce((a, b) => (a + b), 0) > budget) {
        d.pop();
    }
    return d.length;
}
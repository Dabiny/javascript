function solution(arr) {
    let mp = new Map();
    for (let x of arr) {
        if (mp.has(x)) mp.set(x, mp.get(x) + 1);
        else mp.set(x, 1);
    }
    let answer = 0;
    for (let [key, value] of mp){
        if (value === 1) answer = key;
    }
    return answer;
}
console.log(solution([1, 2, 1]));
// 1.0
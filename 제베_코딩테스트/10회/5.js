function solution(s) {
    let mp = new Map();
    let answer = "";
    for (let x of s) {
        if (mp.has(x)) mp.set(x, mp.get(x) + 1);
        else mp.set(x, 1);
    }
    for (let [key, value] of mp) {
        if (value === 1) answer += key;
    }
    return answer;
}
console.log(solution("aacddefg"));
// 0.6 효율성도봐야하는 문제

function solution(s) {
    let stk = [];
    for (let x of s) {
        if (stk[stk.length - 1] === x) stk.pop();
        else stk.push(x);
    }
    return stk.join('');
}
console.log(solution("aacddefg"));
// 1.0 효율성 통과
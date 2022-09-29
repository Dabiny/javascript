// 알파벳 문자열 1.0
function solution(S) {
    let stk = [];
    
    for(let x of S) {
        if (stk.length === 0) stk.push(x);
        else if (stk.length !== 0 && stk[stk.length - 1] == x) stk.pop();
        else if (stk.length !== 0 && stk[stk.length - 1] != x) stk.push(x);
    }
    if (stk.length === 0) return 1;
    return 0;
}
console.log(solution("ABBA"));
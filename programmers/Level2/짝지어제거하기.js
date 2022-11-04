function solution(s) {
    let stk = [];
    let str = [...s];

    for (let x of str) {
        if (stk.length === 0) stk.push(x);
        else {
            if (stk[stk.length - 1] === x) {
                stk.pop();
                continue;
            }
            stk.push(x);
        }
    }

    if (stk.length === 0) return 1;

    return 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));

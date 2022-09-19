function solution(str) {
    let stk = [];
    for (let x of str) {
        if(x == '(') stk.push(x);
        else if(x == ')' && stk[stk.length- 1] == '(') stk.pop();
    }
    if (stk.length !== 0) return 'NO';
    return 'YES';
}

console.log(solution("(()(()))(()"));
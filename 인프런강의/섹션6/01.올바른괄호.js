// function solution(str) {
//     let stk = [];
//     for (let x of str) {
//         if(x == '(') stk.push(x);
//         else if(x == ')' && stk[stk.length- 1] == '(') stk.pop();
//         else if(stk.length == 0 && x == ')') return 'NO';
//     }
//     if (stk.length !== 0) return 'NO';
//     return 'YES';
// }

// console.log(solution("(()(()))(()"));

// 해설
function solution(str) {
    let stack = [];
    for (let x of str) {
        if(x === '(') stack.push(x);
        else {
            if (stack.length === 0) return 'NO';
            stack.pop();
        } 
    }
    if (stack.length !== 0) return 'NO';
    
    return 'YES';
}

console.log(solution("(()(()))(()"));
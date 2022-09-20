// function solution(str){
//     let stk = [];
//     let tmp = [];
//     let len = stk.length - 1;
//     for (let x of str) {
//         if (stk.length === 0 && x == '('){
//             stk.push(x);
//         }
//         else if (stk.length === 0 && x == /[A-Z]/) {
//             tmp.push(x);
//         }
//         else if (stk.length !== 0 && stk[len] == /[A-Z]/ && x == /[A-Z]/) {
//             stk.push(x);
//         }
//         else if (stk.length !== 0 && stk[len] == /[A-Z]/ && x == ')') {
//             while(stk[len] !== '(') {
//                 stk.pop();
//             }
//         }
//     }
//     return tmp;
// }

// console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
// 실패

function solution(s){
    let answer;
    let stack = [];
    for (let x of s) {
        if (x === ')'){
            while(stack.pop() !== '('); // stack에서 pop하고 '('가 아닐대까지 while
        }
        else stack.push(x);
    } 
    console.log(stack);
    answer = stack.join('');
    return answer;
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
// 다시풀기 while(조건)안에 stack.pop()을 넣고 비교하는것이 생소하다. 
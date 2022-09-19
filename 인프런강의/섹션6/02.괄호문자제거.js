function solution(str){
    let stk = [];
    let tmp = [];
    let len = stk.length - 1;
    for (let x of str) {
        if (stk.length === 0 && x == '('){
            stk.push(x);
        }
        else if (stk.length === 0 && x == /[A-Z]/) {
            tmp.push(x);
        }
        else if (stk.length !== 0 && stk[len] == /[A-Z]/ && x == /[A-Z]/) {
            stk.push(x);
        }
        else if (stk.length !== 0 && stk[len] == /[A-Z]/ && x == ')') {
            while(stk[len] !== '(') {
                stk.pop();
            }
        }
    }
    return tmp;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
// 실패
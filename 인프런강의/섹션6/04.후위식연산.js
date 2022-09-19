function solution(str) {
    let stk = [];
    let sum = 0;
    for (let x of str) {
        if(x == /[0-9]/){
            stk.push(x);
        }
        else if (x == '+') { // 애매한 부분
            let i = parseInt(stk[stk.length - 1]);
            stk.pop();
            let j = parseInt(stk[stk.length - 1]);
            stk.pop();
            
            sum += i + j;
        }
        else if (x == '*') {
            let i = parseInt(stk[stk.length - 1]);
            stk.pop();

            if (sum == 0) {
                sum = 1;
                sum *= i;
            }
        }
        else if (x == '-') { // 애매한부분
            let i = parseInt(stk[stk.length - 1]);
            stk.pop();
            let j = parseInt(stk[stk.length - 1]);
            stk.pop();

            sum -= i - j;
        }
        else if (x == '/') {
            let i = parseInt(stk[stk.length - 1]);
            stk.pop();
            sum /= i;
        }
    }

    return sum;
}
console.log(solution("352+*9-")); // NaN나옴 ㅜㅜ
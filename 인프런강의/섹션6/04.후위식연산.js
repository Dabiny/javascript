// function solution(str) {
//     let stk = [];
//     let sum = 0;
//     for (let x of str) {
//         if(x == /[0-9]/){
//             stk.push(x);
//         }
//         else if (x == '+') { // 애매한 부분
//             let i = parseInt(stk[stk.length - 1]);
//             stk.pop();
//             let j = parseInt(stk[stk.length - 1]);
//             stk.pop();
            
//             sum += i + j;
//         }
//         else if (x == '*') {
//             let i = parseInt(stk[stk.length - 1]);
//             stk.pop();

//             if (sum == 0) {
//                 sum = 1;
//                 sum *= i;
//             }
//         }
//         else if (x == '-') { // 애매한부분
//             let i = parseInt(stk[stk.length - 1]);
//             stk.pop();
//             let j = parseInt(stk[stk.length - 1]);
//             stk.pop();

//             sum -= i - j;
//         }
//         else if (x == '/') {
//             let i = parseInt(stk[stk.length - 1]);
//             stk.pop();
//             sum /= i;
//         }
//     }

//     return sum;
// }
// console.log(solution("352+*9-")); // NaN나옴 ㅜㅜ
// 너무 즉흥적으로 짜니까 엉망됨. 

//
function solution(str) {
    let answer;
    let stack = [];
    for (let x of str) {
        if(!isNaN(x)) stack.push(Number(x));  
        else {
            let rt = stack.pop(); // 먼저 나온것
            let lt = stack.pop(); // 나중에 나온것
            if (x === '+') stack.push(lt + rt);
            else if (x === '-') stack.push(lt - rt);
            else if (x === '*') stack.push(lt * rt);
            else if (x === '/') stack.push(lt / rt);
        }
    }
    answer = stack[0]; // 마지막에 들어가있는 숫자가 다 연산된 숫자다. 
    return answer;
}
console.log(solution("352+*9-"));
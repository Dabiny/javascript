const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "baekjoon/순열조합문제/1182.txt";
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, S] = input.shift().split(' ').map(v => +v);
const numberArray = input.shift().split(' ').map(v => +v);
let answer = 0;
// function dfs(l, start, sum) {
//     if(sum === S) {
//         answer++;
//         return;
//     } else {
//         for (let i = start; i < N; i++) {
//             dfs(l + 1, i + 1, sum + numberArray[l]);
//         }
//     }
// }

// dfs(0, 0, 0); // level, startIndex, sum
// console.log(answer);
// 16% 에서 답이 틀렸다고 나온다. 

// 다른사람의 문제풀이
// 부분집합 알고리즘으로 풀어야 한다. 문제를 보고 부분집합인지 딱 알아차려야 한다. 
function dfs(idx, sum) {
    if(idx === N) {
        if (sum === S) {
            answer++;
        }
        return;
    } else {
        dfs(idx + 1, sum + numberArray[idx]);
        dfs(idx + 1, sum);
    }
}
dfs(0, 0);
if(S === 0) answer--;
console.log(answer);
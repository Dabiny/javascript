const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "baekjoon/순열조합문제/10974.txt";

const input = fs.readFileSync(filePath).toString().split('\n');
const N = +input.shift();
const check = Array.from({length: N}, () => false);
const tmp = new Array(N);
let answer = ''

function dfs(l) {
    if(l === N) {
        answer += `${tmp.join(' ')}\n`; 
        // 초반 replace를 썼을때 속도 -> 3092ms, 백틱으로 join처리해줄때 속도 -> 216ms 엄청난차이
        return;
    } else {
        for (let i = 0; i < N; i++) {
            if (check[i] === true) continue;
            check[i] = true;
            tmp[l] = i + 1;
            dfs(l + 1);
            check[i] = false;
        }
    }
}
dfs(0);
console.log(answer.trimEnd());

// 다른 해설풀이 속도: 약300ms 나: 3000ms
// let answer = '';

// const dfs = (idx, hist) => {
//     if(idx === N) {
//         answer += `${hist.join(' ')}\n`;
//         return;
//     }
//     else {
//         for (let i = 1; i <= N; i++) {
//             if(check[i]) continue;
//             check[i] = true;
//             dfs(idx + 1, [...hist, i]); // tmp를 인자로 넘겨주는 케이스
//             check[i] = false;
//         }
//     }
// };
// dfs(0, []);
// console.log(answer);
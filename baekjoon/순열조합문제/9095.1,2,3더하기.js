const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "baekjoon/순열조합문제/9095.txt";
const input = fs.readFileSync(filePath).toString().split('\n');

const T = +input.shift(); // 테스트케이스 개수
const n = input.map((v) => +v);

let answer = 0; // 방법의 수
function dfs(l, N, sum) {
    if (sum > N) return;
    if(sum === N) {
        answer++;
        return;
    } else {
        for (let i = 1; i <= 3; i++) { // 1, 2, 3의 합
            dfs(l + 1, N, sum + i); 
        }
    }
}

for (let i = 0; i < T; i++) {
    dfs(0, n[i], 0); // level, 해당 테스트 케이스, sum
    console.log(answer); // 답보여주고, 
    answer = 0; // 답 다시 초기화 
}

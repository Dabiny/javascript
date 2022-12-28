const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "baekjoon/순열조합문제/1463.txt";
const input = fs.readFileSync(filePath).toString().split('\n');

let X = +input.shift(); // 정수 X
let min = Number.MAX_SAFE_INTEGER;

// function dfs(l, sum) {
//     if (sum < 1) return; // 가지커팅
//     if (min <= l) return; // 가지커팅 만약 현재 min보다 l이 크면 볼필요 없음.  
//     if(sum === 1) {
//         min = min > l ? l : min;
//     } else {
//         for (let i = 0; i < 3; i++) {
//             if (sum % 3 === 0) { // 3의 배수일때 
//                 dfs(l + 1, sum - 1); // -1도 하는 가지와
//                 dfs(l + 1, sum / 3); // 그냥 나눠버리는 가지를 뻗기
//             } 
//             else if (sum % 2 === 0){
//                 dfs(l + 1, sum - 1); 
//                 dfs(l + 1, sum / 2);
//             } 
            
//         }
//     }
// };

// dfs(0, X); // 처음에 가공을 먼저 하고 들어가야할 것 같음. 
// console.log(min);

// 메모이제이션을 시도해봤으나 실패 , 답은 정확하지만 시간이 너무 오래걸린다....

// 다른사람의 해설풀이 DP로 푸는 방식이다. 인터넷강의 듣고 다시 보기 
const DP = new Array(X + 1).fill(0);
// DP = [0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 2; i <= X; i++) {
    DP[i] = DP[i - 1] + 1; // 1을 뺀값을 우선적으로 구하기 
    // DP[3] = DP[2] + 1
    console.log('일단 -1한 값 ', DP);
    if(i % 2 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 2] + 1);
        // DP[2] = Math.min(DP[2], DP[1] + 1);
    }
    if(i % 3 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 3] + 1);
        // dp[3] = Math.min(dp[3], dp[1] + 1);
    }
    console.log('나누기한 값 ', DP);
}

console.log(DP[X]);
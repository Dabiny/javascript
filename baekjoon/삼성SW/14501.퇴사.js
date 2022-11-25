const fs = require('fs');
const filePath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/14501.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = +input.shift();
const day = []; // 상담이 걸리는 일수
const cost = []; // 상담비용
for (let i = 0; i < N; i++) {
    let data = input[i].split(' ').map(v => +v);
    day.push(data[0]);
    cost.push(data[1]);    
}

const dp = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
    if(i + day[i] > N) continue; 

    dp[i] += cost[i];
    
    for (let j = i + day[i]; j < N; j++) { // 지난 날부터
        // console.table(dp);
        dp[j] = Math.max(dp[j], dp[i]);
    }
}
console.log(Math.max(...dp));
// 점화식 공부하기
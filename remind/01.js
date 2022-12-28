const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "remind/01.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();
const cal = [3, 2, -1];
const answer = Number.MAX_SAFE_INTEGER;
function dfs(l, n) {
    if(n / 3 === 1 || n / 2 === 1 || n - 1 === 1) {
        answer = Math.min(answer, l);
    } else {
        for (let i = 0; i < 3; i++) {
            switch(cal[i]) {
                case 3: {
                    if (n % 3 !== 0) continue;
                    dfs(l + 1, N / 3);
                    break;
                }
                case 2: {
                    if (n % 2 !== 0) continue;
                    dfs(l + 1, N / 2);
                    break;
                }
                case -1: {
                    dfs(l + 1, N - 1);                
                    break;
                }
            }
        }
    }
}

dfs(0, N);

const dp = Array.from({length: N + 1}, () => 0);
// dp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "remind/01.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();

const ch = Array.from({length: N + 1}, () => false);
const tmp = new Array(N);

const dfs = (l) => {
    if(l === N) {
        console.log(tmp.join(' '));
    }
    else {
        for (let i = 1; i <= N; i++) {
            if (ch[i] === true) continue;
            ch[i] = true;
            tmp[l] = i;
            dfs(l + 1);
            ch[i] = false;
        }
    }
};

dfs(0);
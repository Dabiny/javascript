const fs = require("fs");
const filepath =
    process.platform === "linux"
        ? "/dev/stdin"
        : "/Users/dabinkim/javascript/baekjoon/삼성SW/12100.txt";

const input = fs.readFileSync(filepath).toString().trim().split('\n');

const N = +input.shift();
const board = [];
for (let i = 0; i < N; i++) {
    board.push(input[i].split(' ').map(v => +v));
}

const MAX = 5;
let answer = 0;
let board2;

for (let c = 0; c < 4 ** MAX; c++) {
    let temp = c;
    board2 = JSON.parse(JSON.stringify(board)); 
    for(let i = 0; i < MAX; i++) {
        let dir = temp % 4;
        move(dir);
        temp = Math.floor(temp / 4);
    }
}

answer = Math.max(answer, ...board2.map((v) => Math.max(...v)));
console.log(answer);

function move(dir) {
    while(dir--) rotate();

    for (let i = 0; i < board2.length; i++) {
        let temp = Array.from({length: N}, () => 0);
        let ti = 0;
        for (let j = 0; j < board2[i].length; j++) {
            if (board2[i][j] === 0) continue;

            if (temp[ti] === 0) temp[ti] = board2[i][j];
            else if (temp[ti] === board2[i][j]) temp[ti++] *= 2;
            else temp[++ti] = board2[i][j]; 
        }
        board2[i] = temp;
    }
}

function rotate() {
    const temp = JSON.parse(JSON.stringify(board2));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            board2[i][j] = temp[N - 1 - j][i];
        }
    }
}
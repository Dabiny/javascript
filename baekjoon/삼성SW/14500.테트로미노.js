// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/14500.txt";
// const input = fs.readFileSync(filePath).toString().split('\n');
// const [N, M] = input.shift().split(' ').map(v => +v);
// const board = []; // 보드 판
// for (let i = 0; i < N; i++) {
//     board.push(input[i].split(' ').map(v => Number(v)));
// }
// const visited = Array.from({length: N}, () => Array.from({length: M}, () => 0));

// let sx, sy = 0; // 시작점 [sx, sy];

// let dx = [-1, 0, 1, 0]; // 상하좌우
// let dy = [0, 1, 0, -1];

// let arr = [];
// let answer = 0; // 최대 합

// const isPoliomino = (arr) => {
//     let sum = 0;
//     for (let i = 1; i < arr.length; i++) {
//         let x = Math.abs(arr[i][0] - arr[i - 1][0]);
//         let y = Mayh.abs(arr[i][1] - arr[i - 1][1]);
//         if (x === 1 && y === 1) return;
//         else sum += board[arr[i][0]][arr[i][1]];
//     }
//     if (answer < sum) answer = sum;
// };
// const dfs = (x, y, cnt, arr) => {
//     if (cnt === 4) {
//         isPoliomino(arr);
//         arr = [];
//         return;
//     }
//     else {
//         for (let i = 0; i < 4; i++) {
//             let nx = x + dx[i];
//             let ny = y + dy[i];

//             if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) return;
//             arr.push([nx, ny]); // 테트리스블록좌표 4개푸쉬할 배열
//             visited[nx][ny] = 1;
//             dfs(nx, ny, cnt + 1, arr);
//         }
//     }
// }
// const solution = () => {
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < M; j++) {
//             visited[i][j] = 1;
//             arr.push([i, j]);
//             dfs(i, j, 0, arr);
//         }
//     }
//     console.log(answer);
// }
// console.log(solution());

//
const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/14500.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((v) => +v);
const board = []; // 보드 판
for (let i = 0; i < N; i++) {
    board.push(input[i].split(" ").map((v) => Number(v)));
}
let visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
);

function solution() {
    let answer = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    function isValid(x, y) {
        return x >= 0 && x < N && y >= 0 && y < M;
    }

    function dfs (x, y, score, cnt) {
        if(cnt === 4) {
            answer = Math.max(answer, score);
            return;
        }
        else {
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (isValid(nx, ny) && !visited[nx][ny]) { // 나와 다른점이다. 
                    if(cnt === 2) { // 블록카운트가 2일때 ㅁ 모양 ㄱ 모양, ㄹ모양 , ㅗ모양 으로 꺾어지게 만들 수 잇다. 백트래킹
                        visited[nx][ny] = 1;
                        dfs(x, y, score + board[nx][ny], cnt + 1);
                        visited[nx][ny] = 0;
                    }

                    visited[nx][ny] = true;
                    dfs(nx, ny, score + board[nx][ny], cnt + 1);
                    visited[nx][ny] = false;
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            visited[i][j] = 1;
            dfs(i, j, board[i][j], 1);
            visited[i][j] = 0; // 다시 visited 0으로 설정해주기
        }
    }
    return answer;
}
console.log(solution());

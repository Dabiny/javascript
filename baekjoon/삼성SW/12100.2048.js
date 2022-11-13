// const fs = require('fs');
// const { join } = require('path');
// const filepath =
//     process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/12100.txt";

// 내가 푼 문제.. 어떻게 행과 열을 한꺼번에 움직일건지 구현하기 어려웠다. 
// let input = fs.readFileSync(filepath).toString().split('\n');
// let N = parseInt(input.shift().split('').join(''));
// input = input.map((x) => x.split(' '));

// const dx = [-1, 0, 1, 0];
// const dy = [0, 1, 0, -1];

// let numbers = [];
// let change = []; // 바뀐 좌표
// const maxMove = 5; // 최대 움직이는 횟수
// let answer = 0;

// function moveBoard () {

// }
// function dfs(input, cnt) {
//     if(cnt > 5) return;

//     for (let i = 0; i < 4; i++) {
//         change.push(moveBoard(input, i));
        
//     }
// }

// dfs(input,0);



const fs = require("fs");
const { join } = require("path");
const { title } = require("process");
const filepath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/12100.txt";

const input = fs.readFileSync(filepath).toString().split('\n');
const N = Number(input.shift().split('').join(''));
const board = [];
for (let i = 0; i < N; i++) {
    board.push(input[i].split(' ').map((str) => Number(str)));
}

const MAX = 5;
let answer = 0;
let board2;

for (let c = 0; c < 4 ** MAX; c++) { // 4방향 최대 5번 -> 4 ** 5  내가 의문이었던것 1 
    let temp = c; 
    board2 = JSON.parse(JSON.stringify(board)); // 깊은 복사

    for(let i = 0; i < MAX; i++) { // 5번
        const dir = temp % 4; // 방향 = 0, 1, 2, 3 네가지가 나온다. 
        tilt(dir);
        temp = Math.floor(temp / 4, 0);
        console.log(temp);
    }
    console.table(board2);

    // 2차원 배열 max값 찾는법. 
    answer = Math.max(answer, ...board2.map((line) => Math.max(...line)));
}

function tilt(dir) {
    while(dir--) rotate(); // 방향이 0일때는 돌지 않는다. 

    for (let i = 0; i < N; i++) {
        let tmp = Array(N).fill(0); // [0, 0, 0]
        let ti = 0; // tmpIndex
        for (let j = 0; j < N; j++) {
            if (board2[i][j] === 0) continue;

            if (tmp[ti] === 0) tmp[ti] = board2[i][j];
            else if (tmp[ti] === board2[i][j]) tmp[ti++] *= 2;
            else tmp[++ti] = board2[i][j];
        }
        board2[i] = tmp;
    }
}

function rotate() {
    const temp = JSON.parse(JSON.stringify(board2));

    for (let i = 0; i < N; i++){ // 시계방향으로 돌려주기
        for (let j = 0; j < N; j++) {
            board2[i][j] = temp[N - 1 - j][i];
        }
    }
}

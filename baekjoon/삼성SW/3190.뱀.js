const fs = require('fs');
const filepath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/3190.txt";

let input = fs.readFileSync(filepath).toString().trim().split('\n');

const N = +input.shift(); // 맵크기
const K = +input.shift(); // 사과개수

const apple = []; // apple 좌표 
for (let i = 0; i < K; i++){
    const [x, y] = input.shift().split(' ').map((x) => +x);
    apple.push([x, y]);
}
// 보드판 만들기
const board = Array.from({length: N}, () => Array.from({length: N}, () => 0));

for (let l of apple){ // 사과위치 집어넣기 (index -1해주기)
    let [x, y] = l;
    board[x - 1][y - 1] = 2;
}

// 이동좌표 movelocation
const M = input.shift();
const ml = [];
for (let i = 0; i < M; i++) {
    let [x, y] = input.shift().split(' ').map((v) => isNaN(v) ? v : +v);
    ml.push([x, y]);
}

// const locObj = {
//     'D': 0,
//     'L': 0
// };

// function move (dx, dy, snakeLength, second, dir) {
//     while(second--) {
//         if (dx === 0 && dy === 0 && snakeLength === 1) { // 뱀시작좌표일때 무조건 -> 방향
//             dy += 1;
//             board[dx][dy] = 1;
//         }
//     }
// }

// function solution () {
//     let snake = 1; // 뱀 길이 
//     let dx, dy, cnt = 0; // 뱀의 현재 위치 
    
//     for (let i = 0; i < ml.length; i++) {
//         move(dx, dy, snake, ml[0], ml[1]);
//     }
// }
// // 지렁이를 못움직이겠음... ㅜㅜ 

// 해답
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let time = (curDir = 0); // 시간 현재 시간 
let head = [0, 0];
let tail = [0, 0];

let dirChangeTime = ml[0][0]; // 바뀔시간
const path = [];

while (1) {
    const nx = head[0] + dx[curDir];
    const ny = head[1] + dy[curDir];

    if (nx < 0 || nx >= N || ny < 0 || ny >= N) break; // 벽에 부딪힌 경우
    else if (board[nx][ny] === 1) break; // 자기몸통과 부딪힌 경우
    else {
        if (board[nx][ny] === 2) { // 사과이면
            board[nx][ny] = 1;
            path.push([nx, ny]); // 경로 추가
            
            head[0] = nx;
            head[1] = ny;
        }
        else if (board[nx][ny] === 0) { // 지나갈수 있는 자리면
            head[0] = nx;
            head[1] = ny;
            
            board[nx][ny] = 1; // 뱀 지나가는거 처리

            path.push([nx, ny]); // 경로 추가

            board[tail[0]][tail[1]] = 0; // 지나갔던 자리는 다시 0으로

            let next = path.shift(); // 다음은 경로의 앞부분 쉬프트
            tail[0] = next[0];
            tail[1] = next[1];
        }
    }
    time++;

    if (time === dirChangeTime) {
        if(ml[0][1] === 'D') {
            curDir = (curDir + 1) % 4;
        }
        else if (ml[0][1] === 'L') {
            curDir = (curDir + 3) % 4;
        }

        ml.shift();
        if (ml.length === 0) dirChangeTime = 0;
        else dirChangeTime = ml[0][0];
    }
    // console.table(board);
}

console.log(time + 1);

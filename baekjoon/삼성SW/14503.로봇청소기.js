const fs = require("fs");
const pathFile =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/14503.txt";
const input = fs.readFileSync(pathFile).toString().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((v) => +v); // 맵 크기
const [sx, sy, sdir] = input
    .shift()
    .split(" ")
    .map((v) => +v); // 로봇청소기 첫 시작좌표

const board = [];
for (let i = 0; i < input.length; i++) {
    board.push(input[i].split(" ").map((v) => +v));
}
// 방문했는지 표시
const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
);
// 0: 북, 1: 동, 2: 남, 3: 서
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
// 1. 로봇청소기를 시작좌표에 둔다. 방향을 어디부터 설정할건지 정하기
let answer = [];
const dfs = (x, y, d, sum) => {
// 1. 현재위치 청소.
// 2. 현재위치에서 현재 방향기준으로 왼쪽방향부터 차례대로 탐색
// a. 왼쪽방향에 아직 청소하지 않은 공간이 있으면 그 방향으로 회정한다음 한칸 전진 1번부터 진행.
// b. 왼쪽방향에 청소할공간 없으면, 그 방향으로 회전하고 2번으로 돌아감. 
// c. 네방향 모두 청소, 벽이면 바라보는 방향을 유지한채로 한칸 후진 -> 2번으로 돌아감
// d. 네방향 모두 청소가 이미 되었거나 벽이면서 뒤쪽방향이 벽이라 아무것도할수없는 상태는 작동멈춤. 

    for (let i = 0; i < 4; i++) {
        let nd = (d + 3 - i) % 4; // 반시계방향
        let nx = x + dx[nd];
        let ny = y + dy[nd];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        // a. 청소하지않은 공간 잇으면
        if (board[nx][ny] == 0 && !visited[nx][ny]){
            visited[nx][ny] = 1; // 현재위치 청소후
            dfs(nx, ny, nd, sum + 1); // 그 방향으로 회전후 다시실행
        }
    }

    // 후진 코드
    let backIdx = d + 2 < 4 ? d + 2 : d - 2;
    let backX = x + dx[backIdx];
    let backY = y + dy[backIdx];
    if (0 <= backX && backX <= N && 0 <= backY && backY <= M) {
        if(board[backX][backY] === 0) {
            dfs(backX, backY, d, sum); // 한칸후진
        }
        else {
            answer.push(sum);
        }
    }
};


visited[sx][sy] = 1;
dfs(sx, sy, sdir, 1);

console.log(answer.shift());


// 다른 답 와일문 쓴 답
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

// const [N, M] = input.shift().split(" ").map(Number);
// let [r, c, d] = input.shift().split(" ").map(Number);
// let area = input.map((x) => x.split(" ").map(Number));

// const dx = [-1, 0, 1, 0];
// const dy = [0, 1, 0, -1];

// let cleanCnt = 0;

// let flag = true;
// while (true) {
//     if (flag) {
//         area[r][c] = 2;
//         cleanCnt += 1;
//         flag = false;
//     }

//     let curDir;

//     for (let i = 0; i < 4; i++) {
//         curDir = (d + 3 - i) % 4;

//         const [nr, nc] = [r + dx[curDir], c + dy[curDir]];

//         if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

//         if (area[nr][nc] === 0) {
//             d = curDir;
//             [r, c] = [nr, nc];
//             flag = true;
//             break;
//         }
//     }

//     if (flag) continue;

//     d = curDir;
//     let [br, bc] = [r + dx[d] * -1, c + dy[d] * -1];

//     if (br < 0 || br >= N || bc < 0 || bc >= M) break;
//     if (area[br][bc] === 1) break;

//     [r, c] = [br, bc];
// }

// console.log(cleanCnt);
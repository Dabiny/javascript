const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/14502.txt";

const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((v) => +v);
const board = [];
for (let i = 0; i < N; i++) {
    board.push(input[i].split(" ").map((v) => +v));
}
const visited = (virus = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
));
const wall = [];
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

const dfs = (x, y) => {
    if (board[x][y] === 1 || virus[x][y]) { //  벽이거나, 바이러스가 이미 퍼져있으면 return.
        return;
    } else {
        virus[x][y] = 1; // 바이러스 퍼트리기
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx >= N || nx < 0 || ny >= M || ny < 0 ) continue;
            dfs(nx, ny);
        }
    }
};

// ⭐️ 시뮬레이션 돌리기 
const solution = () => {
    // 다시 virus배열 초기화
    virus = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === 2) dfs(i, j); // 벽세운 가정하에 바이러스 퍼트려보기.
        }
    }
    let answer = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!virus[i][j] && board[i][j] === 0) answer++;
        }
    }
    return answer;
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!board[i][j]) {
            wall.push([i, j]); // 0이면 벽에 세울 수 있는 후보좌표
        }
    }
}
let answer = 0;

// ⭐️벽 3개 조합(겹치지 않게)
for (let i = 0; i < wall.length; i++) {
    for (let j = 0; j < i; j++) {
        for (let k = 0; k < j; k++) {
            board[wall[i][0]][wall[i][1]] =
                board[wall[j][0]][wall[j][1]] =
                board[wall[k][0]][wall[k][1]] =
                    1;
            answer = Math.max(answer, solution()); // 반환된 안전지대 수랑 전에 있던 안전지대 비교
            // ⭐️다시 벽 원상태로 돌려놓기 
            board[wall[i][0]][wall[i][1]] =
                board[wall[j][0]][wall[j][1]] =
                board[wall[k][0]][wall[k][1]] =
                    0;
        }
    }
}
console.log(answer);


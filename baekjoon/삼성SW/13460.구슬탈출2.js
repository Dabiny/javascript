// function solution(N, M, BOX) {
//     const mp = [];
//     let dx = [-1, 0, 1, 0];
//     let dy = [0, 1, 0, -1];
//     for (let x of BOX) {
//         let arr = x.split("");
//         mp.push(arr);
//     }

//     let redCnt = 0;
//     let blueCnt = 0;
//     let startX = 0;
//     let startY = 0;

//     function dfs(X, Y) {
//         if (startX == X && startY == Y) {
//             // 종료조건을어디에 배치해야할지 모르겠음.
//             return;
//         } else {
//             for (let i = 0; i < 4; i++) {
//                 let nx = dx[i] + X;
//                 let ny = dy[i] + Y;

//                 if (mp[nx][ny] == "#" || mp[nx][ny] == "B") continue;

//                 while (mp[nx][ny] != "#") {
//                     // 와일문으로 도는데
//                     dfs(nx + dx[i], ny + dy[i]);
//                     if (mp[nx][ny] == "#") redCnt++; // 몇번움직이는지는 어디에 지정해야할지 모르겠음.
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < mp.length; i++) {
//         for (let j = 0; j < mp[i].length; j++) {
//             if (mp[i][j] == "R") {
//                 startX = i;
//                 startY = j;
//                 dfs(i, j);
//             }
//         }
//     }

//     return redCnt;
// }

// console.log(solution(5, 5, ["#####", "#..B#", "#.#.#", "#RO.#", "#####"]));

// console.log(
//     solution(7, 7, [
//         "#######",
//         "#...RB#",
//         "#.#####",
//         "#.....#",
//         "#####.#",
//         "#O....#",
//         "#######",
//     ])
// );

// // 답안 1
// function solution(input) {
//     let redBallPos = null; // 빨간볼 위치
//     let blueBallPos = null; // 파란볼 위치
//     let holePos = null; //구멍위치
//     const maxCnt = 10;

//     const boardObj = {
//         RED: "R",
//         BLUE: "B",
//         HOLE: "O",
//         EMPTY: ".",
//     };

//     const dirObj = {
//         TOP: 0,
//         RIGHT: 1,
//         BOTTOM: 2,
//         LEFT: 3,
//     };

//     const dx = [-1, 0, 1, 0];
//     const dy = [0, 1, 0, -1];

//     const boards = input.slice(1).map((str, rowIdx) => {
//         const row = str.split("");

//         if (!redBallPos || !blueBallPos || !holePos) {
//             row.forEach((v, colIdx) => {
//                 if (v === boardObj.RED) redBallPos = [rowIdx, colIdx];
//                 else if (v === boardObj.BLUE) blueBallPos = [rowIdx, colIdx];
//                 else if (v === boardObj.HOLE) holePos = [rowIdx, colIdx];
//             });
//         }

//         return row;
//     });

//     // bfs 탐색을 수행해야 한다. 보드에서 직접 이동시 매 수행마다 공의 위치가 바뀐다.
//     // 그래서 보드에서 공 위치를 빈칸으로 남기고, 매 이동마다 상대적으로 위치를 파악한다.
//     boards[redBallPos[0]][redBallPos[1]] = boardObj.EMPTY;
//     boards[blueBallPos[0]][blueBallPos[1]] = boardObj.EMPTY;

//     // 현재 이동시킬 공과 다른 공의 위치를 상대적으로 비교하면서, 다른 공이 길을 막았을 때 넘어가지 않도록 한다.
//     function moveBall(ball, otherBall, dir) {
//         // (움직일 볼, 다른 공, 위치)
//         while (1) {
//             // 무한루프를 돌면서
//             const nx = ball[0] + dx[dir];
//             const ny = ball[1] + dy[dir];

//             if (nx === otherBall[0] && ny === otherBall[1]) break;
//             else if (boards[nx][ny] === boardObj.EMPTY) {
//                 ball[0] = nx;
//                 ball[1] = ny;
//             } else if (boards[nx][ny] === boardObj.HOLE) {
//                 ball[0] = -1;
//                 ball[1] = -1;
//                 break;
//             } else break;
//         }
//     }

//     function checkEscape(ball) {
//         if (ball[0] === -1 && ball[1] === -1) return true;
//         return false;
//     }

//     function checkMoveRedballFirst(red, blue, dir) {
//         if (
//             (dir === dirObj.TOP && red[0] < blue[0]) ||
//             (dir === dirObj.RIGHT && red[1] > blue[0]) ||
//             (dir === dirObj.BOTTOM && red[0] > blue[0]) ||
//             (dir === dirObj.LEFT && red[1] < blue[1])
//         )
//             return true;

//         return false;
//     }

//     function checkStop(beforeBall, afterBall) {
//         if (beforeBall[0] === afterBall[0] && beforeBall[1] === afterBall[1])
//             return true;
//         return false;
//     }

//     let answer = -1;
//     let findAnswer = 0;
//     const queue = [[...redBallPos, ...blueBallPos, 1]];

//     while (queue.length) {
//         if (findAnswer) break;
//         const [rx, ry, bx, by, cnt] = queue.shift();

//         for (let dir = 0; dir < 4; dir++) {
//             const reds = [rx, ry];
//             const blues = [bx, by];

//             if (checkMoveRedballFirst(reds, blues, dir)) {
//                 moveBall(reds, blues, dir);
//                 moveBall(blues, reds, dir);
//             } else {
//                 moveBall(blues, reds, dir);
//                 moveBall(reds, blues, dir);
//             }

//             if (checkEscape(blues)) continue;
//             if (checkEscape(reds)) {
//                 findAnswer = 1;
//                 answer = cnt;
//                 break;
//             }

//             // 원래 (포문돌기전)위치와, 바뀐 위치랑 같으면 continue;
//             if (checkStop([rx, ry], reds) && checkStop([bx, by], blues))
//                 continue;
//             if (cnt === maxCnt) continue;

//             queue.push([...reds, ...blues, cnt + 1]);
//         }
//     }
//     return answer;
// }

// const input = [];
// require("readline")
//     .createInterface(process.stdin, process.stdout)
//     .on("line", (line) => {
//         input.push(line);
//     })
//     .on("close", () => {
//         console.log(sol(input));
//         process.exit();
//     });


// 답안 2
const fs = require("fs");
const filepath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/13460.txt";
let input = fs.readFileSync(filepath).toString().split("\n");
let [N, K] = input
    .shift()
    .split(" ")
    .map((x) => +x); //암묵형변환

input = input.map((x) => x.split(""));

let redPos = [];
let bluePos = [];

input.forEach((x, i) => {
    x.forEach((y, j) => {
        if (input[i][j] === "R") redPos = [i, j];
        if (input[i][j] === "B") bluePos = [i, j];
    });
});

const move = (x, y, dx, dy) => {
    let count = 0;
    while (input[x + dx][y + dy] !== "#" && input[x][y] !== "O") {
        x += dx;
        y += dy;
        count++;
    }
    return [x, y, count];
};

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = () => {
    const cache = {};
    const queue = [[...redPos, ...bluePos, 1]];
    cache[`${redPos[0]},${redPos[1]},${bluePos[0]},${bluePos[1]}`] = true;

    while (queue.length) {
        const [rx, ry, bx, by, depth] = queue.shift();
        if (depth > 10) break;

        let nRx, nRy, rC, nBx, nBy, bC;
        for (let i = 0; i < 4; i++) {
            [nRx, nRy, rC] = move(rx, ry, dx[i], dy[i]);
            [nBx, nBy, bC] = move(bx, by, dx[i], dy[i]);

            if (input[nBx][nBy] === "O") continue;
            if (input[nRx][nRy] === "O") return depth;
            if (nBx == nRx && nBy == nRy) {
                if (rC > bC) {
                    nRx -= dx[i];
                    nRy -= dy[i];
                } else {
                    nBx -= dx[i];
                    nBy -= dy[i];
                }
            }
            if (cache[`${nRx},${nRy},${nBx},${nBy}`]) continue;
            cache[`${nRx},${nRy},${nBx},${nBy}`] = true;
            queue.push([nRx, nRy, nBx, nBy, depth + 1]);
            console.log(queue, dx[i], dy[i]);
            console.log(cache)
        }
    }
    return -1;
};
console.log(bfs());


// 최소 몇번만에 -> 최단거리 경로 bfs 문제

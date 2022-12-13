const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/14889.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();
const power = [];
for (let i = 0; i < input.length; i++) {
    const s = input[i].split(" ").map((v) => +v);
    power.push(s);
}

// // 스타트팀, 링크팀
// let start = [];
// let minAns = Number.MAX_SAFE_INTEGER;

// const visited = Array.from({length: N}, () => Array.from({length: N}, () => 0));

// function dfs(l) {
//     if(l === N / 2) {
//         console.log(start);
//     }
//     else {
//         for (let i = 0; i < N; i++) { // N중 포문
//             for (let j = i + 1; j < N; j++) {
//                 if (i === j || visited[i][j] === 1) continue;
//                 start.push(power[i][j]);
//                 visited[i][j] = 1;
//                 dfs(l + 1);
//                 visited[i][j] = 0;
//             }
//         }
//     }
// }

// dfs(0); // 레벨 0부터 시작
// console.log(minAns);

// const visited = Array.from({ length: N }, () =>
//     Array.from({ length: N }, () => 0)
// );

// function dfs(x, y, l){
//     if (l === N) {
//         console.table(visited);
//     }
//     else {
//         for (let i = x; i < N; i++) {
//             let nx = i + 1;
//             let ny = y + 1;

//             if (nx < 0 || nx >= N || ny >= N || ny < 0) continue;
//             if (visited[nx][ny]) continue;

//             visited[nx][ny] = 1;
//             dfs(nx, ny, l + 1);
//         }
//     }
// }

// for(let i = 0; i < N; i++) {
//     for (let j = i + 1; j < N; j++) {
//         visited[i][j] = 1;
//         dfs(i, j, 0);
//         visited[i][j] = 0;
//     }
// }
// 내가 못하고 있는것, 조합이라는 건 알았지만 4중포문으로 만들 수 있음
// 하지만 dfs로 (재귀)로 구현할때 어떻게 i,j값을 팀별로 다 가져오는지 -> visited를 써봤지만 소용없음.

// 다른 사람 풀이
const people = Array.from({ length: N }, (_, i) => i);

const START_TEAM = [];
let LINK_TEAM = [];

const visited = new Array(N).fill(false); // visited를 사람수만큼 지정
const answer = [];
let min = Number.MAX_SAFE_INTEGER;

function dfs(count, start) {
    if (count === N / 2) {
        console.log(START_TEAM);
        LINK_TEAM = remainPeople(people, START_TEAM);
        const startTeamPoint = calcTeamPoint(power, START_TEAM);
        const linkTeamPoint = calcTeamPoint(power, LINK_TEAM);
        console.log(startTeamPoint, linkTeamPoint);

        min =
            min > Math.abs(startTeamPoint - linkTeamPoint)
                ? Math.abs(startTeamPoint - linkTeamPoint)
                : min;
    } else {
        for (let i = start; i < N; i++) { // i = start가 중복되지않게 해주는 열쇠이다. start보다 아래인수는 볼 필요없음. 
            if (visited[i]) continue;
            visited[i] = true;
            START_TEAM.push(i); // index push
            dfs(count + 1, i);
            START_TEAM.pop(i); // index pop
            visited[i] = false;
        }
    }
}
function calcTeamPoint(points, team) {
    let result = 0;
    for (let i = 0; i < team.length; i++) { // 2명이니까 2명씩
        for (let j = 0; j < team.length; j++) { 
            if (i === j) continue;
            result += points[team[i]][team[j]];
            // result + points[0][1];
            // result + points[1][0];

            // result + points[2][3];
            // result + points[3][2];
        }
    }
    return result;
} // 내가 구현 못햇던 부분.

function remainPeople(people, team) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
        if (!team.includes(people[i])) result.push(people[i]);
    }
    return result;
}

dfs(0, 0); // count, startLevel
console.log(min);
// i,j값을 가져오는게 아닌 팀원을 줄세우고 조합의수를 선택.
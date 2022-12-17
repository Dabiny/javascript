const fs = require("fs");
const filePath =
    process.platform === "linux"
        ? "/dev/stdin"
        : "baekjoon/DFS_BFS_필수문제/1260.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, start] = input
    .shift()
    .split(" ")
    .map((v) => +v);
const graph = Array.from({ length: n + 1 }, () => []); // 인접리스트
for (let x of input) {
    let [a, b] = x.split(" ").map((v) => +v);
    graph[a].push(b);
    graph[b].push(a); // 문제에서 양방향이라고 했기 때문에 간선두개 넣기
} // 경로 집어넣기 

// 작은 버텍스부터 경로를 탐색한다 했기 때문에 소팅해주기
graph.forEach((element) => {
    element.sort((a, b) => a - b);
});

let ch = Array.from({ length: n + 1 }, () => 0); // 체크배열 생성

let dfsAnswer = [];
function dfs(v) {
    ch[v] = 1; // check 먼저하고
    dfsAnswer.push(v); // 버텍스 푸쉬
    for (let i = 0; i < graph[v].length; i++) { // for돌면서
        if (ch[graph[v][i]] === 0) { // check확인하고
            dfs(graph[v][i]); // 인접리스트 돌기
        }
    }
}

dfs(start);
console.log(dfsAnswer.join(' ').trim()); // 1 2 4 3

let bfsAnswer = [];
ch.fill(0); // 체크배열 다시 초기화

function bfs(v) {
    let queue = []; // 큐 생성
    queue.push(v); // start정점 넣고 while 시작
    
    while(queue.length) {
        let nv = queue.shift();
        if(ch[nv] === 1) continue;

        ch[nv] = 1;
        bfsAnswer.push(nv);

        for(let i = 0; i < graph[nv].length; i++) {
            if (ch[graph[nv][i]] === 0) {
                queue.push(graph[nv][i]);
            }
        }
    }

}
bfs(start);
console.log(bfsAnswer.join(' ').trim()); // 1 2 3 4



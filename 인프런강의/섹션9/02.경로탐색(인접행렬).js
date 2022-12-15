function solution(n, arr){ // 정점의 수 n, 간선의 수 arr.length
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let ch = Array.from({length: n + 1}, () => 0); // check 배열
    let path = []; // 경로 확인용
    for (let [a, b] of arr) {
        graph[a][b] = 1;

    }
    function DFS(v) {
        if(v === n) {
            answer++;
            console.log(path);
        }
        else {
            for(let i = 1; i <= n; i++) {
                if(graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1; // check 걸어줌
                    path.push(i);
                    DFS(i);
                    ch[i] = 0; // 뒤로 백할때 check를 해제해줘야한다. 다른 경우의수도 접근할 수 있게
                    path.pop(); 
                } 
            }
        }
    }
    path.push(1);
    ch[1] = 1; // 무조건 1은 방문했다고 해야함. 
    DFS(1); // 1번버텍스부터탐색
    return answer;
}
console.log(solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5]
]));


// 복습
function solution(N, arr) {
    const graph = Array.from({ length: N + 1 }, () =>
        Array.from({ length: N + 1 }, () => 0)
    );
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }
    const ch = Array.from({ length: N + 1 }, () => 0); // 방문 check
    let answer = 0;

    function dfs(v) {
        if (v === N) answer++; // 만약 N 끝점에 도착한다면 ++해주고 dfs 완료
        else {
            for (let i = 1; i <= N; i++) {
                // 12345(N만큼) 돌것이고 i는 1부터 시작할 것임. 12345 -> 12345 -> 12345 보면서 체크
                // 만약 돌면서 해당 인덱스(버텍스)가 체크되어있거나, graph[v][i]에 1이 체크되어있지않으면 볼필요없음.
                if (ch[i] === 0 && graph[v][i] === 1) {
                    ch[i] = 1; // 방문표시 하고
                    dfs(i); // 그 버텍스에 가지를 뻗어나감
                    ch[i] = 0; // 버텍스에 가지를 뻗고 나오면서 체크를 다시 풀어줌.
                }
            }
        }
    }
    ch[1] = 1; // 1번은 출발점 그래서 방문도장 찍고 시작하는 것.
    dfs(1); // 1번부터 N번까지 이니까 인자는 vertex의 v로 표시
    return answer;
}

console.log(
    solution(5, [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 1],
        [2, 3],
        [2, 5],
        [3, 4],
        [4, 2],
        [4, 5],
    ])
);

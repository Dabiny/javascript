function solution(N, M, arr) {
    let graph = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => 0));
    let check = new Array(N).fill(0);
    let path = [];
    let answer = 0;
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }
    
    function dfs(v) {
        if(v === N) {
            answer++;
            return;
        }
        else {
            for (let i = 1; i <= N; i++) { // 정점번호 i
                if(graph[v][i] === 1 && check[i] === 0) {
                    check[i] = 1;
                    dfs(i);
                    check[i] = 0;
                }
            }
        }
    }

    dfs(1); // 출발점
    console.log(answer);
}
console.log(
    solution(5, 9, [
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

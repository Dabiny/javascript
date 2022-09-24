function solution(n, arr){
    let answer = 0;
    let ch = Array.from({length: n + 1}, () => 0);
    let graph = Array.from({length: n + 1}, () => []);
    for(let [a, b] of arr){
        graph[a].push(b);
    }
    function DFS(v) {
        if(v === n) {
            answer++;
        }
        else {
            for (let i = 1; i <= n; i++){
                if(ch[i] === 0 && graph[v].includes(i)){
                    ch[i] = 1;
                    DFS(i);
                    ch[i] = 0;
                }
            }
        }
    }
    ch[1] = 1;
    DFS(1); // 1번부터 시작
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



// 해설
function solution(n, arr){
    let answer = 0;
    let ch = Array.from({length: n + 1}, () => 0);
    let graph = Array.from(Array(n + 1), () => []);
    for(let [a, b] of arr){
        graph[a].push(b);
    }
    function DFS(v) {
        if(v === n) {
            answer++;
        }
        else {
            // 나랑 다른 부분 이렇게 다시 풀기
            for (let i = 0; i < graph[v].length; i++){
                if(ch[graph[v][i]] === 0){ //정점 번호
                    ch[graph[v][i]] = 1;
                    DFS(graph[v][i]);
                    ch[graph[v][i]] = 0;
                }
            }
        }
    }
    ch[1] = 1;
    DFS(1); // 1번부터 시작
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
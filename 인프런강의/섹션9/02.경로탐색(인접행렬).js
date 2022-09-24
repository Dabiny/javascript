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

/*
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
*/
function solution(n, computers) {
    let answer = 0; 
    let ch = Array.from({length: n}, () => 0);
    // function dfs(v) {
    //     if (v === n - 1) {
    //         answer++;
    //     } else {
    //         for (let i = 0; i < n; i++) {
    //             if(ch[i] === 0 && computers[v][i] === 1) {
    //                 ch[i] = 1;
    //                 dfs(i);
    //                 ch[i] = 0;
    //             }
    //         }
    //     }
    // }
    function dfs(v) {
        ch[v] = 1;
        for (let i = 0; i < n; i++) {
            if(computers[v][i] === 1 && ch[i] === 0) {
                dfs(i);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!ch[i]) {
            dfs(i);
            answer++;
        }
    }
    return answer;
}

console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ])
);

console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
    ])
);
// 다시 풀어보기 !!!!! for문을 돌면서 네트워크 개수를 찾는게 처음본 유형이였다. 
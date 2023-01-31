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

// 복습
function solution(n, computers) {
    let answer = 0;
    let check = Array.from({length: n}, () => 0); // n길이의 check배열 생성

    function dfs(v) {
        // 3. 깊이 탐색에 들어왔으면 자신(v)은 dfs에 방문한상태이기 때문에 check[v]에 방문했다는 체크를해준다. 
        check[v] = 1; 

        // 4. 현재 v에서 모든 컴퓨터를 탐색하며 자신과 연결되어있으면서, 한번도 방문하지않은 컴퓨터를 찾아야한다.  
        for (let i = 0; i < n; i++) {
            if(computers[v][i] === 1 && check[i] == 0) {
                // 5. 그런 컴퓨터가 있다면 그 컴퓨터를 시작으로 다시 탐색에 들어간다. 
                dfs(i);
            }
        }
    }

    // 1. 컴퓨터 개수가 주어지면 모든 컴퓨터를 확인하면서 다른컴퓨터와 연결되어있는지 확인해야한다. 
    for (let i = 0; i < n; i++) {
        // 2. i번의 컴퓨터를 방문해보지 않았다면 단독인 컴퓨터도 네트워크 하나로 치기때문에 answer++후 
        // 다른컴퓨터와 연결되어있는지 깊이탐색을 시작해본다. 
        if (!check[i]) {
            answer++;
            dfs(i);
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
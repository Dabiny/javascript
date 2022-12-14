function solution(n, f) {
    let answer, flag = 0;
    let dy = Array.from(Array(11), () => Array(11).fill(0));
    let ch = Array.from({length: n + 1}, () => 0);
    let p = Array.from({length: n}, () => 0);
    let b = Array.from({length: n}, () => 0);
    
    function combi(n, r) {
        if (dy[n][r] > 0) return dy[n][r];
        if (r === 0 || n === r) return 1;
        else return dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r);
    }
    function DFS(l, sum) { //sum이 final값
        if (flag) return;
        if(l === n && sum === f) {
            answer = p.slice();
            flag = 1;
        }
        else {
            for(let i = 1; i <= n; i++) {
                if(ch[i] === 0){
                    ch[i] = 1;
                    p[l] = i;
                    DFS(l + 1, sum + (b[l] * p[l]));
                    ch[i] = 0;
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        b[i] = combi(n - 1, i); // 1 3 3 1

    }
    DFS(0, 0);
    return answer;
}
console.log(solution(4, 16)); // 이건 다시꼭봐야함..

//
function solution(n, f) {
    let answer;
    let flag = 0;
    let memo = Array.from(Array(11), () => Array(11).fill(0));
    let ch = Array.from({ length: n + 1 }, () => 0);
    let p = Array.from({ length: n }, () => 0); // temp
    let b = Array.from({ length: n }, () => 0); // 조합값 1 3 3 1
    function combi(n, r) {
        if (memo[n][r] > 0) return memo[n][r];
        if (n === r || r === 0) return 1;
        else return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    }
    function dfs(l, sum) {
        if (flag) return;
        if (l === n && sum === f) {
            // 순열이 다만들어졌음.
            answer = p.slice();
            flag = 1; // 더이상 볼필요 없으니까 flag세우기
            return;
        } else {
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    p[l] = i; // push pop으로 구현해도 상관없음.
                    dfs(l + 1, sum + b[l] * p[l]); // 곱해서 더해주는 구간. ⭐️
                    ch[i] = 0;
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        // 3C0 3C1 3C2
        b[i] = combi(n - 1, i); // 1 3 3 1을 집어넣어줌.
    }
    dfs(0, 0);
    return answer;
}
console.log(solution(4, 16));

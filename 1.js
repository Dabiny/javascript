function solution(N, coin, total) {
    let tmp = Array.from({ length: total }, () => 0);
    let answer = Number.MAX_SAFE_INTEGER;
    function dfs(l, sum) {
        if (sum > total) return;
        if(sum === total){
            answer = Math.min(sum, answer);
            return;
        }
        else {
            for(let i = 0; i < N; i++) {
                tmp[l] = coin[i];
                dfs(l + 1, sum + coin[i]);
            }
        }
    }
    dfs(0, 0);

    return answer;
}
console.log(solution(3, [1, 2, 5], 15));
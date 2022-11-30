function solution(N, M, A) {
    let totalScore = 0;
    function dfs(l, t, s) {
        if (t > M) return;
        if (l === N) {
            if (t <= M) {
                totalScore = Math.max(totalScore, s);
            }
        } else {
            dfs(l + 1, t + A[l][1], s + A[l][0]);
            dfs(l + 1, t, s);
        }
    }
    dfs(0, 0, 0);
    return totalScore;
}
console.log(
    solution(5, 20, [
        [10, 5], // 점수, 시간
        [25, 12],
        [15, 8],
        [6, 3],
        [7, 4],
    ])
);

function solution(n, arr, m){
    let tmp = Array.from({length: m}, () => 0);
    let coin = Number.MAX_SAFE_INTEGER;
    function DFS(l, sum){
        if (sum > m) return; // 더못나가게 컷팅엣지
        if (l >= coin) return; // 더못나가게 컷팅엣지
        if(sum === m){
            console.log(l, sum);
            coin = Math.min(coin, l);
        }else{
            for (let i = 0; i < n; i++){
                tmp[l] = arr[i];
                DFS(l + 1, sum + arr[i]);
            }
        }
    }
    DFS(0, 0);
    return coin;
}
console.log(solution(3, [1, 2, 5], 15));

// 다시 풀기
function solution(N, coin, t) {
    let answer = Number.MAX_SAFE_INTEGER; // 최소 거슬러줄 동전개수
    function dfs(l, sum) {
        if (sum > t) return; // 분기처리해주는걸 dfs컷팅이라한다.
        if (l >= answer) return; // 더 큰 레벨을 갈 필요가 없음.(가지치기)
        if (sum === t) {
            // total값을 건너뛸 수 있기 때문에 분기처리해주자.
            answer = Math.min(answer, l);
            return;
        } else {
            for (let i = 0; i < N; i++) {
                dfs(l + 1, sum + coin[i]);
            }
        }
    }
    dfs(0, 0);
    return answer;
}
console.log(solution(3, [1, 2, 5], 15));
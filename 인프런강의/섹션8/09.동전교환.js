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
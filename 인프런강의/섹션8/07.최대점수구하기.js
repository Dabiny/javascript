function solution(n, m, arr){
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(l, sum, t){
        if (t > m) return;
        if(l === n){
            answer = Math.max(sum, answer);
            return;
        }
        else{
            DFS(l + 1, sum + arr[l][0], t + arr[l][1]);
            DFS(l + 1, sum, t);
        }
    }
    DFS(0, 0, 0);
    return answer;
}
console.log(solution(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
]));
// 개수가 커지면 다이나믹으로 풀어야한다. 
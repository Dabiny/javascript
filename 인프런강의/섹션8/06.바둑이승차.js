function solution(kg, arr) {
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(l, sum) {
        if (l === arr.length){
            if(kg >= sum) answer = Math.max(sum, answer);
            return;
        }
        else {
            DFS(l + 1, sum + arr[l]); // o
            DFS(l + 1, sum); // x
        }
    }
    DFS(0, 0);
    return answer;
}
console.log(solution(259, [81, 58, 42, 33, 61]));
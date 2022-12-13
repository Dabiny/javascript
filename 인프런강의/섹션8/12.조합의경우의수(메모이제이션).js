// function solution(n, r){
//     let answer;
//     function DFS(n, r){
//         if(r == 0) {
//             return 1;
//         }
//         else{
//             return DFS(n - 1, r - 1) + DFS(n - 1, r);
//         }
//     }
//     answer = DFS(n, r);
// }
// console.log(solution(33, 19));

// function solution(n, r){
//     let answer;
//     let dy = Array.from(Array(35), () => Array(35).fill(0)); // 2차원 초기화
//     function DFS(n, r){
//         if (dy[n][r] > 0) return dy[n][r]; // 여기서 메모 체크
//         if(r === 0 || r === n) {
//             return 1;
//         }
//         else{
//             return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r); // 메모저장
//         }
//     }
//     answer = DFS(n, r);
//     return answer;
// }
// console.log(solution(5, 3)); // 
// console.log(solution(33, 19)); // 엄청난숫자..4초정도 걸림 너어무시간걸림
// // 이걸 줄이기위해선 메모이제이션을 사용해보자. 
// // 메모이제이션 꼭 다시 보기 !!!!


function solution(n, r) {
    let memo = Array.from({ length: n + 2 }, () =>
        Array.from({ length: r + 2 }, () => 0)
    ); // memoizaition 메모장 만들기 (약간 넉넉히 만들기)

    function dfs(n, r) {
        // 메모장 확인
        if (memo[n][r] > 0) return memo[n][r];
        if (r === 0 || n === r) return 1;
        else {
            return (memo[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
            // memo적어놓고 memo[n][r]값 리턴;
        }
    }
    let ansewr = dfs(n, r);
    return ansewr;
}
console.log(solution(33, 19));
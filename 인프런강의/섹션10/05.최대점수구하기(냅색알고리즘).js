// dfs로 푼 문제
// function solution(n, m, arr) {
//     let answer = Number.MIN_SAFE_INTEGER; // 최대점수 구하기
//     const ch = Array.from({length: n + 1}, () => 0);
//     function dfs(l, sum, time) {
//         if(time === m) {
//             answer = Math.max(answer, sum);
//             return;
//         }else{
//             for (let i = l; i < n; i++) {
//                 if(ch[i] === 0) {
//                     ch[l] = 1;
//                     dfs(l + 1, sum + arr[i][0], time + arr[i][1]);
//                     ch[l] = 0;
//                 }
//             }
//         }
//     }
//     dfs(0, 0, 0); // level, 점수, 시간
//     return answer;
// }
console.log(solution(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
]));

// 냅색 dp 알고리즘
function solution(n, m, arr) {
    let answer = Number.MIN_SAFE_INTEGER; // 최대 점수
    let dy = Array.from({length: m + 1}, () => 0);

    dy[0] = 0; // dy[0시간] = 점수 0점;

    for(let i = 0; i < n; i++) {
        for (let j = arr[i][1]; j <= m; j++) {
            dy[j] = Math.max(dy[j], dy[j - arr[i][1]] + arr[i][0]);
        }
        console.log(dy);
    }
    answer = dy[m];
    return answer;
}
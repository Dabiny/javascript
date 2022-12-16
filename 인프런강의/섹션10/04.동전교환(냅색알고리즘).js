// dfs로 푸는 방식 (내가 짠 코드)
// function solution(n, arr, m) {
//     let answer = Number.MAX_SAFE_INTEGER; // 최소 개수
//     function dfs(l, sum) {
//         if (sum > m) return;
//         if(sum === m) {
//             answer = Math.min(answer, l);
//         } else {
//             for (let i = 0; i < n; i++) {
//                 dfs(l + 1, sum + arr[i]);
//             }
//         }
//     }
//     dfs(0, 0);
//     return answer;
// }
// console.log(solution(3, [1, 2, 5], 15));

// 가방문제라고도 한다. 
// 동전 거슬러주는 문제중 거슬러주는 금액이 몇만 몇십만이 넘어가면 다이나믹으로 풀어야한다.
// 가방 알고리즘으로 푸는 방식 (해설코드)
function solution(n, coin, m) {
    let answer = 0; // 최소 개수
    let dy = Array.from({length: m + 1}, () => 1000); //큰숫자로 초기화하기
    // dy의 index 거스름돈이라고 생각하면됨. i => i원 -> 15 -> 15원
    // dy[2원]의 value는 거스름돈을 받을 동전개수라고 생각하면된다. dy[2원] = 1개
    // m <= 500까지니까 넉넉잡아 1000으로 초기화해준것

    dy[0] = 0; // 0원은 0;이라고 초기화 해주기 

    for (let i = 0; i < n; i++) {
        for (let j = coin[i]; j <= m; j++) {
            dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
            // dy[j - coin[0](=1)원] ? 
            // 후에 무조건 동전을 추가할거니까 빼주는것이다. 
            // dy[1 - 1] = dy[0] = dy[0] + 1
            // dy[1] = Math.min(dy[1], dy[0] + 1) => 후자가 1개이기때문에 후자로 갱신
        }
        console.log(dy);
    }
    
    answer = dy[m];
    return answer;
}
console.log(solution(3, [1, 2, 5], 15));
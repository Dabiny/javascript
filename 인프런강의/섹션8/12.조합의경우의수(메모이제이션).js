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

function solution(n, r){
    let answer;
    let dy = Array.from(Array(35), () => Array(35).fill(0)); // 2차원 초기화
    function DFS(n, r){
        if (dy[n][r] > 0) return dy[n][r]; // 여기서 메모 체크
        if(r === 0 || r === n) {
            return 1;
        }
        else{
            return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r); // 메모저장
        }
    }
    answer = DFS(n, r);
    return answer;
}
console.log(solution(5, 3)); // 
console.log(solution(33, 19)); // 엄청난숫자..4초정도 걸림 너어무시간걸림
// 이걸 줄이기위해선 메모이제이션을 사용해보자. 
// 메모이제이션 꼭 다시 보기 !!!!
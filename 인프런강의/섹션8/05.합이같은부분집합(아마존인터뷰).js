// function solution(n) {
//     let ch = Array.from({length: Math.max(...n)}, () => 0);
//     let answer = 'NO';
//     let sumArr = [];
//     function DFS(v, i) {
//         if(i === n.length - 1){
//             let sum = 0;
//             for (let i = 1; i <= ch.length; i++){
//                 if (ch[i] === 1) sum += i;
//             }
//             if (sum !== 0) sumArr.push(sum);
//         }
//         else{
//             ch[v] = 1;
//             DFS(v[i + 1], i + 1); // 내가 막힌 부분ㅜㅜ

//             ch[v] = 0;
//             DFS(v[i + 1], i + 1);
//         }
//     }
//     DFS(n[0], 0);
//     return sumArr;
// }  
// console.log(solution([1, 3, 5, 6, 7, 10]));

function solution(N, Q) {
    let answer = "NO",
        flag = 0;
    let total = Q.reduce((p, c) => p + c, 0);
    function dfs(l, sum) {
        if (flag) return; // 이미 답을찾아서 종료
        if (l === N) {
            // 5까지 적용하고 6일때
            if (total - sum === sum) {
                answer = "YES";
                flag = 1; // 답을 찾았다는 뜻
            }
        } else {
            dfs(l + 1, sum + Q[l]); // O
            dfs(l + 1, sum); // X
        }
    }
    dfs(0, 0);
    return answer;
}
console.log(solution(6, [1, 3, 5, 6, 7, 10]));
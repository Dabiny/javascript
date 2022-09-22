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

function solution(arr) {
    let answer = "NO";
    let total = arr.reduce((a, b) => a + b, 0);
    let n = arr.length;
    let flag = 0;

    function DFS(l, sum) {
        if (flag) return; 
        if(l === n) {
            if ((total - sum) === sum){
                answer = "YES";
                flag = 1;
            }
        }
        else{
            DFS(l + 1, sum + arr[l]); // o
            DFS(l + 1, sum); // x
        }
    }
    DFS(0, 0);
    return answer;
}  
console.log(solution([1, 3, 5, 6, 7, 10]));
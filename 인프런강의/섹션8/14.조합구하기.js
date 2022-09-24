// function solution(n, m){
//     let answer = 0;
//     let dy = Array.from(Array(11), () => Array(11).fill(0));
//     let ch = Array.from({length: n + 1}, () => 1);
//     function DFS(n, r){
//         if (dy[n][r] > 0) return dy[n][r];
//         if(r === 0 || n === r){
//             return 1;
//         }
//         else{
//             for (let i = 1; i <= n; i++) {
//                 ch[i] = 1;
//                 dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
//                 ch[i] = 0;
//             }
//         }
//     }
//     answer = DFS(n, m);
//     return answer;
// }
// console.log(solution(4, 2));


function solution(n, m){
    let answer = [];
    let tmp = Array.from({length: m}, () => 0); // m개짜리 tmp
    function DFS(l, s){ // level, start
        
        if(l === m){ // 종점인 지점
            answer.push(tmp.slice());
        }
        else{ // 뻗어나가는 지점
            for(let i = s; i <= n; i++){
                tmp[l] = i; 
                console.log("i: " + i + " s: " + s);
                console.log(tmp);
                DFS(l + 1, i + 1); // i가 그림과같이 + 1해주면서 뻗어간다. 

            }
        }
    }
    DFS(0, 1);
    return answer;
}
console.log(solution(4, 2));
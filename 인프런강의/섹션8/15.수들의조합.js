function solution(n, k, m) {
    let tmp = Array.from({length: k}, () => 0);
    let answer = 0;

    function DFS(l, s) {
        if(l === k){
            let sum = 0;
            console.log('level: ' + l + ' start: ' + s);
            console.log(tmp);
            for(let i = 0; i < tmp.length; i++) {
                sum += tmp[i];
            }
            if (sum % m === 0) {
                answer++;
            }
            return;
        }
        else {
            for (let i = s; i < n.length; i++) {
                tmp[l] = n[i];
                console.log('level: ' + l + ' start: ' + s);
                DFS(l + 1, s + 1);
            }
        }
    }
    DFS(0, 0);
    return answer;
}
console.log(solution([2, 4, 5, 8, 12], 3, 6)); // 2



// 해설
// function solution(n, k, m) {
//     let answer = 0;

//     function DFS(l, s, sum) {
//         if(l === k){
//             if (sum % m === 0) answer++;
            
//         }
//         else {
//             for (let i = s; i < n.length; i++) {
//                 DFS(l + 1, i + 1, sum + n[i]);
//             }
//         }
//     }
//     DFS(0, 0, 0);
//     return answer;
// }
// console.log(solution([2, 4, 5, 8, 12], 3, 6)); // 2
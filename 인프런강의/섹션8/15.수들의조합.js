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


// function solution(n, k, number, target) {
//     let answer = 0;
//     let tmp = Array.from({length: k}, () => 0);
//     let ch = Array.from({length: n}, () => 0); 
//     function dfs(l, si) {
//         if(l === k) {
//             const sum = tmp.reduce((p, c) => p + c, 0);
//             if (sum % target === 0) answer++;
//             console.log(tmp);
//             return;
//         } else {
//             for (let i = si; i < n; i++) {
//                 tmp[l] = number[i];
//                 dfs(l + 1, i + 1);   
//             }
//         }
//     }
//     dfs(0, 0) // level, startIndex
//     return answer;
// }
// console.log(solution(5, 3, [2, 4, 5, 8, 12], 6));

// tmp 없이 쓰는 법 이게 더 빠를것 같다. 배열에 넣어주는것이 아닌 ...
function solution(n, k, number, target) {
    let answer = 0;
    function dfs(l, si, sum) {
        if (l === k) {
            if (sum % target === 0) answer++;
            return;
        } else {
            for (let i = si; i < n; i++) {
                dfs(l + 1, i + 1, sum + number[i]);
            }
        }
    }
    dfs(0, 0, 0); // level, startIndex, sum
    return answer;
}
console.log(solution(5, 3, [2, 4, 5, 8, 12], 6));
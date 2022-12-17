// function solution(s) {
//     let str = s;
//     for (let i = 0; i < str.length; i++) {
//         if (str.search(/AWS/g) !== -1) {
//             str = str.replace(/AWS/g, '');
//         }
//     }
//     return str.length === 0 ? -1 : str;
// }
// console.log(solution('AWAWSSG'));

// function solution(num) {
//     const obj = {};
//     const arr = num.toString().split('');
//     let size = 1;
//     for (let i = arr.length; i >= 0; i--) {
//         obj[arr[i]] = size;
//         size *= 10;
//     }
//     console.log(arr);

// }
// console.log(solution(111));

// function solution(a, k) {
//     let ch = [];
//     let arr = [];
//     function dfs(v) {
//         if(v === a.length) {
//             let tmp = [];
//             for (let i = 0; i < ch.length; i++) {
//                 if(ch[i] === 1) tmp.push(a[i]);
//             }
//             if (tmp.length > 0) arr.push(tmp);
//         }else{
//             ch[v] = 1;
//             dfs(v + 1);

//             ch[v] = 0;
//             dfs(v + 1);
//         }
//     }
//     dfs(0); // a[0]부터 시작
//     let answer = Number.MIN_SAFE_INTEGER;
//     for (let x of arr) {
//         let sum = x.reduce((prev, curr) => prev + curr, 0);
//         if (sum === k) {
//             answer = Math.max(answer, sum);
//         }
//     }
//     return answer;
// }
// console.log(solution([3, 1, 2, 1], 3));

// 최소 트리경로
function solution(n, edge, visitNode) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const ch = Array.from({ length: n + 1 }, () => 0);
    for (let [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }

    let answer = Number.MAX_SAFE_INTEGER;
    let arr = [];
    let cnt = 0;
    function dfs(v) {
        ch[v] = 1;
        cnt++;
        for (let i = 0; i < graph[v].length; i++) {
            if (ch[graph[v][i]] === 0) {
                dfs(graph[v][i]);
            }
        }
    }
    dfs(1); //1에서 시작, 경로 길이
    return cnt;
}
console.log(
    solution(
        5,
        [
            [1, 2],
            [1, 3],
            [3, 4],
            [3, 5],
        ],
        [2, 4]
    )
);

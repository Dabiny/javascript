function solution(queries) {
    let answer = [];
    let end = false;
    let memo = [];
    function dfs(arr, flag, memoArr) { 
        if (isPelin(arr) && !end) {
           end = true;
           if (flag) {
            answer.push(1);
            memo.push(memoArr);
            return;
           } else {
            answer.push(0);
            return;
           }
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === 0) {
                    continue;
                } else {
                    arr[i]--;
                    dfs(arr, !flag, memoArr);
                }
            }
        }
    }
    for (let i = 0; i < queries.length; i++) {
        end = false;
        dfs(queries[i], false, queries[i]);
    }
    
    return answer;
}
function isPelin(arr) {
    const str = arr.join('');
    for (let i = 0; i < parseInt(str.length / 2); i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(
    solution([
        [2, 0],
        [3, 1],
    ])
);

// console.log(
//     solution([
//         [1, 4, 3],
//         [1, 2, 2],
//     ])
// );
// console.log(
//     solution([
//         [0, 2, 0, 1],
//         [0, 1, 0, 1],
//     ])
// );


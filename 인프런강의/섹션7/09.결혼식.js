// function solution(arr) {
//     let times = [...arr];
//     for (let i = 0; i < arr.length; i++) times[i][1]--;
//     times.sort((a, b) => a[0] - b[0]);
    
// }

// console.log(solution([
//     [14, 18],
//     [12, 15],
//     [15, 20],
//     [20, 30],
//     [5, 14],
// ]));

// 해설 그리디 대표적문제
function solution(times) {
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];
    for (let x of times) {
        T_line.push([x[0], 's']); // 온시간과 가는시간을 분리해서 배열에 넣어줌
        T_line.push([x[1], 'e']);
    }
    T_line.sort((a, b) => {
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt(); // 아스키코드가 e가 더 높음.
        else return a[0] - b[0];
    });
    let cnt = 0;
    for (let x of T_line) {
        if(x[1] === 's') cnt++;
        else cnt--;
        answer = Math.max(cnt, answer); // 큰값으로 바꿔치기
    }
    return answer;
}

console.log(solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
]));
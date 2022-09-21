// function solution(arr) {
//     let a = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if ((arr[i][1] - arr[i][0]) < (arr[i + 1][1] - arr[i + 1][0])) {
            
//         }
        
//     }

    
// }
// console.log(solution([
//     [1, 4],
//     [2, 3],
//     [3, 5],
//     [4, 6],
//     [5, 7]
// ]));


// 그리디의 대표적인 문제 
// 해설 최대한 많은 회의 개수 세기
// 1. 정렬 기준 일찍끝나는 시간 순 시작순으로 하면 회의시간이 긴경우가 있다. 무조건 빨리 끝나는게 굿
// 회의시간기준도 긴시간 회의 두개 사이에 짧은게 겹칠수도 있다. 
// 백준 기출문제

function solution(arr) {
    let answer = 0;
    arr.sort((a, b) => { // 끝나는 시간이 빠른순부터 정렬
        if (a[1] === b[1]) return a[0] - b[0]; //예시2 반례상황
        else return a[1] - b[1];
    });
    let endTime = 0; // 회의 끝나는시간 변수
    arr.forEach((_, i, arr) => {
        if (endTime <= arr[i][0]) { // 끝나는시간이 다음회의 시작시간보다 일찍끝나거나 같으면
            answer++;
            endTime = arr[i][1];
            console.log(arr[i]);
        }
    }, 0)
    return answer;
}
console.log(solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7]
]));

console.log(solution([ //끝나는시간이 다 같은 반례 경우 시작시간으로 오름차순해야한다. 
    [3, 3],
    [1, 3],
    [2, 3]
]));
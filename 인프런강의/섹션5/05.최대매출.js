// function solution(arr, day) {
//     let answer = Number.MIN_SAFE_INTEGER;

//     for (let i = 0; i < arr.length - day; i++) {
//         let sum = arr[i];
//         for (let j = i + 1; j < i + day; j++) {
//             sum += arr[j];
//         }
//         answer = Math.max(answer, sum);
//     }
//     return answer;
// }
// console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));



// 슬라이딩 윈도우 알고리즘 옆으로 창문열듯이 진행
// n * k 2번 포문돌아야함 
// n만큼만 도는 것
function solution(arr, day) {
    let answer = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < day; i++) sum += arr[i];
    answer = sum;

    for (let i = day; i < arr.length; i++) {
        sum += (arr[i] - arr[i - day]); // 밀고가는것
        answer = Math.max(answer, sum);
    }
    return answer;
}
console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));

// function solution(arr) {
//     let answer = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let tmp = 0;
//                 tmp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = tmp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(solution([13, 5, 11, 7, 23, 15]));

// 해설
function solution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;
        for (let j  = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idx]) idx = j;
        }
        // tmp 대체
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return answer;
}
console.log(solution([13, 5, 11, 7, 23, 15]));


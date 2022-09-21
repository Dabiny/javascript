// function solution(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]){
//             let tmp = arr[i + 1];
//             arr[i + 1] = arr[i];
//             arr[i] = tmp;
            
//             for (let j = i; j >= 0; j--) {
//                 if (j === 0) continue;
//                 if (arr[j] < arr[j - 1]) {
//                     let tmp = arr[j - 1];
//                     arr[j - 1] = arr[j];
//                     arr[j] = tmp;
//                 }
//             }
//         }
//     }
//     return arr;
// }
// console.log(solution([11, 7, 5, 6, 10, 9])); // [ 5, 6, 7, 9, 10, 11 ]
/*
[ 7, 11, 5, 6, 10, 9 ]
[ 5, 7, 11, 6, 10, 9 ]
[ 5, 6, 7, 11, 10, 9 ]
[ 5, 6, 7, 10, 11, 9 ]
[ 5, 6, 7, 9, 10, 11 ]
[ 5, 6, 7, 9, 10, 11 ]
[ 5, 6, 7, 9, 10, 11 ]
*/

function solution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i], j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > tmp) arr[j + 1] = arr[j];
            else break;
        }
        arr[j + 1] = tmp;
        console.log(answer);
    }
    return answer;
}
console.log(solution([11, 7, 5, 6, 10, 9])); // [ 5, 6, 7, 9, 10, 11 ]

/*
[ 11, 7, 5, 6, 10, 9 ]
[ 7, 11, 5, 6, 10, 9 ]
[ 5, 7, 11, 6, 10, 9 ]
[ 5, 6, 7, 11, 10, 9 ]
[ 5, 6, 7, 10, 11, 9 ]
[ 5, 6, 7, 9, 10, 11 ]
[ 5, 6, 7, 9, 10, 11 ]
*/

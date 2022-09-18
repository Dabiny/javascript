// function solution(arr, m){
//     let answer = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i];
//         if (sum <= m) answer++;

//         for (let j = i + 1; j < arr.length; j++){
//             sum += arr[j];
//             if (sum <= m) answer++;
//             if (sum > m) break;
//         }
//     }
//     return answer;
// }

// console.log(solution([1, 3, 1, 2, 3], 5));

// function solution(arr, m){
//     let answer = 0, lt = 0, sum = 0;
//     for (let rt = 0; rt < arr.length; rt++) {
//         if (arr[rt] <= m) answer++;
//         sum += arr[rt];
//         if (sum <= m) answer++;
//         if (sum > m) {
//             while(lt < rt){
//                 sum -= arr[lt++];
//                 if (sum <= m) answer++;
//             }
//         }
//     }
//     return answer;
// }

// console.log(solution([1, 3, 1, 2, 3], 5));

// 복습하기 
function solution(arr, m){
    let answer = 0, lt = 0, sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        while(sum > m) { // m보다 sum이 크면
            sum -= arr[lt++];
        }
        answer += (rt - lt + 1); // 그림참조
    }
    return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
// function solution(arr, m) {
//     let answer = 0;

//     for(let i = 0; i < arr.length - 2; i++) {
//         let sum = arr[i];
//         for (let j = i; j < arr.length; j++){
//             sum += arr[j];
//             if(sum > m) break;
//             if (sum === m) answer++;
//         }
//     }
//     return answer;
// }
// console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));

// 내가 시도해본 투포인터 와일문 하나로만 돌려고 하니 실패함.
// function solution(arr, m) {
//     let answer = 0;
//     let lt = rt = 0; // lt가 rt를 따라가면서 빼주는 알고리즘
//     let sum = 0; // sum이 m보다 작으면 rt가 더하면서 증가, 크면 lt가 빼주면서 증가
//     while (rt == arr.length) {
//         if (sum == 0 || sum <= m ) {
//             sum += arr[rt++];
//             if (sum == m) answer++;
//         }
//         if (sum > m) {
//             sum -= arr[lt++];
//             if (sum == m) answer++;
//         }
//     }   
//     return answer;
// }
// console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));


// 정말정말 중요하니 복습해서 내것으로 만들기 투포인터 알고리즘의 대표적인 문제.
function solution(arr, m) {
    let answer = 0, lt = 0, sum = 0;
    // rt는 포문 인덱스로 받아야한다. 
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum == m) answer++;
        while (sum >= m) { // sum이 크거나 같으면 같아도 빼야한다.  
            sum -= arr[lt++];
            if (sum == m) {
                answer++;
                console.log(lt, rt);
            }
        }
    }
    return answer;
}
console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
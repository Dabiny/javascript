// function solution(arr, k) {
//     let answer = 0;
//     let ans = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++){
//             for (let m = j; m < arr.length; m++) {
//                 if (i == j || j == m || i == m) continue;
//                 let sum = arr[i] + arr[j] + arr[m];
//                 ans.push(sum);
//             }
//         }
//     }

//     ans.sort((a, b) => b - a);
//     return ans[k - 1];
// }

// console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));


// 해설


function solution(card, k) {
    let answer;
    let tmp = new Set(); // Set객체 생성 겹치는것을 제외해야하기 때문에 !!
    for (let i = 0; i < card.length; i++) {
        for (let j = i + 1; j < card.length; j++) {
            for (let k = j + 1; k < card.length; k++) { 
                tmp.add(card[i] + card[j] + card[k]);
            }
        }
    } 
    let a = Array.from(tmp).sort((a, b) => b - a);
    answer = a[k - 1];
    return answer;
}

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
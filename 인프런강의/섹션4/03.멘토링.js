// 블루투포스 대표적인 문제 하나하나 경우를 다 확인해야함.

// function solution(arr, m) {
//     let answer = 0;
//     let leng = arr[0].length;

//     for (let i = 0; i < leng; i++){
//         for (let j = 0; j < arr.length; j++){
//             let sum1 = 0;
//             let sum2 = 0;
//             for (let k = 0; k < arr.length; k++) {
//                 sum1 += arr[k][i];
//                 sum2 += arr[j][i];
//             }
//             if (sum1 < sum2) answer++;
//             else continue;
//         }
//     }

//     return answer / 2;
// }

// let arr=[[3, 4, 1, 2],
//          [4, 3, 2, 1],
//          [3, 1, 4, 2]];

// console.log(solution(arr, 3));


// 해설
function solution(test, m) {
    let answer = 0; // 횟수 
    let mentoMentee = [];
    n = test[0].length;
    for (let i = 1; i <= n; i++) { //1번학생부터 n번학생까지
        for (let j = 1; j <= n; j++) { // 1번학생부터 n번학생까지, 앞은 멘토 뒤는 멘티
            let cnt = 0;
            if (i == j) continue;
            for (let k = 0; k < m; k++) {
                let pi = 0, pj = 0;
                for (let s = 0; s < n; s++){ // 등수가 학생수만큼 돌아야하니까 s < n
                    if(test[k][s] === i) pi = s; // test[k][s]가 i학생(멘토)이랑 같다면 i학생의 등수는 s다. 
                    if(test[k][s] === j) pj = s; // (멘티의 등수)
                }
                if (pi < pj) cnt++;
            }
            if (cnt === m) {
                mentoMentee.push([i, j]);
                answer++;
            } // 다 m조건을 만족해야 하니까 
        }   
    }
    return {
        answer,
        mentoMentee
    };
}
let arr=[[3, 4, 1, 2],
         [4, 3, 2, 1],
         [3, 1, 4, 2]];

console.log(solution(arr, 3));

// 다시 풀어보기
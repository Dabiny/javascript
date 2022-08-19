// function solution(s, target) {
//     let count = 0;
//     for (let i of s) {
//         if(i == target) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(solution("COMPUTERPROGRAMMING", "R"));

function solution(s, target) {
    let answer = s.split(target).length - 1; 
    //4개로 구분지어지면 그게 r의 개수
    return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
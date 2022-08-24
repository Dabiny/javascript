function solution(s) {
    return s.toUpperCase();
}

console.log(solution("ItisTimeToStudy"));


// function solution(s) {
//     let answer = "";
//     for (let iter of s) {
//         let n = iter.charCodeAt();
//         if (n >= 97 && n <= 122) answer += String.fromCharCode(n - 32); 
//         // 아스키 숫자를 문자열로 바꿔준다. 소문자 -> 대문자는 -32해주면됨.
//         else answer += iter;
//     }
//     return answer;
// }
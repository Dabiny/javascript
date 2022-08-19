function solution(s) {
    let count = 0;
    let str = s.toUpperCase();
    for (let i = 0; i < s.length; i++){
        if (str[i] == s[i]){
            count++;
        }
    }
    return count;
}

console.log(solution("KoreaTimeGood"));

// function solution(s) {
//     let answer = 0;
//     for (let x of s){
//         let num = x.charCodeAt();
//         if (x.charCodeAt() < 97){
//             answer++;
//         }
//     }
//     return answer;
// }

// console.log(solution("KoreaTimeGood"));
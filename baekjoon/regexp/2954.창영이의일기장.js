const fs = require("fs");
let str = fs.readFileSync("/dev/stdin").toString().trim();

let answer = str.replace(/(?<=[aeiou])p[aeiou]/g, '');

console.log(answer);


// 정답
// solution = (s) => {
//     let answer = s.replace(/(apa|epe|ipi|opo|upu)/g, function (match) {
//         console.log(match[0]);
//         return match[0];
//     });
//     return answer;
// };

// // console.log(solution("zepelepenapa papapripikapa"));
// // console.log(solution("bapas jepe doposapadnapa opovapa kepemipijapa "));
// console.log(solution("apapopo"));
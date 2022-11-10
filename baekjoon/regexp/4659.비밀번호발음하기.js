const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
input.pop(); // end 없애기


const ex1 = new RegExp(/[aeiou]/);
const ex2 = new RegExp(/[aeiou]{3}|[bcdfghjklmnpqrstvwxyz]{3}/);
const ex3 = new RegExp(/([^eo])\1/);
for (let i = 0; i < input.length; i++) {
    if (ex1.test(input[i]) && !ex2.test(input[i]) && !ex3.test(input[i])){
        console.log(`<${input[i]}> is acceptable.`);
    }
    else {
        console.log(`<${input[i]}> is not acceptable.`);
    }
}

// function solution(str) {
//     const ex1 = new RegExp(/[aeiou]/);
//     const ex2 = new RegExp(/[aeiou]{3}|[b-df-hj-np-tv-z]{3}/);
//     const ex3 = new RegExp(/([^eo])\1/);

//     if (ex1.test(str) && !ex2.test(str) && !ex3.test(str)) {
//         return `<${str}> is acceptable.\n`;
//     } else {
//         return `<${str}> is not acceptable.\n`;
//     }
// }
// console.log(solution("a"));
// console.log(solution("tv"));
// console.log(solution("ptoui"));
// console.log(solution("bontres"));
// console.log(solution("zoggax"));
// console.log(solution("wiinq"));
// console.log(solution("eep"));
// console.log(solution("houctuh"));
// console.log(solution("end"));


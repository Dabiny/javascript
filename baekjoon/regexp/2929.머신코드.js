// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on("line", function (line) {
//     let count = 0;
//     const str = line.replace(/[A-Z]/g, " ").split(" ");

//     str.map((v, i) => {
//         if (v === "" && (i === 0 || i === str.length - 1)) return;
//         else if (v.length >= 4 && i === str.length - 1) return;
//         else {
//             count += 3 - (v.length % 4);
//         }
//     });
//     console.log(count);
//     rl.close();
// }).on("close", function () {
//     process.exit();
// });

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

// let count = 0;
// const str = input.replace(/[A-Z]/g, " ").split(" ");

// str.map((v, i) => {
//     if (v === "" && (i === 0 || i === str.length - 1)) return;
//     else if (v.length >= 4 && i === str.length - 1) return;
//     else {
//         count += 3 - (v.length % 4);
//     }
// });

// console.log(count);

function solution() {
  let count = 0;
  const a = input.replace(/[A-Z]/g, " ").split(" ");

  a.map((e, i) => {
    if (e === "" && (i === 0 || i === (a.length - 1))) return true;
    else if (e.length >= 4 && i === (a.length - 1)) return true;
    else 
      count += 3 - (e.length % 4);
    } 
  );
  console.log(count);
}
solution();


// function solution (a) {
//     let cnt = 0;
//     let str = a
//     .replace(/[A-Z]/g, ' ').split(' ')



//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '') continue;
//         if (str[i].length > 3) cnt += 3;
//         if (str[i].length < 3) {
//             let s = 3 - str[i].length;
//             cnt += s;
//         }
//     }
//     str
//     return cnt;
// }

console.log(solution("Abcd"));
console.log(solution("EaEbFabG"));
console.log(solution("AbcbBccCDefgh"));
console.log(solution("EaEbFabGaaaa"));
console.log(solution("EaEbFabGEaEbFabG"));
console.log(solution("AA"));
console.log(solution("BaaaaaaCaaaaaDeeeeB"))

// function solution(a) {
//     let count = 0;
//     const str = a.replace(/[A-Z]/g, " ").split(" ");
//     str;
//     str.map((v, i) => {
//         if (v === "" && (i === 0 || i === str.length - 1)) return true;
//         if (v.length >= 4 && i === str.length - 1) return true;

//         count += 3 - (v.length % 4);
//     });
//     return count;
// }



// 정답
const fs = require("fs");
let str = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 0;
let regExp = new RegExp("(?=[A-Z])", "g");
let arr = str.split(regExp);
arr.forEach((el, i) => {
    if (i !== arr.length - 1) {
        if (el.length % 4 !== 0) {
            answer += 4 - (el.length % 4);
        }
    }
});

console.log(answer);
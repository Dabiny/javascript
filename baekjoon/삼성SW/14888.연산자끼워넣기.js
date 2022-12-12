const fs = require("fs");
const filePath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/14888.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let N = +input.shift(); // 전체 수열길이
const A = input
    .shift()
    .split(" ")
    .map((v) => +v); // 수열 배열
const calculate = input
    .shift()
    .split(" ")
    .map((v) => +v); // 연산자 종류 +(0) -(1) *(2) /(3)

let maxAns = -Infinity; // 최대값
let minAns = Infinity; // 최소값


function dfs(l, sum) {
    if (l === N) {
        maxAns = maxAns < sum ? sum : maxAns;
        minAns = minAns > sum ? sum : minAns;
        return;
    } else {
        // 연산자의 갯수(calSum)만큼 포문돌기 조합의 수만큼...
        for (let i = 0; i < 4; i++) {
            if (calculate[i] > 0) {
                calculate[i]--; // 연산자 넣기
                if (i === 0) dfs(l + 1, sum + A[l]);
                else if (i === 1) dfs(l + 1, sum - A[l]);
                else if (i === 2) dfs(l + 1, sum * A[l]);
                else dfs(l + 1, sum >= 0 ? Math.floor(sum / A[l]) : -Math.floor(-sum / A[l])); // 몫만 넣어야함.
                calculate[i]++; // 연산자 다시 되돌리기 (되돌려 놓는 것이 중요!!!)
            }
        }
    }
}

dfs(1, A[0]); // 수열 첫번째부터 넣어줘야댐
console.log(maxAns ? maxAns : 0);
console.log(minAns ? minAns : 0);

// const fs = require("fs");
// const filePath =
//     process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/14888.txt";
// const input = fs.readFileSync(filePath).toString().split("\n");

// const numbers = input[1].split(" ").map((e) => +e);
// const operators = input[2].split(" ").map((e) => +e);

// let max = -Infinity;
// let min = Infinity;

// function operation(num1, num2, operator) {
//     switch (operator) {
//         case 0:
//             return num1 + num2;
//         case 1:
//             return num1 - num2;
//         case 2:
//             return num1 * num2;
//         case 3:
//             const result =
//                 num1 >= 0 ? Math.floor(num1 / num2) : -Math.floor(-num1 / num2);
//             return result;
//     }
// }

// function dfs(index, result, operators) {
//     if (index === numbers.length) {
//         max = Math.max(max, result);
//         min = Math.min(min, result);
//     }

//     for (let i = 0; i < 4; i++) {
//         if (operators[i] > 0) {
//             const newOpers = JSON.parse(JSON.stringify(operators));
//             newOpers[i] -= 1;
//             dfs(index + 1, operation(result, numbers[index], i), newOpers);
//         }
//     }
// }

// dfs(1, numbers[0], operators);

// console.log(max ? max : 0);
// console.log(min ? min : 0);
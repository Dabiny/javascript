// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();
// input = input.split("\n");
// for (let i = 0; i < input.length; i++) {
//     let str = input[i].replace(/problem+/gi, '');
//     console.log(str.length === input[i].length ? 'no':'yes');
// }

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    for (let i = 0; i < input.length; i++) {
        let str = input[i].replace(/problem+/gi, '');
        console.log(str.length === input[i].length ? 'no':'yes');
    }
    process.exit();
});

//readline으로 해야 풀렸던 문제.... 
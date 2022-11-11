const fs = require("fs");
let str = fs.readFileSync("/dev/stdin").toString().trim();

let answer = str.replace(/(chu|pi|ka)/g, "");
console.log(answer.length === 0 ? "YES" : "NO");

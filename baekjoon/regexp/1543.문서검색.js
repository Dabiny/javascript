const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "baekjoon/regexp/1543.txt";
const input = fs.readFileSync(filePath).toString().split('\n');
const str = input.shift();
const targetStr = input.shift();
const regExp = new RegExp(targetStr, "g");
let ans = str.replace(regExp, '*').replace(/[^\*]/g, '').length;
console.log(ans);


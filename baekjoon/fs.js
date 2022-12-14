const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "baekjoon/순열조합문제/1182.txt";
const input = fs.readFileSync(filePath).toString().split('\n');

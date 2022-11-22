const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : 'baekjoon/regexp/15904.txt';
const str = fs.readFileSync(filepath).toString();
const reg = new RegExp(/.*U.*C.*P.*C/);

console.log(answer);

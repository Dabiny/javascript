const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : 'baekjoon/regexp/15904.txt';
const str = fs.readFileSync(filepath).toString();
const reg = new RegExp(/.*U.*C.*P.*C/); 
// .하나임의의문자에 *0회이상U가 반복
console.log(reg.test(str) ? "I love UCPC" : "I hate UCPC");

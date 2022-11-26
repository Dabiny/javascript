const fs = require('fs');
const filePath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/regexp/5637.txt";

const input = fs.readFileSync(filePath).toString().trim();
let str = input.replace(/[\.,\(\)0-9\^_~\{\}\[\]#@$!*\?%+=\/|'"`\\]/gm, '')
.replace(/(E-N-D)/g, '').split('\n');
let word = '';

for (let i = 0; i < str.length; i++) {
    let s = str[i].trim().split(' ').filter((v) => v !== '');
    for (let j = 0; j < s.length; j++) {
        if (word.length < s[j].length) word = s[j];
    }
}
console.log(word.toLowerCase());



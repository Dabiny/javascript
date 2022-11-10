const fs = require("fs");
let str = fs.readFileSync("/dev/stdin").toString();
str = str.split('\n');

for (let i = 0; i < str.length; i++) {
    let answer = str[i];
    while(answer.search(/BUG/g) !== -1) {
        answer = answer.replace(/BUG/g, '');
    }
    console.log(answer);
}
// 정답


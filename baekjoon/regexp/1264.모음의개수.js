const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");


for (let i = 0; i < input.length - 1; i++){
    if (input[i] == '#') break;
    let answer = input[i].toLowerCase().replace(/[^aeiou]/g,'').length;
    console.log(answer);
}

// 정답
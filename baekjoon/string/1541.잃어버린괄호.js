const fs = require("fs");
let str = fs.readFileSync("/dev/stdin").toString();
let numArr = [];
let num = str.split(/[\-]/);
for (let i = 0; i < num.length; i++) {
    if (num[i].includes("+")) {
        let n = num[i].split("+").reduce((a, b) => Number(a) + Number(b));
        numArr.push(n);
    } else {
        let n = Number(num[i]);
        numArr.push(n);
    }
}
console.log(numArr.reduce((a, b) => a - b));

// 더하기는 일단 더해놓고 뺄셈을 해주면 최소값이 나온다. 




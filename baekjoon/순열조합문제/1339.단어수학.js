const fs = require("fs");
const filePath =
    process.platform === "linux"
        ? "/dev/stdin"
        : "baekjoon/순열조합문제/1339.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift(); // 단어의 개수
// const alpa = new Map();
// const str = [];
// for (let i = 0; i < input.length; i++) {
//     let s = input[i].split("");
//     for (let j = 0; j < s.length; j++) {
//         if (alpa[s[j]]) continue;
//         alpa.set(s[j], 0);
//         str.push(s[j]);
//     }
// }

// function dfs(l, cnt) {
//     if (l === str.length) {
//         console.log(alpa);
//         return;
//     } else {
//         for (let i = 0; i < str.length; i++) {
//             if(alpa[str[i]]) continue;
//             // input의 단어를 가져오기
//             alpa.set(str[i], cnt);
//             dfs(l + 1, cnt - 1);
//         }
//     }
// }

// dfs(0, 9);
// 우선순위를 바꿔가면서 하는게 어렵다.... 어떻게 하는건지 ㅜㅜ 
// 노트에 적을땐 자릿수에 따라 숫자를 집어넣으면 되는걸 알았지만 막상 어떻게 구현을 해야할지 막막
// 완전탐색을 했을때 해줘야 할게 너무많고 하면서 길을 잃어버린다. 다른 방법이 없을까
// 노트에서 일단 제일큰 자릿수에 제일큰 숫자를 때려박고 그다음 큰자릿수에 8 7 이런식으로 하고싶은데
// 이런유형은 그리디문제일 것같다.

// 다른사람 해설풀이 (그리디방식)

function solution(input) {
    const alphaObj = {}; // 자릿수를 누적할 때 객체의 키:값 관계를 이용.
    input.slice().map((str) => {
        let size = 1;
        for (let i = str.length - 1; i >= 0; i--) {
            const word = str[i];
            if (alphaObj[word]) alphaObj[word] += size; // 1000 -> 1010으로 더해주는 역할
            else alphaObj[word] = size;
            size *= 10; // 자릿수를 계속 이동하면서 1 10 100 이렇게 ... 자릿수를 알아냄
        } // 자릿수 알아내기
    });

    // entries는 alphaObj를 배열형식으로 만들어준다. 
    const alpaArr = Object.entries(alphaObj).sort((a, b) => b[1] - a[1]);

    let number = 9;  // 내가 구현했던 count
    let sum = 0; // sum (answer)
    for (let i = 0; i < alpaArr.length; i++) {
        sum += alpaArr[i][1] * number--; // 소팅된건 자릿수가 젤 큰것부터니까 차례대로 nubmer를 넣으면된다. --하면서
    }
    return sum;
}
console.log(solution(input));

// 내가 구현하고싶었던 걸 시원하게 풀어준 문제 풀이를 통해서 많이 배웠다. 
// 다시 구현해보면서 내것으로 만들자. 

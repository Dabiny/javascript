function solution(s) {
    let alpa = [];

    for (let i = 0; i < 26; i++){
        alpa[i] = 0;
    }

    for (let i = 0; i < s.length; i++){
        const code = s.charCodeAt(s[i]) - 97;
        if (alpa[code] == 0){
            alpa[code]++;
        }
    }

    let sum = 0;
    for (let i = 0; i < alpa.length; i++){
        if (alpa[i] != 0){
            sum++;
        }
    }
    return alpa;
}

function solution(s) {
    let alpha = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++){
        const code = s.charCodeAt(i) - 97;
        if (alpha[code] == 0){
            alpha[code]++;
        }
    
    }

    let sum = 0;
    for (let i = 0; i < alpha.length; i++){
        if (alpha[i] != 0){
            sum++;
        }
    }
    return sum;
}

let str1 = "google";
let str2 = "aaabb";

console.log(solution(str1));
let num = str1.charCodeAt(str1[0]);
//console.log(typeof(num));



function solution(s) {
    let temp = [];
  
    for (let i = 0; i < s.length; i++) {
      if (!temp.includes(s[i])) temp.push(s[i]);
    }
  
    return temp.length;
  }
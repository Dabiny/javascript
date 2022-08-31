// 실패
// function solution (s) {
//     let arr = [];
//     for (let i = 0; i < s.length; i++) {
//         if (arr.includes(s.indexOf(s[i]))) continue;
//         arr.push(s.indexOf(s[i]));
//     }
//     arr
//     let str = "";
//     let a = [];
//     for (let i = 0; i < arr.length; i++) {
//         let n  = s.length - arr[i];
//         n
//     }
//     for (let i = 1; i < a.length; i++) {
//         let n = Math.abs(a[i] - a[i - 1]);
//         str += String(s[arr[i - 1]]);
//         str += n;
//     }

//     return str;
// }

//console.log(solution("KKHSSSSSSSE")); 

function solution(str) {
    let answer = "";
    let cnt = 1;
    for (let i = 0; i < str.length; i++){
        if (str[i] == str[i + 1]){
            cnt++;
        }
        else {
            if (cnt == 1){
                answer += str[i];
            }
            else {
                answer = answer + str[i] + cnt;
                cnt = 1;
            }
        }
    }
    return answer;
}
console.log(solution("KKHSSSSSSSE")); 


// forEach로 해봤다.
function solution (str) {
    let cnt = 1;
    answer = "";
    [...str].forEach((iter, idx, arr) => {
        if (arr[idx] == str[idx + 1]) cnt++;
        else {
            if (cnt == 1) answer += iter;
            else{
                answer = answer + iter + cnt;
                cnt = 1;
            }
        }
    });
    
    return answer;
}
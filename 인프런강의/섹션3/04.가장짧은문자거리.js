// function solution (s, t) {
//     let arr = [];
//     let answer = new Array(s.length).fill(-1);
//     for (let i = 0; i < s.length; i++){
//         if (s[i] == t) answer[i] = 0;
//     }
   
//     for (let i = 0; i < s.length; i++) {
//         if (answer[i + 1] == 0 || answer[i - 1] == 0) {
//             answer[i] = 1;
//         }
//         if (answer[i + 1] == 1 || answer[i - 1] == 1) {
//             answer[i] = 2;
//         }
//     }

//     answer
// }

// console.log(solution("teachermode", "e"))

function solution(str, t) {
    let cnt = 1000;
    let arr = [];
    if (arr[0] != t) arr[0] = cnt;
    else {
        cnt = 0;
        arr[0] = cnt;
    }

    for (let i = 1; i < str.length; i++) {
        if (str[i] == t){
            cnt = 0;
            arr[i] = cnt;
        }
        else {
            arr[i] = ++cnt;
        }
    }
    
    cnt = 1001;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == t) {
            cnt = 0;
        }
        else {
            arr[i] = Math.min(arr[i], ++cnt);
        }
    }
    return arr;
} 

console.log(solution("teachermode", "e"))

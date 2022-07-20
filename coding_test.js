function solution(s) {
    var answer = [];
    for (let i = 0; i < s.length; i++){
        answer[i] = s.charCodeAt(i);
    }
    return answer;
}

function solution(s) {
    var answer = '';
    for (let i = 0; i < s.length; i++){
         if (s.charCodeAt(i) < 97){
            answer += s[i].toLowerCase();
         }
         if (s.charCodeAt(i) >= 97){
            answer += s[i].toUpperCase();
         }
    }
    return answer;
}

function solution(arr) {
    var answer = 100;
    for (let i = 0; i < arr.length; i++){
        if (answer > arr[i]){
            answer = arr[i];
        }
    }
    return answer;
}

function solution(arr) {
    let count = new Array(100).fill(0);
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        count[arr[i]]++;
    }
    let n = [];
    for (let i = 0; i < count.length; i++){
        if (count[i] != 0){
            n.push(count[i]);
        }
    }
    for (let i = 0; i < n.length; i++){
        if (n[i] == n[i + 1]){
            return false;
        }
    }
    return true;
}
//let arr = [1, 3, 5, 4, 3, 1, 1];
//console.log(solution(arr));

// function solution(ZERO) {
//     let count = 0;
//     // 내림차순 정렬
//     ZERO.sort(function(a, b){
//         return b - a;
//     });

//     for (let i = 0; i < ZERO.length; i++){
//         if (ZERO[i] != ZERO[i + 1])
//             count++;
//     }
//     console.log(count);
//     return count;
// }

// let ZERO = [1, 2, 1, 2];
// solution(ZERO);

// function solution(n, ab) {
//     let arr = [];
//     let count = 0;
    
//     while(n == 0){
//         if (ab[count] != ab[count + 1] && ab[count + 1] == "a"){
//             n--;
//             ab[count + 1] = "b";
//             arr.push(count + 1);
//         }
//         if (ab[count] != ab[count + 1] && ab[count + 1] == "b"){
//             n--;
//             ab[count + 1] = "a";
//             arr.push(count + 1);
//         }
//         count++;
//     }
//     let answer = 0;
//     let max = 0;
//     for (let i = 0; i < ab.length; i++){
//         answer++;
//         if (ab[i] != ab[i + 1] && max <= answer){
//             max = answer;
//             answer = 0;
//         }
//     }
    
//     return max;
// }

//let str = "aabaabaa";
//console.log(solution(1,str));

function solution(ini, trans) {
    let arr = ""
    for (let i = 0; i < ini.length; i++){
        if (ini[i] == trans[i]){
            continue;
        }
        if (ini[i] != trans[i]){
            if (ini[i] === "x"){
                ini[i] = "y";
                
            }
        }
        console.log(ini);
    }
}
let ini = "xyyxyz";
let tran = "yyxxzy";
console.log(solution(ini, tran))


// function permutation(arr){
//     let count = 0;
//     if (arr.length == 0) return 0;
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             count++;
//         }
//     }
//     return count;
// }
// function solution(message) {
//     let uu = 0;
//     let nn = 0;

//     for (let i = 0; i < message.length; i++){
//         if(message[i] == "u"){
//             uu++;
//         }
//         if (message[i] == "n"){
//             nn++;
//         }
//     }
//     let uuArr = [];
//     if (uu > 2){
//         for (let i = 0; i < uu; i++){
//             uuArr[i] = "u";
//         }
//     }
//     let nnArr = [];
//     if (nn > 2){
//         for (let i = 0; i < nn; i++){
//             nnArr[i] = "n";
//         }
//     }

//     let uuNum = permutation(uuArr);
//     let nnNum = permutation(nnArr);
    
//     if (uu == 2){
//         uu = uu * (uu - 1);
//     }
//     if (nn == 2){
//         nn = nn * (nn - 1);
//     }
    

//     if (uuNum != 0 || nnNum != 0){
//         return uuNum + nnNum;
//     }
//     else
//         return uu + nn;
// }
// let str = "nn";
// console.log(solution(str));
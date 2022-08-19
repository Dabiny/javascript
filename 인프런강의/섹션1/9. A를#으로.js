// function solution(s){
//     let str = "";
//     for (let i of s) {
//         if (i == 'A'){
//             str += '#';
//         }
//         else {
//             str += i;
//         }
//     }
//     return str;
// }

// let str="BANANA";
// console.log(solution(str));

//replace를 쓸거면
function solution(s){
    let str = s; //string은 값이 복사됨.
    str = str.replace(/A/g, "#"); // 정규 표현식을 써야한다. 
    return str;
}

let str="BANANA";
console.log(solution(str));
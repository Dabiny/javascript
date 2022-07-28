//1. 
// function solution(arr) {
//     var answer = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 0){
//             answer++;
//         }
//     }
//     return answer;
// }

// let arr = [1, 9, 9, 1, 3, 2, 6];

//2.
// function solution(n) {
//     var answer = 0;
//     let text = n.toString();
//     text.split("");

//     for (let i = 0; i < text.length; i++){
//         if (text[i] % 2 == 0){
//             answer++;
//         }
//     }
//     return answer;
// }

// let n = 2875812;
// console.log(solution(n));

//3.
// function solution(num) {
//     let minus = false;
//     num < 0 ? minus = true : minus = false;
//     let n = Math.abs(num);
//     let rev = n.toString().split("").reverse().join("");
//     if (minus){
//         rev = parseInt(rev);
//         return rev > 100,000 ? 0 : -rev;
        
//     }
//     if (!minus){
//         rev = parseInt(rev);
//         return rev > 100,000 ? 0 : rev;
//     }

// }
// let n = -340;
// console.log(solution(n));

//4.
function solution(s) {
   let str = s.split(/[ \.,\,,\/?,\!]/);
   let arr = [];
   for (let i of str){
    if (i != ''){
        let s = i.split("").reverse().join("");
        arr.push(s);
    }
   }
   return arr;
}

let s = "Hello, World!?";
console.log(solution(s));


//5.
// function solution(A, K) {
//     let arr = [];

//     for (let i = 0; i < A.length; i++){
//         for (let j = 0; j < A.length; j++){
//             let sum = A[i].toString() + A[j].toString();
//             arr.push(parseInt(sum));
//         }
//     }
//     arr.sort(function(a, b){
//         return b - a;
//     });

//     return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(solution(arr, 1));



//6.
// function solution(n) {
//     let bnry = (n).toString(2);
//     let count = 0;
//     let num = 0;

//     for (let i = 0; i < bnry.length; i++){
//         if (bnry[i] === "1"){
//             count++;
//         }
//         else if (bnry[i] === "0"){
//             num = num < count ? count : num;
//             count = 0;
//         }
//     }
//     num = num < count ? count : num;
//     return num;
// }
// let num = 45512311;
// console.log(solution(num));


//7.


//8.




//9.



//10.
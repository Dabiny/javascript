// /* 괄호 짝 찾기 */

// /* user code */
// function answer(str) {
//     // let result = [];
//     // let stack = [];
//     // let arr = [];
//     // for (let i = 0; i < str.length; i++){
//     //     result[i] = [];
//     // }
//     // for(let i = 0; i < str.length; i++){
//     //     if (str[i] == '('){
//     //         stack.push(str[i]);
//     //         arr.push(i);
//     //     }
        
//     //     if (str[i] == ')' && stack[stack.length - 1] == '('){
//     //         stack.pop();
//     //         result[i].push(arr[arr.length-1]);
//     //         result[i].push(i);
//     //         arr.pop();
//     //     }

//     // }
//     // return result;

//     /* -------------------------------*/

//     let result = []; //0
//     // 1. "("은 넣어주고 ")"은 빼주고
//     let stack = []; // 0
//     for (let i = 0; i < str.length; i++){
//         if (str[i] == "("){
//             stack.push(i);
//         }
//         else if (str[i] == ")"){
//             if (stack.length == 0){
//                 return [];
//             }
//             result.push([stack.pop(), i]); //넣어주는 방법
//         }
//     }
//     if (stack.length != 0){
//         return [];
//     }
//     return result;
//   }
  
//   /* main code */
//   let input = [
//     // TC: 1
//     "(a+b)",
  
//     // TC: 2
//     "(a*(b+c)+d)",
  
//     // TC: 3
//     "(a*(b+c)+d+(e)",
  
//     // TC: 4
//     "(a*(b+c)+d)+e)",
  
//     // TC: 5
//     "(a*(b+c)+d)+(e*(f+g))",
//   ];
  
//   for (let i = 0; i < input.length; i++) {
//     process.stdout.write(`#${i + 1} `);
//     console.log(answer(input[i]));
//   }
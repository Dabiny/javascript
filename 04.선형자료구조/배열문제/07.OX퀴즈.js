// /* OX 퀴즈 */

// /* user code */
// function answer(mark) {
//     // let arr = [];
//     // let count = 0;
//     // for (let i = 0; i < mark.length; i++){
//     //     if (mark[i] == 1){
//     //         count++;
//     //         arr[i] = count;
//     //     }
//     //     if (mark[i] == 0){
//     //         count = 0;
//     //         arr[i] = count;
//     //     }
//     // }
//     // let sum = 0;
//     // for (let i = 0; i < arr.length; i++){
//     //     sum += arr[i];
//     // }
//     // return sum;
//     let result = 0;
//     let score = 0;
//     for (let i = 0; i < mark.length; i++){
//       if (mark[i] == 1){
//         result += ++score;
//       }
//       if (mark[i] == 0){
//         score = 0;
//       }
//     }
//     return result;
//   }
  
//   /* main code */
//   let input = [
//     // TC: 1
//     [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  
//     // TC: 2
//     [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  
//     // TC: 3
//     [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
//   ];
  
//   for (let i = 0; i < input.length; i++) {
//     console.log(`#${i + 1} ${answer(input[i])}`);
//   }
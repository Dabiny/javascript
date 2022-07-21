// /* 기차 운행 */

// /* user code */
// function answer(train) {
//     let arr = [];   // 플랫폼
//     // let tr = [1, 2, 3];     // 기차
//     // let index = 0;
//     // for (let i = 0; i < tr.length; i++){
//     //     if (arr.length == 0){
//     //         arr.push(tr[i]);
//     //         if (arr[length - 1] == train[i])
//     //             arr.pop();
//     //     }
//     //     if (arr.length != 0){
//     //         for (let j = i + 1; j < tr.length; i++){
//     //             arr.push(tr[j]);
//     //         }
//     //     }
//     //     if (arr[length - 1] == train[i])
//     //         arr.pop();
//     // }

//     let stack = [];
//     let num = 0;
//     for (let i = 0 ; i < train.length; i++){
//         while (stack.length == 0 || stack[stack.length - 1] < train[i]){
//             stack.push(++num);
//         }

//         if (stack[stack.length - 1] === train[i]){
//             stack.pop();
//         }
//         else
//             return false;
//     }
//     return true;
//   }
  
//   /* main code */
//   let input = [
//     // TC: 1
//     [1, 2, 3],  //나갈때 모양
  
//     // TC: 2
//     [3, 2, 1],
  
//     // TC: 3
//     [3, 1, 2],
//   ];
  
//   for (let i = 0; i < input.length; i++) {
//     process.stdout.write(`#${i + 1} `);
//     console.log(answer(input[i]));
//   }
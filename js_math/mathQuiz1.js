
// /* 1. 등차수열의 항 찾기 */

// /* user code */
// function answer(a, d, n) {
//     let index = 0;

//     //방법 1
//     //let num = 0;
//     // for (let i = 1; ; i++){
//     //     num = a + d *(i - 1);
//     //     if (num > n) break;  //답을 못찾은 부분
//     //     if (num == n){ //답을 찾은 부분
//     //         index = i;
//     //         break;
//     //     }
//     // }
//     // if (index != 0)
//     //     return index;
//     // else
//     //     return -1;

//     //방법2 
//     if ((n - a) % d == 0){
//         index = (n - a) / d + 1;
//     }
//     else
//         index = -1;
//     return index;
//   }
  
//   /* main code */
//   let input = [
//     // TC: 1
//     [1, 2, 7],
//     // TC: 2
//     [2, 3, 10],
//     // TC: 3
//     [3, 5, 23],
//   ];
  
//   for (let i = 0; i < input.length; i++) {
//     console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
//   }
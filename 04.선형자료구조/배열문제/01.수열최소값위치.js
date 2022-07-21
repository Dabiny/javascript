// /* 수열 최소값 위치 */

// /* user code */
// function answer(nums) {
//     let result = [];
//     let num = 0; 
//     let start = nums[0]; //시작값 or 최소값
//     for (let i = 1; i < nums.length; i++){
//         if (start > nums[i])
//             start = nums[i];
//     }
//     for (let i  = 0; i < nums.length; i++){
//         if (start == nums[i])
//             result.push(i);
//     }

//     return result;
//   }
  
//   /* main code */
//   let input = [
//     // TC: 1
//     [5, 2, 10, 2],
  
//     // TC: 2
//     [4, 5, 7, 4, 8],
  
//     // TC: 3
//     [12, 11, 11, 16, 11, 12],
//   ];
  
//   for (let i = 0; i < input.length; i++) {
//     process.stdout.write(`#${i + 1} `);
//     console.log(answer(input[i]));
//   }
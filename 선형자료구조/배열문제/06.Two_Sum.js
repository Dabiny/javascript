// /* two sum */

// /* user code */
// function answer(nums, target) {
//     let index = [];
//     // for (let i = 0; i < nums.length; i++){
//     //     if (target < nums[i])
//     //         continue;
//     //     let sum = nums[i];
//     //     for (let j = i + 1; j < nums.length; j++){
//     //         if (target < nums[j])
//     //             continue;
//     //         sum += nums[j];
//     //         if (sum == target){
//     //             index[0] = i;
//     //             index[1] = j;
//     //             break;
//     //         }
//     //         if (sum > target){
//     //             sum = nums[i];
//     //             continue;
//     //         }
//     //     }
//     // }
//     // 2중포문 해답
//     // for (let i = 0; i < nums.length; i++){
//     //     for (let j = i + 1; j < nums.length; j++){
//     //         if (nums[i] + nums[j] == target)
//     //             return [i, j];
//     //     }
//     // }
//     // 포문 하나
//     // for (let i = 0; i < nums.length; i++){
//     //     if (nums[i] + nums[i + 1] == target)
//     //         return [i, i + 1];
//     // }

//     //키밸류
//     let map = {};
//     for (let i = 0; i < nums.length; i++){
//         if (map[target - nums[i]] != undefined){
//             return [map[target - nums[i]], i];
//         }
//         map[nums[i]] = i;
//     }
//     //return index;
//   }
  
//   /* main code */
//   let input = [
//     // TC: 1
//     [[2, 7, 11, 15], 9],
  
//     // TC: 2
//     [[3, 2, 4], 6],
  
//     // TC: 3
//     [[3, 3], 6],
//   ];
  
//   for (let i = 0; i < input.length; i++) {
//     process.stdout.write(`#${i + 1} `);
//     console.log(answer(input[i][0], input[i][1]));
//   }
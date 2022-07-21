// function answer(blocks){
//     let sum = 0;
//     for (let i = 0; i < blocks.length; i++){
//         sum += blocks[i];
//     }
//     let h = sum / blocks.length;
//     let n = 0;
//     for (let i = 0; i < blocks.length; i++){
//         if (blocks[i] > h){
//             let num = blocks[i] - h;
//             n += num;
//         }
//         else if (blocks[i] <= h){
//             continue;
//         }
//     }
//     return n;
// }

// let input = [
//     [5, 2, 4, 1, 7, 5],
//     [12, 8, 10, 11, 9, 5, 8],
//     [27, 14, 19, 11, 26, 25, 23, 15],
// ];

// for (let i = 0; i < input.length; i++){
//     console.log(`#${i + 1}: ${answer(input[i])}`);
// }
// /*** 2. 두 수 사이 숫자 ***/

// /* user code */
// function answer(x, y) {
//     let result = [];
//     let _x = x < y ? x : y;
//     let _y = y < x ? x : y;

//     for(let i = _x; i <= _y; i++)
//         result.push(i);
//     return result;
//   }
  
// //   if (x > y)
//     [x, y] = [y, x]; //새로운 방법

//   /* main code */
//   let input = [
//     // TC: 1
//     [3, 7],
//     // TC: 2
//     [8, 3],
//     // TC: 3
//     [12, 10],
//   ];
//   for (let i = 0; i < input.length; i++) {
//     process.stdout.write(`#${i + 1} `);
//     console.log(answer(input[i][0], input[i][1]));
//   }
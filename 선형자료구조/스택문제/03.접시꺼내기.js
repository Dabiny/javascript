// /* 접시 꺼내기 */

// /* user code */
// function answer(str) {
//     let result = [];
//     let stack = [];
//     let dish;
//     //문자열로 만드는 방법 1.
//     // for (let i = 97; i <= 97 + str.length - 1; i++){
//     //     dish += String.fromCharCode(i);
//     // }

//     //문자열로 만드는 방법 2.
//     dish = str.split("").sort().join(""); 
    
//     let dish_index = 0;  //내가 구현하지 못한 부분 이중포문 j같은 존재

//     for (let i = 0; i < str.length; i++){
//         while (stack.length == 0 || stack[stack.length-1] < str[i]){
//             stack.push(dish[dish_index++]);
//             result.push(0);
//         }
//         if (stack.length == 0 || stack[stack.length-1] > str[i]){
//             return [];
//         }
//         if (stack[stack.length - 1] == str[i]){
//             stack.pop();
//             result.push(1);
//         }
//     }
//     if (stack.length == 0)
//         return result;
//   }
  
//   /* main code */
//   let input = [
//     // TC: 1
//     "bacd",
  
//     // TC: 2
//     "dabc",
  
//     // TC: 3
//     "edcfgbijha",
//   ];
  
//   for (let i = 0; i < input.length; i++) {
//     process.stdout.write(`#${i + 1} `);
//     console.log(answer(input[i]));
//   }
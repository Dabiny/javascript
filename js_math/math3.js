// // 등차수열 예제 1
// let result;
// function forloop(s, t, number){
//     let acc = 0;
//     for (let i = 1; i <= number; i++){
//         if (i == 1)
//             acc += s;
//         else
//             acc += t;
//         console.log(i, acc);
//     }
//     return acc;
// }
// result = forloop(3, 2, 5); // f(1) = 3, a = 2, 5번돌기
// console.log(result);

// // 등차수열 예제 2
// let res;
// function recursive(s, t, number){
//     if (number == 1)
//         return s;
    
//     return recursive(s, t, number - 1) + t;
// }
// // 5 : (s, t, 4) + 2 , 11 (최종 반환)
// // 4 : (s, t, 3) + 2 , 9
// // 3 : (s, t, 2) + 2 , 7
// // 2 : (s, t, 1) + 2 , 5
// // 1 : 1 => 3

// res = recursive(3, 2, 5);
// console.log(res);




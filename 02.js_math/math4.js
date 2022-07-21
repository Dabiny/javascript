// // 등비 수열 예제 1.
// let result;
// function forloop (f, a, number){
//     let acc = 1;
//     for (let i = 1; i <= number; i++){
//         if (i == 1)
//             acc *= f;
//         else
//             acc *= a;
//         console.log(i, acc);
//     }
//     return acc;
// }

// result = forloop(3, 2, 5);

// // 등비 수열 예제 2.
// let res;
// function recursive(f, a, number){
//     if (number == 1)
//         return f;
//     return recursive(f, a, number - 1) * a;
// }

// res = recursive(3, 2, 5);
// console.log (res);
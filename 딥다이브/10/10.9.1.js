// var x = 1, y = 2;
// var obj = {
//     x: x,
//     y: y
// };

// console.log (obj);

let x = 1, y = 2;
const obj = {
    x,  // 생략가능
    y
};
console.log(obj); //{ x: 1, y: 2 }
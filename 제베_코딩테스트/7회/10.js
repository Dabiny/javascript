// function solution(h, w, areaText) {
//   let arr = [];
//   for (let i = 0; i < h; i++) {
//     arr[i] = [];
//   }
  
//   for (let i = 0; i < h; i++) {
//     for (let j = 0; j < w; j++) {
//         arr[i][j] = 
//     }
//   }
//   arr
// }

//console.log(solution(3, 6, "@@...@@....@@@..@@"))


var num = 4;//           
var arr = [1,4,5,6,34,34,67,895,2456,87,9,5,23,884,56];
var Arr = new Array(Math.ceil(arr.length/num));
for(var i = 0; i<Arr.length;i++){
Arr[i] = new Array();
for(var j = 0; j<num; j++){
Arr[i][j] = '';
}
}
for(var i = 0; i<arr.length;i++){
Arr[parseInt(i/num)][i%num] = arr[i]; 
} 
console.log(Arr)
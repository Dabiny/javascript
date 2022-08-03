// function solution(s) {
//     var answer = s.split("").reverse().join("");
//     return answer;
// }
// console.log(solution("apple"));


// function solution(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] == nums[j] && 0 <= i && i < j && j < nums.length){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(solution([2,5,6,3,2,6,6]));

// function solution(array, s) {
//     let count = 0;
    
//     for (let i = 0; i < array.length; i++){
//         let flag = true;
//         for (let j = 0; j < array[i].length; j++){
//             if (array[i][j] !== s[j]){
//                 flag = false;
//             }
//         }
//         if (flag === true){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(solution(['n','nav','nev'], "naver"));

// function solution(sentence, word) {
//     let arr = sentence.split(" ");
//     let index = arr.includes(word) ? arr.indexOf(word) : -1;
//     return index;
// }
// console.log(solution("Hello every world", "every"));

// function solution(nums, n) {
//     let answer = 0;
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] == n){
//             return i;
//         }
//     }    
//     return -1;
// }
// console.log(solution([3, 2, 1, 1, 2, 5, 7, 5, 2, 1, 100], 1));

// function solution(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] == nums[j] && 0 <= i && i < j && j < nums.length){
//                 if (nums[i] % 2 == 0){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }
// console.log(solution([4, 1, 2, 1, 4]));


// function solution(array, s) {
//     let count = 0;
//     let sArr = s.split("");
//     for (let i = 0; i < array.length; i++){
//         let flag = true;
//         for (let j = 0; j < s.length; j++){
//             if (s[j] !== array[i][j]){
//                 flag = false;
//             }
//         }
//         if (flag == true) count++;
//     }
//     return count;
// }
// console.log(solution(['apple','banana','kakao', 'apache'], "ap"));
// function Stack(array){
//     this.array = array ? array : [];
// }
// Stack.prototype.push = function (element) {
//     return this.array.push(element);
// };
// Stack.prototype.pop = function () {
//     return this.array.pop();
// };
// Stack.prototype.peek = function () {
//     return this.array[this.array.length - 1];
// };
// Stack.prototype.size = function () {
//     return this.array.length;
// };
// Stack.prototype.isEmpty = function () {
//     return this.array.length == 0;
// };

// function solution(stock) {
//     let stockArr = [];
//     for (let i = 0; i < stock.length; i++){
//         stockArr.push(stock[i]);
//     }
//     let sortArr = stock.sort(function (a, b) { return a - b; });

//     let stk = new Stack();
//     let index = 0;
//     for (let i = 0; i < sortArr.length; i++){
//         if (stk.isEmpty()){
//             stk.push(stock[index++]);
//         }
//         if (!stk.isEmpty() && stk.peek() == sortArr[i]){
//             stk.pop();
//         }
//         if (!stk.isEmpty() && stk.peek() != sortArr[i]){
//             stk.push(sortArr[i]);
//         }
//     }
//     if (stk.isEmpty()){
//         return 1;
//     }
//     return 0;
// }
// console.log(solution([1, 2, 5, 4, 3]));


function solution(param0) {
    let people = 1;
    let queue = [];
    for (let i = 0; i < param0.length; i++){
        if (param0[i].length == 1){
            queue.push(param0[i]);
        }
        if (param0[i].length != 1) {
            for (let j = 0; j < param0[i].length; j++){
                if (param0[i][j] == queue[0]){
                    queue.shift();
                }
            }
        }
    }
    people += queue.length;
    return people;
}
console.log(solution(['a', 'b', 'ab', 'd']));
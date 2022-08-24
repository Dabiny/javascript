// function solution(arr) {
//     for (let i = 0; i < arr.length - 1; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i] == arr[j]){
//                 arr.splice(j, 1);
//             }
//         }
//     }
//     return arr;
// }
// console.log(solution(["good", "time", "good", "time", "student"]));

function solution(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) a.push(arr[i]);
    }
    // filter 사용
    let answer = arr.filter(function(v, i) {
        // if (arr.indexOf(v) === i) return true; //참인조건만 넣어서 새로운배열에 요소를 넣는다. 
        return arr.indexOf(v) === i;
    });

    return answer;
}
console.log(solution(["good", "time", "good", "time", "student"]));
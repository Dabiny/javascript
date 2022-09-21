// function solution(arr, m){
//     arr.sort((a, b) => a - b);
//     let index = arr.indexOf(m);
//     return index + 1;
// }
// console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));



function solution(arr, target){
    let answer;
    arr.sort((a, b) => a - b);
    let lt = 0, rt = arr.length - 1; // idx번호
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (arr[mid] === target) {
            answer = mid + 1; //~번째니까 +1
            break;
        }
        else if (arr[mid] > target) {
            rt = mid - 1;
        }
        else lt = mid + 1;
    }
    return answer; // 3
}
console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
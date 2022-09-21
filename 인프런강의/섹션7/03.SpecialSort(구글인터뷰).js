// function solution (arr) {
//     let minus = arr.filter((v) =>  v < 0);
    
// }

// console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));

function solution (arr) {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
// 음수를 순서대로 유지하고 양수들만 오름차순으로 바꾸려면 버블소트를 이용하자


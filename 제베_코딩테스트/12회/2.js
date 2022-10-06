function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.indexOf(arr1[i]) !== -1 && arr2.indexOf(arr1[i]) !== -1) {
            answer.push(arr1[i]);
        }
    }
    return answer.sort();
}

console.log(solution([1, 7, 8, 4], [2, 4, 6, 8]))

// 0.8
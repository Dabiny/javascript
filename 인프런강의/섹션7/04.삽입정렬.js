function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]){
            let tmp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = tmp;
            
            for (let j = i; j >= 0; j--) {
                if (j === 0) continue;
                if (arr[j] < arr[j - 1]) {
                    let tmp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
    }
    return arr;
}
console.log(solution([11, 7, 5, 6, 10, 9])); // [ 5, 6, 7, 9, 10, 11 ]

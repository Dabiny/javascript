function solution(arr, m) {
    let answer = 0;
    let leng = arr[0].length;

    for (let i = 0; i < leng; i++){
        for (let j = 0; j < arr.length; j++){
            let sum1 = 0;
            let sum2 = 0;
            for (let k = 0; k < arr.length; k++) {
                sum1 += arr[k][i];
                sum2 += arr[j][i];
            }
            if (sum1 < sum2) answer++;
            else continue;
        }
    }

    return answer / 2;
}

let arr=[[3, 4, 1, 2],
         [4, 3, 2, 1],
         [3, 1, 4, 2]];

console.log(solution(arr, 3));
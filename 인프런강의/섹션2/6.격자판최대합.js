
function solution(arr) {
    let mxY = 0;
    let mxX = 0;

    for (let y = 0; y < arr.length; y++){ // 가로
        let sum = 0;
        for (let x = 0; x < arr[y].length; x++){
            sum += arr[y][x];
        }
        if (mxX < sum) mxX = sum;
    }
    for (let x = 0; x < arr.length; x++){ // 세로
        let sum = 0;
        for (let y = 0; y < arr[x].length; y++){
            sum += arr[y][x];
        }
        if (mxY < sum) mxY = sum;
    }

    let sum1 = 0; //대각선은 하나이니까 sum1에 저장
    for (let x = 0; x < arr.length; x++){ // 대각선 1
        sum1 += arr[x][x];
    }

    let y = arr.length - 1;
    let sum2 = 0; // 대각선은 하나 sum2저장
    for (let x = 0; x < arr.length; x++){ // 대각선 2
       sum2 += arr[x][y--];
    }

    let A = mxX > mxY ? mxX : mxY; 
    let B = sum1 > sum2 ? sum1 : sum2; //대각선 두개 비교
    console.log(mxX, mxY, sum1, sum2);

    return A > B ? A : B;
}

// let arr=[[10, 13, 10, 12, 15], 
//         [12, 39, 30, 23, 11],
//         [11, 25, 50, 53, 15],
//         [19, 27, 29, 37, 27],
//         [19, 13, 30, 13, 19]];
// console.log(solution(arr));

function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length; //5
    let sum1 = sum2 = 0;

    for (let i = 0; i < n; i++) {
        sum1 = sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum1 += arr[i][j]; //열번호가 돈다. 
            sum2 += arr[j][i]; //행번호가 돈다. 
        }
        answer = Math.max(answer, sum1, sum2); 
    }
    sum1 = sum2 = 0;

    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - i - 1]; // 반대 대각선
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]];
console.log(solution(arr));
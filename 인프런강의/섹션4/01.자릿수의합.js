function solution(arr) {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toString();
        let s = 0;
        
        for (let j = 0; j < str.length; j++) {
            s += parseInt(str[j]);
        }
        sum.push(s);
    }

    let maxNum = arr[0];
    let maxSum = sum[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxSum < sum[i]){
            maxNum = arr[i];
            maxSum = sum[i];
        }
        else if (maxSum == sum[i]) {
            if (maxNum < arr[i]){
                maxNum = arr[i];
                maxSum = sum[i];
            }
        }
    }
   
    return maxNum;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123, 1239, 9321]));


//해설
function solution(arr) {
    let answer, max = Number.MIN_SAFE_INTEGER; 
    for(let x of arr) {
        // 자릿수를 뜯어내야함.
        let sum = 0, tmp = x;
        while(tmp){ // tmp가 0이될때까지 돌기
            sum += (tmp % 10); // 10으로 나머지하면 자릿수가 뜯어짐
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        }
        if (sum == max) {
            if (x > answer) answer = x;
        }
    }

    return answer;
}
// console.log(solution([128, 460, 603, 40, 521, 137, 123, 1239, 9321]));

// 고차함수 쓰기
function solution(arr) {
    let answer, max = Number.MIN_SAFE_INTEGER; 
    for(let x of arr) {
        // 자릿수를 뜯어내야함.
        let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
        if (sum > max) {
            max = sum;
            answer = x;
        }
        if (sum == max) {
            if (x > answer) answer = x;
        }
    }

    return answer;
}
console.log(solution([128, 460, 603, 40, 521, 137, 123, 1239, 9321]));
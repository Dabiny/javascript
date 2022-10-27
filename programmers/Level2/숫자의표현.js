function solution(n) {
    let arr = Array.from({ length: n }, (v, i) => i + 1);
    let sum = (lt = count = 0);
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === n) count++;
        while (sum >= n) {
            sum -= arr[lt++];
            if (sum === n) count++;
        }
    }
    return count;
}

console.log(solution(15));
// 투포인터 다시 연습하기 +9

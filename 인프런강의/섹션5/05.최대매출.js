function solution(arr, day) {
    let answer = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length - day; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < i + day; j++) {
            sum += arr[j];
        }
        answer = Math.max(answer, sum);
    }
    return answer;
}
console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
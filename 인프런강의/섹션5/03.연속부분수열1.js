function solution(arr, m) {
    let answer = 0;

    for(let i = 0; i < arr.length - 2; i++) {
        let sum = arr[i];
        for (let j = i; j < arr.length; j++){
            sum += arr[j];
            if(sum > m) break;
            if (sum === m) answer++;
        }
    }
    return answer;
}
console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
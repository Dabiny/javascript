function solution(arr, m){
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        if (sum <= m) answer++;

        for (let j = i + 1; j < arr.length; j++){
            sum += arr[j];
            if (sum <= m) answer++;
            if (sum > m) break;
        }
    }
    return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
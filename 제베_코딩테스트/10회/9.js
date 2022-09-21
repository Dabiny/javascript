

function solution(N, K) {
    let answer = [];
    let arr = Array.from({length: N}, (_, i) => i + 1);
    let per = [];
    const targetNum = arr[0];
    for (let i = 0; i < N; i++) per.push([]);
    for (let i = 0; i < N; i++) {
        per[i].push(...arr);
        arr.push(arr.shift());
    }
    for (let i = 1; i <= per.length - 1; i++) {
        let flag = [];
        for (let j = 1; j <= per[i].length - 1; j++) {
            if (Math.abs(per[i][j] - i) === K){
                flag.push(false);
            }
            else flag.push(true);
            
        }
        if (flag.every(item => item === true)){
            return per[i];
        }
    }
    
    return -1;
}

console.log(solution(3, 2));
console.log(solution(4, 2));

// 0.0 다시풀기
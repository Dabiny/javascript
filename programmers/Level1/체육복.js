function solution(n, lost, reserve) {
    let mp = new Map();
    let student = Array.from({length: n}, (_, i) => i + 1);
    for (let x of student) mp.set(x, 1); // 모든 체육복 가지고있기
    for (let x of reserve) { // 여벌추가하기
        if (mp.has(x)) mp.set(x, mp.get(x) + 1);
    }
    for (let x of lost) { // 잃어버리기 
        if (mp.has(x)) mp.set(x, mp.get(x) - 1);
    }
    
    let arr = Array.from(mp.values());
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2 && arr[i - 1] === 0) {
            arr[i]--;
            arr[i - 1]++;
            continue;
        }
        if (arr[i] === 2 && arr[i + 1] === 0) {
            arr[i]--;
            arr[i + 1]++;
            continue;
        }
    }
    let answer = arr.filter((v) => v !== 0).length;
    return answer;
}

console.log(solution(5, [2, 4], [2, 4, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(7, [2, 4, 7], [1, 3, 5]));
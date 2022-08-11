function solution(A) {
    const money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];

    let count;
    for (let i = 0; A !== 0; i++){
        // 만약 A / money[i]가 1보다크면 나누고 아니면 0
        count = A / money[i] > 1 ? Math.floor(A / money[i]) : 0;
    }

    return count;
}

console.log(solution(100000));
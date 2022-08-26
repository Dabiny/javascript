function solution(n) {
    let arr = [];
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    for (let x of arr) {
        let binary = x >> 2;
        if (binary == 1) {
            sum++;
        }
    }
    return sum;
}
console.log (solution(6));
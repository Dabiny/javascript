function solution(n) {
    let num = Number.MAX_SAFE_INTEGER; // 1, 2를 만족하는 제일 작은 수
    let binary = n.toString(2).replace(/['0']/g, "").length;

    for (let i = n + 1; i <= 1000000; i++) {
        let iBinary = i.toString(2).replace(/['0']/g, "").length;

        if (iBinary === binary) {
            num = i;
            break;
        }
    }
    return num;
}

console.log(solution(78));
console.log(solution(15));

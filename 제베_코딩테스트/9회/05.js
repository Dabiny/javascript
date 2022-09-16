function solution(n) {
    let mx = 0;

    for (let i = 1; i <= n; i++){
        let pw = Math.pow(i, 3);
        if (pw > n) break;
        mx = Math.max(pw, mx);
    }

    return mx;
}

console.log(solution(15));


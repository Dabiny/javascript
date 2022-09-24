function solution(n) {
    let dy = Array.from({length: n + 1}, () => 0);
    dy[0] = 1;
    dy[1] = 2;

    for (let i = 2; i <= n + 1; i++) {
        dy[i] = dy[i - 2] + dy[i - 1];
    }
    return dy[n]; //돌다리를 다건너야함
}
console.log(solution(7));
// 돌다리건너기 3번째는 초기화를 3개해주어야함
// dy[0] = 1;
// dy[1] = 1;
// dy[2] = 2; 

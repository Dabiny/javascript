function solution(n) {
    let answer = 0;
    let dy = Array.from({length: n + 1}, () => 0);

    dy[1] = 1;
    dy[2] = 2;

    for (let i = 3; i <= n; i++) {
        dy[i] = dy[i - 2] + dy[i - 1];
    }
    answer = dy[n];
    return answer;
}
console.log(solution(7)); // 21

function solution(n) {
    let answer = 0;
    let dy = Array.from({ length: n + 1 }, () => 0);
    dy[1] = 1; // 큰문제를 작게 잘라서 답을 미리 구해논다.
    dy[2] = 2; //

    for (let i = 3; i <= n; i++) {
        // 3번계단부터 시작하기
        dy[i] = dy[i - 2] + dy[i - 1];
        // 3번 -> 2번계단의 경우의수 + 1번계단의 경우의수
        // 1번계단에 서있거나 , 2번계단에 서있거나 두가지경우 (+1, +2계단을 오를수 있다했음)
        // 3번계단은 그럼 2번계단에 서있는경우는 2번계단의 경우의 수와
        // 1번계단의 서있는경우는 1번계단의 경우의수를 합치면 3번에 서있는 경우의수는 3이다.
    }
    answer = dy[n];
    return answer;
}
console.log(solution(7));
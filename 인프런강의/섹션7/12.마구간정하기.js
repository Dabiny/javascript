function count(stable, dist) {
    let cnt = 1, ep = stable[0]; //첫번째 말은 무조건 왼쪽이 최적
    for (let i = 0; i < stable.length; i++) {
        if (stable[i] - ep >= dist) {
            cnt++;
            ep = stable[i]; // 갱신
        }
    }
    return cnt, console.log(cnt);
}

function solution(c, stable) {
    let answer;
    stable.sort((a, b) => a - b);
    let lt = 1; 
    let rt = stable[stable.length - 1];

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        console.log(mid, rt, lt);
        if (count(stable, mid) >= c) {
            answer = mid;
            lt = mid + 1; // 이해안되는부분
        }
        else rt = mid - 1;
    }

    return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
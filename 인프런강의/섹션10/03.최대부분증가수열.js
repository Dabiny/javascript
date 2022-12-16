// 내가 짠 코드
function solution(N, arr) {
    let mx = Number.MIN_SAFE_INTEGER;
    let tmp = [];
    for (let i = 0; i < N; i++) {
        tmp.push(arr[i]);
        for (let j = i + 1; j < N; j++) {
            if (tmp[tmp.length - 1] < arr[j]) {
                tmp.push(arr[j]);
            }
        }
        mx = Math.max(mx, tmp.length);
        tmp = [];
    }
    return mx;
}
console.log(solution(8, [5, 3, 7, 8, 6, 2, 9, 4]));

// 해설
function solution(N, arr) {
    let answer = 0;
    let dy = Array.from({ length: arr.length }, () => 0);
    dy[0] = 1; // 어짜피 0번째는 하나밖에 수열을 못만듬 길이1저장

    for (let i = 1; i < N; i++) {
        // 왜 0으로 초기화? -> 9, 1, 1, 1, 이라는 수열이 있을때 아무것도 수열을 내세울수 없을땐
        // j를 빠져나오고 자기자신과 +1을 해주면 최대 수열은 1이기 떄문에 0으로 초기화해준다.
        let mx = 0; // 0으로 초기화
        for (let j = i - 1; j >= 0; j--) {
            // 앞의 항중에서 작은값 && 앞의항의 길이가 mx보다 큰경우(최대값인경우)
            if (arr[j] < arr[i] && dy[j] > mx) {
                mx = dy[j]; // 최대값 갱신
            }
        }
        dy[i] = mx + 1; // 여기서 자신의길이까지 +1 해준다.
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}

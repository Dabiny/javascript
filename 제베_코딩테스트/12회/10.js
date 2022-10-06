function solution(arr, n) {
    let q = [...arr];
    let hos = [];
    
    let cnt = 0; // 분

    while (q.length >= 0) {
        if (hos.length < 3) {
            while (hos.length !== 3) {
                let n = q.shift();
                hos.push(n);
                cnt++;
            }
        }
        else {

        }
    }
    
}
console.log(solution([1, 1, 1, 2, 2, 1, 1], 3));
// 진료소문제 다시보기 ㅜㅜ 풀어봤던 것 같은데 기억이 나지 않는다. 다시 보고 복습하기 
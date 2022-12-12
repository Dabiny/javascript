function solution(n, a) {
    let answer = 'NO';
    let total = a.reduce((p, c) => p + c, 0);
    let flag = 0;
    function dfs(l, s) {
        if (flag) return;
        if(l === n) {
            if(s === total - s) {
                answer = 'YES';
                flag = 1;
            }
        }
        else {
            dfs(l + 1, a[l] + s);
            dfs(l + 1, s);
        }
    }
    dfs(0, 0);
    return answer;
}
console.log(solution(6, [1, 3, 5, 6, 7, 10]));
// 어떻게 선택한 숫자와 선택하지 않은 숫자를 같이 더하는 방법을 모르겠다. 
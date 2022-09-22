function solution(kg, arr) {
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(l, sum) {
        if (sum > kg) return; // kg넘어가면 어짜피 볼일도 없으니까 뻗어가기 종료
        if (l === arr.length){
            if(kg >= sum) answer = Math.max(sum, answer);
            return;
        }
        else {
            DFS(l + 1, sum + arr[l]); // 바둑이를 태운다o
            DFS(l + 1, sum); // 바둑이를 태우지않는다.x
        }
    }
    DFS(0, 0);
    return answer;
}
console.log(solution(259, [81, 58, 42, 33, 61]));

// 부분집합 문제는 자주나오니까 연습하기 !!

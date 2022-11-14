function solution(v) {
    let answer;

    function DFS(v) { // 넘어오는건 부모
        if (v > 7) {
            return;
        }
        else { // else는 무조건 DFS가 뻗는다 생각하기 
            DFS(v * 2); // 왼쪽자식 뻗기
            DFS(v * 2 + 1); // 오른쪽 자식 뻗기
            console.log(v); // 부모 출력하고
        }
    }
    DFS(v);

}

console.log(solution(1));
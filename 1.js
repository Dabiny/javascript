function solution(N) {
    let answer = [];
    let ch = Array.from({length: N + 1}, () => 0);
    function DFS(v) {
        if(v === N + 1) { //부분집합 하나 완성한거임. 
            let tmp = '';
            for (let i = 1; i <= N; i++) {
                if(ch[i] === 1) tmp += i + ' ';
            }
            if(tmp.length > 0) answer.push(tmp.trim());
            return;
        }
        else {
            ch[v] = 1; // 체크배열에 1체크 
            DFS(v + 1); // 2 2로 뻗는거니까 v + 1두번 

            ch[v] = 0; // 포함안시킨다에 1체크 
            DFS(v + 1);
        }
    }
    DFS(1);
    return answer;
}
console.log(solution(3));
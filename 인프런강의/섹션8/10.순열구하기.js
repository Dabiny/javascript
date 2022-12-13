function solution(n,m,arr){
    let tmp = Array.from({length: m}, () => 0);
    function DFS(l){
        if (l === m){
            console.log(tmp);
        }
        else {
            for (let i = 0; i < n; i++){
                if (tmp[l - 1] !== arr[i]){
                    tmp[l] = arr[i];
                    DFS(l + 1);
                }
            }
        }
    }
    DFS(0);
}
console.log(solution(3, 2, [3, 6, 9]));

// 해설
function solution(n,m,arr){
    let tmp = Array.from({length: m}, () => 0);
    let ch = Array.from({length: n}, () => 0);
    let cnt = 0;
    function DFS(l){
        if (l === m){
            console.log(tmp);
            cnt++;
        }
        else{
            for (let i = 0; i < n; i++){
                if(ch[i] === 0) { // 내가 틀린 부분
                    ch[i] = 1;
                    tmp[l] = arr[i];
                    DFS(l + 1);
                    ch[i] = 0; // back할때 0으로 다시 되돌려놓기
                } // 외우다시피 해야한다(순열)
            }
        }
    }
    DFS(0);
    return cnt;
}
console.log(solution(3, 2, [3, 6, 9]));


// 12/12
function solution(N, M, arr) {
    // 무조건 완전탐색하며 풀어야한다. 
    let answer = 0;
    let permutation = [];
    const tmp = Array.from({length: M}, () => 0); 
    // tmp: [ , ];
    const ch = Array.from({length: N}, () => 0); // check배열
    function dfs(l){
        if(l === M) {
            console.log(tmp);
            // permutation.push(tmp.slice()); // 배열 만든거 잘라넣기(깊복)
            answer++;
            return;
        }
        else {  
            // 외우다시피 해야된다. 
            for (let i = 0; i < N; i++) {
                if (ch[i] === 1) continue;
                ch[i] = 1; // check
                tmp[l] = arr[i];
                dfs(l + 1);
                ch[i] = 0; // check해제
            }
        }
    }
    dfs(0);
    return answer;
}
console.log(solution(3, 2, [3, 6, 9]));
// 다시 풀어보기 내일
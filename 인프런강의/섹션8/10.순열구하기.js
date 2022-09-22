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
        else {
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
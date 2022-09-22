function solution(n) {
    let ch = [];
    function DFS(v) {
        if(v === n + 1){
            let tmp = "";
            for (let i = 1; i <= ch.length; i++){
                if (ch[i] === 1) tmp += i + ' ';
            }
            if (tmp.length > 0) answer.push(tmp.trim());
            return;
        }
        else{
            ch[v] = 1; 
            DFS(v + 1); // 9

            ch[v] = 0;
            DFS(v + 1);
        }
    }
    DFS(1); //1부터 시작
}
console.log(solution(3));
//부분집합은 2^n 2 => 있다, 없다의 경우의수를 뜻함. 
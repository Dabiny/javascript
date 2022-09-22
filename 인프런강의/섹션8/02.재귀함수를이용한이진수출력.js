function solution(n){
    let str = n.toString(2);
    
    function dfs(str, cnt){
        if (cnt === str.length) return;
        else{
            console.log(str[cnt]);
            dfs(str, cnt + 1);
        }
    }
    dfs(str, 0);
}
console.log(solution(11));


function solution(n){ 
    let answer = "";
    function dfs(n){
        if (n === 0) return;
        else {
            dfs(parseInt(n / 2)); // 몫으로 넘어가야함. 
            answer += String(n % 2); 
        }
    }
    dfs(n);
    return answer;
}
console.log(solution(11));
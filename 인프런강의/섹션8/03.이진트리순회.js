function solution(v) {
    let answer;
    function DFS(v) { //넘어온건 부모
        if(v > 7){
            return;
        }
        else{
            DFS(v * 2); 
            DFS(v * 2 + 1);
            console.log(v); 
        }
    }   
    DFS(v);
    return answer;
}
console.log(solution(1));
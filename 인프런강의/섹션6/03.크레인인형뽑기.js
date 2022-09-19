function solution (board, moves) {
    let stk = [];
    let move = moves.map((v, i, arr) => arr[i] - 1);
    answer = 0;
    for (let i = 0; i < move.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if(board[j][move[i]] !== 0){
                if(stk[stk.length - 1] == board[j][move[i]]){
                    answer++;
                    stk.pop();
                    answer++;
                    break;
                }
                stk.push(board[j][move[i]]);
                board[j][move[i]] = 0;
                
                break;
            }
        }
    }
    return answer;
}

console.log(solution([
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
],[1,5,3,5,1,2,1,4]))
// 성공
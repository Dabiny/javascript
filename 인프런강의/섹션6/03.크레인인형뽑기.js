// function solution (board, moves) {
//     let stk = [];
//     let move = moves.map((v, i, arr) => arr[i] - 1);
//     answer = 0;
//     for (let i = 0; i < move.length; i++) {
//         for (let j = 0; j < board.length; j++) {
//             if(board[j][move[i]] !== 0){
//                 if(stk[stk.length - 1] == board[j][move[i]]){
//                     answer++;
//                     stk.pop();
//                     answer++;
//                     break;
//                 }
//                 stk.push(board[j][move[i]]);
//                 board[j][move[i]] = 0;
//                 break;
//             }
//         }
//     }
//     return answer;
// }

// console.log(solution([
//     [0,0,0,0,0],
//     [0,0,1,0,3],
//     [0,2,5,0,1],
//     [4,2,4,4,2],
//     [3,5,1,3,1]
// ],[1,5,3,5,1,2,1,4]))
// 정확도 27.3 tmp를 안해주었다. .. 꺼낸인형을 바로 바구니에 집어넣어버림
// break도 2번이나 있다. 문제가 있음

function solution (board, moves) {
    let answer = 0;
    let stack = [];
    moves.forEach(pos => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][pos - 1] !== 0) {
                let tmp = board[i][pos - 1]; // 인형 꺼냄
                board[i][pos - 1] = 0; // 인형 꺼낸자리 빈공간으로 채우기
                if (tmp === stack[stack.length - 1]) { // 만약 바구니위가 같은인형이면 둘다 없애야함.
                    answer += 2; // 두개 터졌으니까
                    stack.pop(); 
                }
                else stack.push(tmp);
                break; // 포문 멈추기 하나만꺼내고 다음 크레인번호로 넘어가기 위해!!
            }
        }
    });
    return answer;
}
console.log(solution([
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
],[1,5,3,5,1,2,1,4]))

// 다시 풀어보기 
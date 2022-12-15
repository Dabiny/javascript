function solution(board) {
    let answer = 0;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];

    let queue = []; // 큐 생성

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                // 육지이면
                board[i][j] = 0; // check
                queue.push([i, j]);
                answer++; // counting 
                
                while (queue.length) {
                    let [x, y] = queue.shift();

                    for (let k = 0; k < 8; k++) {
                        let nx = x + dx[k];
                        let ny = y + dy[k];

                        if (
                            nx >= 0 &&
                            nx < board.length &&
                            ny >= 0 &&
                            ny < board.length &&
                            board[nx][ny] === 1
                        ) {
                            board[nx][ny] = 0; // check하고
                            queue.push([nx, ny]);
                        }
                    }
                }
            }
        }
    }
    return answer;
}
console.log(
    solution([
        [1, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 0],
    ])
);

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
function dfs(y, x, visited, grid) {
    visited[y][x] = 1;
    for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];

        if (ny < 0 || ny >= visited.length || nx < 0 || nx >= visited[0].length) continue;
        if (grid[ny][nx] == 1 && visited[ny][nx] == 0) {
            dfs(ny, nx, visited, grid);
        }
    }
}
function solution(grid) {
    var answer = 0;
    let n = grid.length; 
    let visited = [];
    for (let i = 0; i < n; i++) visited[i] = new Array(grid[0].length).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1 && visited[i][j] == 0){
                dfs(i, j, visited, grid);
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution([
["1", "1", "1", "1", "0"], 
["1", "1", "0", "1", "0"], 
["1", "1", "0", "0", "0"], 
["0", "0", "0", "0", "0"]]));

// 1.0